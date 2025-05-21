import { getEventByID } from '@/services/eventService';
import { classModel } from '@/types/classModels';
import { useState, useEffect } from 'react';

const useSetEvent = (event_id: any) => {
  const [event, setEvents] = useState<classModel>();

  useEffect(() => {
    const fetchData = async () => {
      const event = await getEventByID(event_id);
      setEvents(event);
    };
    fetchData();
  }, [event_id]);
  return { event };
};

export { useSetEvent };
