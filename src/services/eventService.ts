import { API_URL } from '@/lib/constants';
import axios from 'axios';

const getEvents = async (subtheme: string) => {
  const response = await fetch(`${API_URL}/events/subtheme`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ subtheme }),
    cache: 'default',
  });

  if (!response.ok) throw new Error('Failed to get Classes');

  return response.json();
};

const getEventByID = async (eventID: number) => {
  try {
    const response = await axios.get(`${API_URL}/events/${eventID}`);
    return response.data;
  } catch (error: any) {
    console.log('error:' + error);
  }
};

export { getEvents, getEventByID };
