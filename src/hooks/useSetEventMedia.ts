import { API_URL } from '@/lib/constants';
import { getEventMedia } from '@/services/eventService';
import { classPubModel } from '@/types/classModels';
import { useEffect, useState } from 'react';

const useSetEventMedia = (event_id: any) => {
  const [eventMedia, setEventMedia] = useState<classPubModel>();

  useEffect(() => {
    const fetchData = async () => {
      const eventMedia = await getEventMedia(event_id, API_URL);
      setEventMedia(eventMedia);
    };
    fetchData();
  }, [event_id]);

  return { eventMedia };
};

export { useSetEventMedia };
