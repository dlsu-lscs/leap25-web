import { formatDate } from '@/lib/helpers';
import { giveCalendarLink } from '@/services/googleCalendarService';

const useSaveEvent = (
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

export { useSaveEvent };
