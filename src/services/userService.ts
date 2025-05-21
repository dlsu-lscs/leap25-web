import { API_URL } from '@/lib/constants';
const getUserByID = async (userID: number) => {
  try {
    const response = await fetch(`${API_URL}/users/${userID}`);

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

const getUserByEmail = async (email: string) => {
  try {
    const response = await fetch(`${API_URL}/users?email=${email}`);

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
