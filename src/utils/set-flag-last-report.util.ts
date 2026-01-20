export function setFlagLastReport(
  people: any[],
  input: {
    moonthOrdered: number[];
    currentMonth: number;
    serviceYear: number;
  },
) {
  // if (!people.length) return;
  console.log(people);

  const { moonthOrdered, currentMonth, serviceYear } = input;

  for (const person of people) {
    person['already_sent_last_report'] = false;
    if (!person.reports.length) continue;

    const [report] = person.reports;
    const lastMonth = moonthOrdered[moonthOrdered.indexOf(currentMonth) - 1];

    if (report.month === lastMonth && report.service_year === serviceYear) {
      person['already_sent_last_report'] = true;
    }
  }

  return people;
}
