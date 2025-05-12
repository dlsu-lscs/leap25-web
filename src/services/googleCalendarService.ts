import { CALENDAR_URL } from '@/lib/constants';
import { formatDate } from '@/lib/helpers';

const giveCalendarLink = (
  title: string,
  description: string,
  hostedBY: string,
  venue: string,
  time: string
) => {
  return `${CALENDAR_URL}?action=TEMPLATE&text=${title}&details=Description: ${description}%0AHosted By: ${hostedBY}%0AVenue: ${venue}&dates=${time}`;
};

const saveEventToCalendar = (
  title: string,
  description: string,
  hostedBY: string,
  venue: string,
  time: string
) => {
  if (typeof window === 'undefined') return;
  const isoDate = formatDate(time);
  const googleCalendarLink = giveCalendarLink(title, description, hostedBY, venue, isoDate);

  window.open(googleCalendarLink, '_blank');
};
export { giveCalendarLink, saveEventToCalendar };
