'use client';

import { LeapCarousel } from '@/components/ui/LeapCarousel';
import { classModel, classPubModel, subThemeModel } from '@/types/classModels';
import { useEffect, useState } from 'react';
import SubThemeClassCard from '../subthemeComponents/subThemeClassCard/SubthemeClassCard';
import { getEventByID, getEventMedia } from '@/services/eventService';
import { getSubThemeByID, getSubThemeLink } from '@/services/subthemeService';

interface EventWithMediaAndSubtheme {
  event: classModel;
  media?: classPubModel;
  subtheme: subThemeModel;
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
          const event = await getEventByID(id, process.env.NEXT_PUBLIC_LEAP_API);
          if (!event) return null;

          const media = await getEventMedia(id, process.env.NEXT_PUBLIC_LEAP_API);
          const subtheme = await getSubThemeByID(
            event.subtheme_id,
            process.env.NEXT_PUBLIC_LEAP_API
          );

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
        console.log(subtheme);
        console.log(getSubThemeLink(subtheme.title));
        return (
          <>
            <div key={index}>
              <SubThemeClassCard
                subtheme={subthemeLink}
                id={event.id}
                registered_slots={event.registered_slots}
                max_slots={event.max_slots}
                descripton={event.description}
                title={event.title}
                eventMedia={media}
                slug={event.slug}
              />
            </div>
          </>
        );
      })}
    />
  );
}
