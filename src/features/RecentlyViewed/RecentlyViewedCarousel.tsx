'use client';

import { LeapCarousel } from '@/components/ui/LeapCarousel';
import { CLIENT_API_URL } from '@/lib/constants';
import { classPubModel } from '@/types/classModels';
import { useEffect, useState } from 'react';
import SubThemeClassCard from '../subthemeComponents/subThemeClassCard/SubthemeClassCard';

interface Event {
  id: number;
  org_id: number;
  contentful_id: string;
  title: string;
  description: string;
  subtheme_id: number;
  venue: string;
  schedule: string;
  fee: number;
  code: string;
  registered_slots: number;
  max_slots: number;
}

interface EventWithMedia {
  event: Event;
  media?: classPubModel;
}

const getClientEventByID = async (eventID: number) => {
  try {
    const response = await fetch(`${CLIENT_API_URL}/events/${eventID}`);
    if (!response.ok) throw new Error('Failed to get event');
    return await response.json();
  } catch (error: any) {
    console.error('Error fetching event:', error.message);
  }
};

const getClientEventMedia = async (eventID: number) => {
  try {
    const response = await fetch(`${CLIENT_API_URL}/events/${eventID}/media`);
    if (!response.ok) return undefined;
    return await response.json();
  } catch (error: any) {
    console.error('Error fetching media:', error.message);
  }
};

export default function RecentlyViewedCarousel({ subtheme }: any) {
  const [recentClassesWithMedia, setRecentClassesWithMedia] = useState<EventWithMedia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEventsWithMedia() {
      const stored = localStorage.getItem('recentlyViewedClasses');
      if (!stored) {
        setLoading(false);
        return;
      }

      const ids: number[] = JSON.parse(stored).map(Number);

      const results = await Promise.all(
        ids.map(async (id) => {
          const event = await getClientEventByID(id);
          if (!event) return null;

          const media = await getClientEventMedia(id);
          return { event, media } as EventWithMedia;
        })
      );

      setRecentClassesWithMedia(results.filter((item): item is EventWithMedia => item !== null));
      setLoading(false);
    }

    fetchEventsWithMedia();
  }, []);

  if (loading || recentClassesWithMedia.length === 0) return null;

  return (
    <LeapCarousel
      loopItems={false}
      row2={false}
      itemsToShow={recentClassesWithMedia.map(({ event, media }, index) => (
        <div key={index}>
          <SubThemeClassCard
            subtheme={subtheme}
            id={event.id}
            registered_slots={event.registered_slots}
            max_slots={event.max_slots}
            descripton={event.description}
            title={event.title}
            eventMedia={media}
          />
        </div>
      ))}
    />
  );
}
