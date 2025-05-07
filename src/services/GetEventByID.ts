import { API_URL } from '@/lib/constants';

export default async function GetEventsByID(eventID: string) {
  const response = await fetch(`${API_URL}/events/${eventID}`);

  if (!response.ok) throw new Error('Failed to get Classes');

  return response.json();
}
