import { getEventByID } from '@/services/eventService';
import { classModel } from '@/types/classModels';
import { useState, useEffect } from 'react';

const useSetEvent = (event_id: any) => {
  const [event, setEvents] = useState<classModel>();

  useEffect(() => {
    const fetchData = async () => {
      if (event_id) {
        const event = await getEventByID(event_id, process.env.NEXT_PUBLIC_LEAP_API);
        setEvents(event);
      }
    };
    fetchData();
  }, [event_id]);

  return { event };
};

export { useSetEvent };
