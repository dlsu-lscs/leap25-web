'use client';
import LeapSeperator from '@/components/ui/LeapSeperator';
import ExpandableCarousel from './expandableCarousel';
import { useState } from 'react';
import { AvatarFallback, AvatarImage, Avatar } from '@/components/ui/avatar';
import { nameInitials } from '@/lib/helpers';

const dummyHighlightData = [
  {
    id: 1,
    content:
      "Ever wondered what lies beyond coding? Tech is more than just lines of code—it's a treasure trove of untapped opportunities waiting to be discovered! From UI/UX to digital forensics to embedded systems, your future in tech can be anything you make it! Join us for an insightful discussion with industry professionals and find your niche in the ever-evolving tech landscape!",
    titleCard: '/dummy/lscsDummyTitle.png',
    titleFallback: 'Beyond Code',
    bgImg: '/dummy/lscsDummyBg.png',
  },
  {
    id: 2,
    content:
      "Ever wondered what lies beyond coding? Tech is more than just lines of code—it's a treasure trove of untapped opportunities waiting to be discovered! From UI/UX to digital forensics to embedded systems, your future in tech can be anything you make it! Join us for an insightful discussion with industry professionals and find your niche in the ever-evolving tech landscape!",
    titleCard: '/dummy/lscsDummyTitle.png',
    titleFallback: 'Beyond Code',
    bgImg: '/dummy/lscsDummyBg.png',
  },
  {
    id: 3,
    content:
      "Ever wondered what lies beyond coding? Tech is more than just lines of code—it's a treasure trove of untapped opportunities waiting to be discovered! From UI/UX to digital forensics to embedded systems, your future in tech can be anything you make it! Join us for an insightful discussion with industry professionals and find your niche in the ever-evolving tech landscape!",
    titleCard: '/dummy/lscsDummyTitle.png',
    titleFallback: 'Beyond Code',
    bgImg: '/dummy/lscsDummyBg.png',
  },
  {
    id: 4,
    content:
      "Ever wondered what lies beyond coding? Tech is more than just lines of code—it's a treasure trove of untapped opportunities waiting to be discovered! From UI/UX to digital forensics to embedded systems, your future in tech can be anything you make it! Join us for an insightful discussion with industry professionals and find your niche in the ever-evolving tech landscape!",
    titleCard: '/dummy/lscsDummyTitle.png',
    titleFallback: 'Beyond Code',
    bgImg: '/dummy/lscsDummyBg.png',
  },
];

export default function HighlightClientWrapper({ name, asset }: { name: string; asset: string }) {
  const [bgImg, setBgImg] = useState(dummyHighlightData[0].bgImg);
  return (
    <>
      <div className="relative h-[728px] text-white">
        {/* Main container for positioning context and base styles */}
        {/* Blurred Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${bgImg})`, filter: 'blur(8px)' }}
        />
        {/* Black Overlay with Blend Mode Layer */}
        <div className="absolute inset-0 bg-black/60 bg-blend-multiply" />
        {/* Content Layer - sits on top of the background layers */}
        <div className="relative z-10 sm:px-0 flex flex-col w-full h-full items-center pt-24 sm:pt-20">
          <div className="flex items-center justify-center overflow-hidden sm:justify-start w-full sm:pl-12">
            <LeapSeperator direction="left" className="sm:hidden" variant="diamond"></LeapSeperator>
            <h1
              className={`sm:text-5xl text-3xl font-bold whitespace-nowrap text-center font-playfair lg:ml-[14vw] `}
            >
              LEAP's choice
            </h1>
            <LeapSeperator direction="right" className="pl-4" variant="diamond"></LeapSeperator>
          </div>
          <div className="flex flex-col mt-4 h-full w-full overflow-x-hidden">
            <ExpandableCarousel
              setBgImg={setBgImg}
              itemsToShow={dummyHighlightData}
            ></ExpandableCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
