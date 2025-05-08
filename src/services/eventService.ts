import { API_URL } from '@/lib/constants';
import axios from 'axios';

const getEvents = async (subtheme: string) => {
  try {
    const response = await axios.post(`${API_URL}/events`, {
      headers: {
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    console.log('error:' + error);
  }
};

const GetEventByID = async (eventID: number) => {
  try {
    const response = await axios.get(`${API_URL}/events/${eventID}`);
    return response.data;
  } catch (error: any) {
    console.log('error:' + error);
  }
};

export { getEvents };
