import { CALENDAR_URL } from '@/lib/constants';

const giveCalendarLink = (
  title: string,
  description: string,
  hostedBY: string,
  venue: string,
  time: string
) => {
  return `${CALENDAR_URL}?action=TEMPLATE&text=${title}&details=Description: ${description}%0AHosted By: ${hostedBY}%0AVenue: ${venue}&dates=${time}`;
};
export { giveCalendarLink };
