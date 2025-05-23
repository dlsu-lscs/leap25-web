import { getEventMedia } from '@/services/eventService';
import { classPubModel } from '@/types/classModels';
import { useEffect, useState } from 'react';

const useSetEventMedia = (event_id: any) => {
  const [eventMedia, setEventMedia] = useState<classPubModel>();

  useEffect(() => {
    const fetchData = async () => {
      const eventMedia = await getEventMedia(event_id, process.env.NEXT_PUBLIC_LEAP_API);
      setEventMedia(eventMedia);
    };
    fetchData();
  }, [event_id]);

  return { eventMedia };
};

export { useSetEventMedia };
