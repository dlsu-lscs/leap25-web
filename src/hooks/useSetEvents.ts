import { API_URL } from '@/lib/constants';
import { getEventByID } from '@/services/eventService';
import { classModel } from '@/types/classModels';
import { useState, useEffect } from 'react';

const useSetEvent = (event_id: any) => {
  const [event, setEvents] = useState<classModel>();

  useEffect(() => {
    const fetchData = async () => {
      if (event_id) {
        const event = await getEventByID(event_id, API_URL);
        setEvents(event);
      }
    };
    fetchData();
  }, [event_id]);

  return { event };
};

export { useSetEvent };
