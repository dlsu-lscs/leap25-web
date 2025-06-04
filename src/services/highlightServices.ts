import { API_URL, API_SECRET } from '@/lib/constants';

const getAllHighlightEvent = async () => {
  try {
    const response = await fetch(`${API_URL}/highlights/`, {
      next: { revalidate: 60 },
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_SECRET}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof TypeError) {
      console.error('Network error: Unable to fetch data. Please check your connection.');
    } else {
      console.error('Unexpected error:', error.message);
    }
    return null;
  }
};

export { getAllHighlightEvent };
