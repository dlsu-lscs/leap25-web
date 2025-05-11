export function nameInitials(name: any) {
  name = name.toUpperCase();
  return name.slice(0, 2);
}

export function formatDate(date: any, durationMinutes = 60) {
  const startDate = new Date(date);
  const endDate = new Date(startDate.getTime() + durationMinutes * 60000);

  const format = (date: Date) => date.toISOString().replace(/[-:]/g, '').split('.')[0];

  const startStr = format(startDate);
  const endStr = format(endDate);

  return `${startStr}/${endStr}`;
}
