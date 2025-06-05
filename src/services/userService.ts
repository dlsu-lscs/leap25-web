import { API_URL, API_SECRET } from '@/lib/constants';

const getUserByID = async (userID: number) => {
  try {
    const response = await fetch(`${API_URL}/users/${userID}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_SECRET}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get user');
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

const getUserByEmail = async (email: any, API_URL = process.env.LEAP_API) => {
  if (email) {
    try {
      const response = await fetch(`${API_URL}/users?email=${email}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_SECRET}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'MyAppClient/1.0',
          'X-Custom-Header': 'secure-client-check',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to get user');
      }

      return await response.json();
    } catch (error: any) {
      if (error instanceof TypeError) {
        console.error('Network error: Unable to fetch data. Please check your connection.');
      } else {
        console.error('Unexpected error:', error.message);
      }
    }
  }
};

export { getUserByID, getUserByEmail };
