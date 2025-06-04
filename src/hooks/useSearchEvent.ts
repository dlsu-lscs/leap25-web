import { useEffect, useState } from 'react';
import { getEventBySearch } from '@/services/eventService';
import { classModel } from '@/types/classModels';
import { API_URL } from '@/lib/constants';

const useSetSearchEvent = (searchValue: string) => {
  const [event, setEvent] = useState<classModel[]>([]);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchValue.trim() !== '') {
        const fetchData = async () => {
          const event = await getEventBySearch(searchValue, API_URL);
          setEvent(event);
        };
        fetchData();
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);
  return { event };
};

export { useSetSearchEvent };
