const getEvents = async (subtheme: any) => {
  try {
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
