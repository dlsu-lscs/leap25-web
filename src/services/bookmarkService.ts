import { API_URL } from '@/lib/constants';
import axios from 'axios';

const postBookmark = async (user_id: any, event_id: any) => {
  try {
    const response = await axios.post(
      `${API_URL}/bookmarks`,
      {
        user_id: user_id,
        event_id: event_id,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log('error: ' + error);
  }
};

const deleteBookmark = async (user_id: any, event_id: any) => {
  try {
    const response = await axios.delete(`${API_URL}/bookmarks`, {
      data: {
        user_id: user_id,
        event_id: event_id,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log('error: ' + error);
  }
};

const getBookmarks = async (userId: any) => {
  if (userId) {
    try {
      const response = await fetch(`${API_URL}/users/${userId}/bookmarks`, {
        next: { revalidate: 60 },
      });

      if (!response.ok) {
        throw new Error('Failed to get users');
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

export { postBookmark, deleteBookmark, getBookmarks };
