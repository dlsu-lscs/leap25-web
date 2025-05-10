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
      <div
        className="h-[728px] text-white bg-black/60 bg-blend-multiply bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex flex-col w-full items-center pt-18">
          <div className="flex items-center overflow-hidden sm:justify-start w-full sm:pl-12">
            <h1
              className={`mr-4 sm:text-5xl text-4xl font-bold whitespace-nowrap font-playfair lg:ml-[14vw] `}
            >
              LEAP's choice
            </h1>
            <LeapSeperator className="ml-4" variant="diamond"></LeapSeperator>
          </div>
          <div className="flex flex-col mt-4 w-full ml-2 px-8 overflow-x-hidden">
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
