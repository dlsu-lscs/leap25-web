'use client';

import Navbar from '@/components/layout/Navbar';
import { LeapCarousel } from '@/components/ui/LeapCarousel';
import LeapSeperator from '@/components/ui/LeapSeperator';
import SubThemeClassCard from '@/features/subthemeComponents/subThemeClassCard/SubthemeClassCard';
import useGoogleAuthRedirect from '@/hooks/useGoogleAuthRedirect';
import { nameInitials } from '@/lib/helpers';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Playfair_Display } from 'next/font/google';
import FadeOverlay from '@/components/ui/FadeOverlay';
import GetSubTheme from '@/services/GetSubTheme';
const playfair_display = Playfair_Display({ subsets: ['latin'] });

const dummyData = [
  <SubThemeClassCard />,
  <SubThemeClassCard />,
  <SubThemeClassCard />,
  <SubThemeClassCard />,
  <SubThemeClassCard />,
  <SubThemeClassCard />,
  <SubThemeClassCard />,
];

export default function Subtheme({ params }: { params: { subtheme: string } }) {
  useGoogleAuthRedirect();

  const { subtheme } = params;
  const { asset, name } = GetSubTheme(subtheme);

  return (
    <>
      <div className="fixed top-0 z-20">
        <Navbar />
      </div>
      <div className="min-h-screen py-36 px-24 text-white bg-[url(/encrypt.jpg)] bg-black/60 bg-blend-multiply bg-cover">
        <div className="flex items-center w-full">
          <h1
            className={`text-[64px] font-bold whitespace-nowrap ${playfair_display.className} ml-6 mr-24`}
          >
            LEAP's choice
          </h1>
          <div className="flex mt-4">
            <LeapSeperator variant="diamond"></LeapSeperator>
          </div>
        </div>
      </div>
      <div className="absolute -translate-y-10">
        <FadeOverlay></FadeOverlay>
      </div>
      <div
        className={`min-h-screen sm:py-24 sm:px-24 text-white  bg-black/60 bg-blend-multiply bg-contain`}
        style={{ backgroundImage: `url("/SubThemeBG/${asset}")` }}
      >
        <div>
          <div className="flex items-center w-full">
            <Avatar className="w-24 h-24 text-xs">
              <AvatarImage src={'/subthemeLogos/colored/' + asset} />
              <AvatarFallback>{nameInitials('na')}</AvatarFallback>
            </Avatar>
            <h1
              className={`text-[64px] font-bold whitespace-nowrap ${playfair_display.className} ml-6 mr-24`}
            >
              {name}
            </h1>
            <div className="flex mt-4">
              <LeapSeperator></LeapSeperator>
            </div>
          </div>
          <div className="py-12 space-y-4">
            <div>
              <h2 className={`text-[30px] font-bold sm:ml-0 ml-4 ${playfair_display.className}`}>
                Day 1
              </h2>
            </div>
            <LeapCarousel loopItems={false} row2={false} itemsToShow={dummyData}></LeapCarousel>
            <div>
              <h2 className={`text-[30px] font-bold sm:ml-0 ml- ${playfair_display.className}`}>
                Day 2
              </h2>
            </div>
            <LeapCarousel loopItems={false} row2={false} itemsToShow={dummyData}></LeapCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
