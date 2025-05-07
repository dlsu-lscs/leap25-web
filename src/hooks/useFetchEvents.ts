import { useState, useEffect } from 'react';
import GetEvents from '@/services/GetEvents';

const useFetchEvents = (subthemeName: string) => {
  const [events, setEvents] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const eventsData = await GetEvents(subthemeName);
        setEvents(eventsData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subthemeName]);

  return { events, error, loading };
};

export default useFetchEvents;
