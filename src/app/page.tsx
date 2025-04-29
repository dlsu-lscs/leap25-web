'use client';

import ZoomPicker from '@/features/MapSubTheme/MobileMap';
import LeapTag from '@/components/ui/LeapTag';
import SubThemeCarousel from '@/features/MapSubTheme/SubThemeCarousel';
import useGoogleAuthRedirect from '@/hooks/useGoogleAuthRedirect';
import { useState } from 'react';

import pixieLogo from '@/../public/subthemeLogos/colored/Pixie Hollow.png';
import coralLogo from '@/../public/subthemeLogos/colored/Coral Lagoon.png';
import pirateLogo from '@/../public/subthemeLogos/colored/Pirate_s Cove.png';
import secondStarLogo from '@/../public/subthemeLogos/colored/Second Star to the Right.png';
import lostBoysLogo from '@/../public/subthemeLogos/colored/Lost Boys_ Hideout.png';

const tempArr = [
  { content: 'PIXIE HOLLOW', id: 0, bgColor: '#F5A1B4', img: pixieLogo, bgPos: 'bg-[100%_100%]' },
  { content: 'CORAL LAGOON', id: 1, bgColor: '#27659B', img: coralLogo, bgPos: 'bg-[100%_0%]' },
  { content: "PIRATE'S COVE", id: 2, bgColor: '#7B5D9E', img: pirateLogo, bgPos: 'bg-[0%_100%]' },
  {
    content: 'SECOND STAR',
    id: 3,
    bgColor: '#FCAE3E',
    img: secondStarLogo,
    bgPos: 'bg-[50%_50%]',
  },
  {
    content: "LOST BOY'S HIDEOUT",
    id: 4,
    bgColor: '#0E7769',
    img: lostBoysLogo,
    bgPos: 'bg-[0%_0%]',
  },
];

export default function Map() {
  const [selectedId, setSelectedId] = useState<number | undefined>(tempArr[0].id);
  useGoogleAuthRedirect();
  return (
    <>
      <div className="flex justify-between h-full flex-col">
        <div className="flex flex-col items-center py-8">
          <div className="hidden md:inline my-6 space-x-3 text-sm">
            <LeapTag>Tag Badge Here</LeapTag>
            <LeapTag>Tag Badge Here</LeapTag>
            <LeapTag>Tag Badge Here</LeapTag>
          </div>
          <div className="md:hidden inline my-3 space-x-3 text-xs">
            <LeapTag>Tag Badge Here</LeapTag>
          </div>
          <div>
            <h1 className="md:text-5xl text-4xl mx-5 font-bold text-center">
              Leap into the Adventure
            </h1>
          </div>
        </div>
        <>
          <ZoomPicker bgPos={tempArr.find((i) => i.id === selectedId)?.bgPos || ''}></ZoomPicker>
        </>
        <div className="flex justify-center md:hidden overflow-x-hidden">
          <SubThemeCarousel
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            items={tempArr}
          ></SubThemeCarousel>
        </div>
      </div>
    </>
  );
}
