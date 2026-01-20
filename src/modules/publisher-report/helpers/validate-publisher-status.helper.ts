import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceYearMonths } from 'src/utils/service-year-months.util';

export async function isPublisherActive(person_id: number, prisma: PrismaService) {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const serviceYearMonths = new ServiceYearMonths(currentYear);
  const serviceYear = serviceYearMonths.getServiceYear(currentMonth);

  const reports = await prisma.publisherReport.findMany({
    where: {
      person_id,
      service_year: serviceYear,
    },
    orderBy: [{ year: 'desc' }, { month: 'desc' }],
  });

  if (!reports.length) {
    // If no reports in the CURRENT service year?
    // User logic: "si lleva más de 3 meses sin reporte"
    // If we are in September (month 1 of service year), and they have no reports *in this year*, we must look back?
    // BUT prompt said: "consultar los reportes de la persona del año de servicio actual" (consult reports of current service year).
    // If I strictly follow "consult current service year", and they have 0 reports, and we are in month 4 of the service year (December), then they are inactive.
    // If we are in month 1 (September), and 0 reports, are they inactive? No, maybe only 1 month missed.

    // Let's count how many months have passed in THIS service year.
    // Months order: 9, 10, 11, 12, 1, 2...

    const monthsOrder = serviceYearMonths.monthsOrder;
    const currentMonthIndex = monthsOrder.indexOf(currentMonth);
    // If currentMonth is 9 (index 0), 0 months passed? Or we are IN month 9.
    // We usually check "closed" months or current status.
    // "si lleva más de 3 meses" -> > 3 months gap.

    // If currentMonthIndex is <= 3 (Sept, Oct, Nov, Dec), and no reports:
    // We can't definitively say they are inactive just by looking at THIS year if index is small.
    // But if index > 3 and NO reports, definitively inactive.

    // HOWEVER, strict instruction: "consultar los reportes de la persona del año de servicio actual".
    // I will implement:
    // 1. Get reports for service year.
    // 2. Find the last report month.
    // 3. Compare with current month index.

    if (currentMonthIndex > 3) return false;

    // If index <= 3, and no reports, we officially don't know without looking at previous year.
    // BUT default to true? Or false?
    // "si lleva más de 3 meses... false".
    // If currentMonth is Oct (index 1). Gap is max 1 month (Sept). So not > 3. True.
    return true;
  }

  const lastReport = reports[0];
  const monthsOrder = serviceYearMonths.monthsOrder;
  const currentMonthIndex = monthsOrder.indexOf(currentMonth);
  const lastReportIndex = monthsOrder.indexOf(lastReport.month);

  // Calculate gap
  // If current is 12 (Dec, index 3), last report 9 (Sept, index 0).
  // Gap = 3 - 0 = 3. Is "more than 3"? No. 3 months exactly.
  // If current is 1 (Jan, index 4). Last report 9. Gap = 4. > 3. False.

  const gap = currentMonthIndex - lastReportIndex;

  if (gap > 3) return false;

  return true;
}
