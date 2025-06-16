import { useSetEventsBySubtheme } from '@/hooks/useSetEventBySubtheme';

export const getAvailableEvents = (subtheme: any) => {
  const { events } = useSetEventsBySubtheme(subtheme);
  const filteredEvents = events?.filter((event) => {
    return event.registered_slots < event.max_slots;
  });
  return filteredEvents.length;
};
