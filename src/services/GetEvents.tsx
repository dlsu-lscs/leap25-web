import { API_URL } from '@/lib/constants';

export default async function GetEvents(subtheme: string) {
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
}
