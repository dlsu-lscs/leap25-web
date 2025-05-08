'use client';

import { use } from 'react';
import Navbar from '@/components/layout/Navbar';
import { LeapCarousel } from '@/components/ui/LeapCarousel';
import LeapSeperator from '@/components/ui/LeapSeperator';
import SubThemeClassCard from '@/features/subthemeComponents/subThemeClassCard/SubthemeClassCard';
import useGoogleAuthRedirect from '@/hooks/useGoogleAuthRedirect';
import { nameInitials } from '@/lib/helpers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import FadeOverlay from '@/components/ui/FadeOverlay';
import GetSubTheme from '@/services/subthemeService';
import useFetchEvents from '@/hooks/useFetchEvents';
import Loading from '../loading';
import Custom404 from '../not-found';
import { EventEmitter } from 'stream';
import HighlightClientWrapper from '@/features/subthemeComponents/highlightClientWrapper';

export default function Subtheme({ params }: { params: Promise<{ subtheme: string }> }) {
  useGoogleAuthRedirect();
  const { subtheme } = use(params);
  const { asset, name } = GetSubTheme(subtheme);

  const { events, error, loading } = useFetchEvents('Test Subtheme with Image');

  if (loading) return <Loading></Loading>;
  if (error) return <Custom404></Custom404>;

  return (
    <>
      <div className="fixed top-0 z-20">
        <Navbar />
      </div>
      <HighlightClientWrapper
        asset={asset || 'error'}
        name={name || 'error'}
      ></HighlightClientWrapper>
      <div className="absolute -translate-y-10">
        <FadeOverlay></FadeOverlay>
      </div>
      <div
        className={`min-h-screen sm:py-6 sm:px-24 text-white  bg-black/60 bg-blend-multiply bg-contain`}
        style={{ backgroundImage: `url("/SubThemeBG/${asset}")` }}
      >
        <div>
          <div className="py-12 space-y-4">
            <div className="flex items-center w-full">
              <Avatar className="w-24 h-24 text-xs">
                <AvatarImage src={'/subthemeLogos/' + asset} />
                <AvatarFallback>{nameInitials('na')}</AvatarFallback>
              </Avatar>
              <h1 className={`text-[64px] font-bold whitespace-nowrap font-playfair ml-6 mr-24`}>
                {name}
              </h1>
              <div className="flex mt-4">
                <LeapSeperator></LeapSeperator>
              </div>
            </div>

            <div>
              <h2 className={`text-[30px] font-bold sm:ml-0 ml-4 font-playfair`}>Day 1</h2>
            </div>
            <LeapCarousel
              loopItems={false}
              row2={false}
              itemsToShow={events.map((event, index) => {
                return (
                  <>
                    <SubThemeClassCard
                      subtheme={subtheme}
                      id={event.id}
                      registered_slots={event.registered_slots}
                      descripton={event.description}
                      title={event.title}
                    />
                  </>
                );
              })}
            ></LeapCarousel>
            <div>
              <h2 className={`text-[30px] font-bold sm:ml-0 ml- font-playfair`}>Day 2</h2>
            </div>
            <LeapCarousel
              loopItems={false}
              row2={false}
              itemsToShow={events.map((event, index) => {
                return (
                  <>
                    <SubThemeClassCard
                      subtheme={subtheme}
                      id={event.id}
                      registered_slots={event.registered_slots}
                      descripton={event.description}
                      title={event.title}
                    />
                  </>
                );
              })}
            ></LeapCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
