import { API_URL } from '@/lib/constants';

const getEvents = async (subtheme: any) => {
  try {
    console.log(subtheme);
    const response = await fetch(`${API_URL}/events/subtheme`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subtheme }),
      cache: 'default',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get Classes: ${response.status} - ${errorText}`);
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof TypeError) {
      console.error('Network error: Unable to fetch data. Please check your connection.');
    } else {
      console.error('Unexpected error:', error.message);
    }
    throw error;
  }
};

const getEventByID = async (eventID: number) => {
  try {
    const response = await fetch(`${API_URL}/events/${eventID}`);

    if (!response.ok) {
      throw new Error('Failed to get event');
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof TypeError) {
      console.error('Network error: Unable to fetch data. Please check your connection.');
    } else {
      console.error('Unexpected error:', error.message);
    }
  }
};

const getEventMedia = async (eventID: any) => {
  try {
    const response = await fetch(`${API_URL}/events/${eventID}/media`);

    if (!response.ok) {
      throw new Error('Failed to get event');
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof TypeError) {
      console.error('Network error: Unable to fetch data. Please check your connection.');
    } else {
      console.error('Unexpected error:', error.message);
    }
  }
};

export { getEvents, getEventByID, getEventMedia };
