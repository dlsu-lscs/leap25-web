'use client';

import { LeapCarousel } from '@/components/ui/LeapCarousel';
import { classPubModel } from '@/types/classModels';
import { useEffect, useState } from 'react';
import SubThemeClassCard from '../subthemeComponents/subThemeClassCard/SubthemeClassCard';
import { getEventByID, getEventMedia } from '@/services/eventService';
import { getSubThemeByID, getSubThemeLink } from '@/services/subthemeService';

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

interface EventWithMediaAndSubtheme {
  event: Event;
  media?: classPubModel;
  subtheme: any; // Adjust type if you have a defined Subtheme type
}

export default function RecentlyViewedCarousel() {
  const [recentItems, setRecentItems] = useState<EventWithMediaAndSubtheme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEventsData() {
      const stored = localStorage.getItem('recentlyViewedClasses');
      if (!stored) {
        setLoading(false);
        return;
      }

      const ids: number[] = JSON.parse(stored).map(Number);

      const results = await Promise.all(
        ids.map(async (id) => {
          const event = await getEventByID(id);
          if (!event) return null;

          const media = await getEventMedia(id);
          const subtheme = await getSubThemeByID(event.subtheme_id);

          return { event, media, subtheme } as EventWithMediaAndSubtheme;
        })
      );

      setRecentItems(results.filter((item): item is EventWithMediaAndSubtheme => item !== null));
      setLoading(false);
    }

    fetchEventsData();
  }, []);

  if (loading || recentItems.length === 0) return null;

  return (
    <LeapCarousel
      loopItems={false}
      row2={false}
      itemsToShow={recentItems.map(({ event, media, subtheme }, index) => {
        const subthemeLink = getSubThemeLink(subtheme.title) ?? '';
        return (
          <>
            (
            <div key={index}>
              <SubThemeClassCard
                subtheme={subthemeLink}
                id={event.id}
                registered_slots={event.registered_slots}
                max_slots={event.max_slots}
                descripton={event.description}
                title={event.title}
                eventMedia={media}
              />
            </div>
            )
          </>
        );
      })}
    />
  );
}
