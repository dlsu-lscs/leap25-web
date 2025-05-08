import { API_URL } from '@/lib/constants';

export default async function GetEventByID(eventID: number) {
  const response = await fetch(`${API_URL}/events/${eventID}`);

  if (!response.ok) throw new Error('Failed to get Classes');

  return response.json();
}
