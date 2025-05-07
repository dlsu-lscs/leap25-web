import { useState, useEffect } from 'react';
import { classModel } from '@/types/classModels';
import GetEventByID from '@/services/GetEventByID';

const useFetchEventByID = (eventID: number) => {
  const [event, setEvents] = useState<classModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const eventsData = await GetEventByID(eventID);
        setEvents(eventsData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [eventID]);

  return { event, error, loading };
};

export default useFetchEventByID;
