import { useSetEventsBySubtheme } from '@/hooks/useSetEventBySubtheme';

export function nameInitials(name: any) {
  name = name.toUpperCase();
  return name.slice(0, 2);
}

export function formatSchedule(schedule: string) {
  const date = new Date(schedule);

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  };

  const formattedDate = date.toLocaleDateString('en-US', dateOptions);
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

  return { formattedDate, formattedTime };
}

export function formatDate(date: any, durationMinutes = 60) {
  const startDate = new Date(date);
  const endDate = new Date(startDate.getTime() + durationMinutes * 60000);

  const format = (date: Date) => date.toISOString().replace(/[-:]/g, '').split('.')[0];

  const startStr = format(startDate);
  const endStr = format(endDate);

  return `${startStr}/${endStr}`;
}
