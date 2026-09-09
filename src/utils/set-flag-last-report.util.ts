export function setFlagLastReport(
  people: any[],
  input: {
    moonthOrdered: number[];
    currentMonth: number;
    serviceYear: number;
  },
) {
  const { moonthOrdered, currentMonth, serviceYear } = input;
  const currentIndex = moonthOrdered.indexOf(currentMonth);
  const lastMonthIndex = currentIndex === 0 ? moonthOrdered.length - 1 : currentIndex - 1;
  const lastMonth = moonthOrdered[lastMonthIndex];
  const lastMonthServiceYear = currentIndex === 0 ? serviceYear - 1 : serviceYear;

  for (const person of people) {
    person['already_sent_last_report'] = false;
    if (!person.reports.length) continue;

    const [report] = person.reports;

    if (report.month === lastMonth && report.service_year === lastMonthServiceYear) {
      person['already_sent_last_report'] = true;
    }
  }

  return people;
}
