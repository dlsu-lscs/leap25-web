'use client';

import { LeapCarousel } from '@/components/ui/LeapCarousel';
import LeapSeperator from '@/components/ui/LeapSeperator';
import SubThemeClassCard from '@/features/subthemeComponents/subThemeClassCard/SubthemeClassCard';
import useGoogleAuthRedirect from '@/hooks/useGoogleAuthRedirect';

import { Playfair_Display } from 'next/font/google';
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

export default function Subtheme() {
  useGoogleAuthRedirect();

  return (
    <>
      <div className="min-h-screen py-12 px-24 bg-gray-400 text-white">
        <div className="flex items-center">
          <h1 className={`text-[64px] font-bold ${playfair_display.className}`}>LEAP's choice</h1>
        </div>
      </div>
      <div className="min-h-screen py-12 px-24 bg-gray-800 text-white">
        <div>
          <h1 className={`text-[64px] font-bold ${playfair_display.className}`}>
            The Pirate’s Cove
          </h1>
          <div className="py-4 space-y-4">
            <div>
              <h2 className={`text-[30px] font-bold ${playfair_display.className}`}>Day 1</h2>
            </div>
            <LeapCarousel loopItems={false} row2={false} itemsToShow={dummyData}></LeapCarousel>
            <div>
              <h2 className={`text-[30px] font-bold ${playfair_display.className}`}>Day 2</h2>
            </div>
            <LeapCarousel loopItems={false} row2={false} itemsToShow={dummyData}></LeapCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
