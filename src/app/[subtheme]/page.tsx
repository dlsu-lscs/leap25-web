import Navbar from '@/components/layout/Navbar';
import { LeapCarousel } from '@/components/ui/LeapCarousel';
import LeapSeperator from '@/components/ui/LeapSeperator';
import SubThemeClassCard from '@/features/subthemeComponents/subThemeClassCard/SubthemeClassCard';
import { nameInitials } from '@/lib/helpers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import FadeOverlay from '@/components/ui/FadeOverlay';
import { getSubTheme, getSubThemeByID, getSubThemeByName } from '@/services/subthemeService';
import { getEventByDay, getEventByID, getEventMedia, getEvents } from '@/services/eventService';
import HighlightClientWrapper from '@/features/subthemeComponents/highlightClientWrapper';
import { classModel, classPubModel, highlightModel, subThemeModel } from '@/types/classModels';
import BookmarkedEvents from '@/features/bookmark/Bookmarked';
import { getAllHighlightEvent } from '@/services/highlightServices';

import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subtheme: string }>;
}): Promise<Metadata> {
  const { subtheme } = await params;
  const { name } = getSubTheme(subtheme);

  const subthemeDetails: subThemeModel = await getSubThemeByName(name);
  const fallBackImage = '/leapPub.webp';

  return {
    title: `${subthemeDetails.title}`,
    description: `${subthemeDetails.title}`,
    openGraph: {
      title: subthemeDetails.title,
      description: `${subthemeDetails.title}`,
      images: subthemeDetails.background_pub_url
        ? [subthemeDetails.background_pub_url]
        : [fallBackImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: subthemeDetails.title,
      description: `${subthemeDetails.title}`,
      images: subthemeDetails.background_pub_url
        ? [subthemeDetails.background_pub_url]
        : [fallBackImage],
    },
  };
}

export default async function Subtheme({ params }: { params: Promise<{ subtheme: string }> }) {
  const { subtheme } = await params;

  const { asset, name } = getSubTheme(subtheme);

  const events: classModel[] = await getEvents(name);
  const eventsWithMedia = await Promise.all(
    events.map(async (event) => {
      const eventMedia = await getEventMedia(event.id);
      return { ...event, eventMedia };
    })
  );

  const highlightEvents: highlightModel[] = await getAllHighlightEvent();

  const highlightEventswithEventDetails = await Promise.all(
    highlightEvents.map(async (event) => {
      const highlightEvent: classModel = await getEventByID(event.event_id);
      const highlightSubtheme: subThemeModel = await getSubThemeByID(highlightEvent.subtheme_id);
      return { ...event, highlightEvent, highlightSubtheme };
    })
  );

  const subthemeDetails: subThemeModel = await getSubThemeByName(name);

  return (
    <div className="overflow-hidden">
      <div className="fixed top-0 z-20">
        <Navbar variant="map" />
      </div>
      <HighlightClientWrapper
        asset={asset || 'error'}
        name={name || 'error'}
        highlightEvent={highlightEventswithEventDetails}
      ></HighlightClientWrapper>
      <div className="absolute -translate-y-10 ">
        <FadeOverlay></FadeOverlay>
      </div>
      <div
        className={`min-h-screen py-12 sm:py-20 sm:px-24 text-white  bg-black/60 bg-blend-multiply bg-cover bg-center`}
        style={{ backgroundImage: `url("${subthemeDetails.background_pub_url}")` }}
      >
        <div>
          <div className="py-12 sm:px-0 px-4 space-y-4">
            <div className="flex gap-4 sm:gap-8 items-center justify-start flex-row center w-full">
              <Avatar className="sm:w-24 sm:h-24 w-20 h-20 text-xs">
                <AvatarImage src={subthemeDetails.logo_pub_url} />
                <AvatarFallback>{nameInitials('na')}</AvatarFallback>
              </Avatar>
              <div className="flex gap-4 justify-center">
                <h1
                  className={`text-3xl md:text-6xl font-bold sm:text-nowrap text-wrap font-playfair `}
                >
                  {subthemeDetails.title}
                </h1>
                <LeapSeperator direction="right"></LeapSeperator>
              </div>
            </div>

            <div>
              <h2 className={`text-[25px] sm:text-[30px] font-bold sm:ml-0 ml-4 font-playfair`}>
                Day 1
              </h2>
            </div>
            <LeapCarousel
              loopItems={false}
              row2={false}
              itemsToShow={eventsWithMedia.map((event, index) =>
                event.eventMedia ? (
                  <div key={index}>
                    <SubThemeClassCard
                      key={index}
                      subtheme={subtheme}
                      id={event.id}
                      registered_slots={event.registered_slots}
                      max_slots={event.max_slots}
                      descripton={event.description}
                      title={event.title}
                      eventMedia={event.eventMedia}
                      slug={event.slug}
                    />
                  </div>
                ) : null
              )}
            ></LeapCarousel>
            <div>
              <h2 className={`text-[25px] sm:text-[30px] font-bold sm:ml-0 ml-4 font-playfair`}>
                Day 2
              </h2>
            </div>
            <LeapCarousel
              loopItems={false}
              row2={false}
              itemsToShow={eventsWithMedia.map((event, index) =>
                event.eventMedia ? (
                  <div key={index}>
                    <SubThemeClassCard
                      key={index}
                      subtheme={subtheme}
                      id={event.id}
                      registered_slots={event.registered_slots}
                      max_slots={event.max_slots}
                      descripton={event.description}
                      title={event.title}
                      eventMedia={event.eventMedia}
                      slug={event.slug}
                    />
                  </div>
                ) : null
              )}
            ></LeapCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
