import { API_URL, API_SECRET } from '@/lib/constants';

const getOrgs = async () => {
  try {
    const response = await fetch(`${API_URL}/orgs/`, {
      next: { revalidate: 60 },
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_SECRET}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get org');
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

const getOrgByID = async (orgID: number) => {
  try {
    const response = await fetch(`${API_URL}/orgs/${orgID}`, {
      next: { revalidate: 60 },
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_SECRET}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get org');
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
export { getOrgByID, getOrgs };
