import { API_URL } from '@/lib/constants';
import { getEvents } from '@/services/eventService';
import { classModel } from '@/types/classModels';
import { useEffect, useState } from 'react';

const useSetEventsBySubtheme = (subtheme: any) => {
  const [events, setEvents] = useState<classModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const events = await getEvents(subtheme, API_URL);
      setEvents(events);
    };
    fetchData();
  }, []);

  return { events };
};

export { useSetEventsBySubtheme };
