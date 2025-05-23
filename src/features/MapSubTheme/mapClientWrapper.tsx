'use client';
import { useState } from 'react';
import SubThemeCarousel from './SubThemeCarousel';
import { cn } from '@/lib/utils';
import LeapSubThemeDivider from '@/components/ui/LeapSubThemeDivider';
import { useRouter } from 'next/navigation';
import sleep from '@/lib/sleep';

const tempArr = [
  {
    content: 'Wellness & Reflection',
    id: 0,
    img: '/subthemeLogos/CoralLagoon.png',
    bgPos: 'bg-[3%_100%]',
    route: '/coral-lagoon',
  },
  {
    content: 'Future Planning',
    id: 1,
    img: '/subthemeLogos/NorthernStarStop.png',
    bgPos: 'bg-[10%_0%]',
    route: '/northern-star-stop',
  },
  {
    content: 'Strategic & Practical Skills',
    id: 2,
    img: '/subthemeLogos/PiratesCove.png',
    bgPos: 'bg-[48%_50%]',
    route: '/pirates-cove',
  },
  {
    content: 'Teamwork & Adventure',
    id: 3,
    img: '/subthemeLogos/HollowTreeHideaway.png',
    bgPos: 'bg-[75%_100%]',
    route: '/hollow-tree-hideaway',
  },
  {
    content: 'Creativity & Expression',
    id: 4,
    img: 'subthemeLogos/FairyNook.png',
    bgPos: 'bg-[95%_0%]',
    route: '/fairy-nook',
  },
];

export default function MobileMapClientWrapper() {
  const [selectedId, setSelectedId] = useState<number | undefined>(tempArr[0].id);
  const router = useRouter();

  async function handleSelect() {
    const leftCloud = document.querySelector('.left-cloud');
    const rightCloud = document.querySelector('.right-cloud');
    console.log(leftCloud);
    console.log(rightCloud);

    leftCloud?.classList.add('left-cloud-inout');
    rightCloud?.classList.add('right-cloud-inout');
    await sleep(800);
    router.push(tempArr[selectedId ?? 0].route);
    await sleep(1600);
    leftCloud?.classList.remove('left-cloud-inout');
    rightCloud?.classList.remove('right-cloud-inout');
  }

  return (
    <div
      className={cn(
        ' flex items-end w-full flex-col h-full bg-no-repeat bg-[length:450%_auto] transition-all duration-500 ease-in-out',
        tempArr[selectedId ?? 0].bgPos
      )}
      style={{ backgroundImage: `url(/map/mapWithLandmark.webp)` }}
    >
      <div className="absolute  top-5 left-1/2  -translate-x-1/2 w-36 h-16 ">
        <img
          src={tempArr[selectedId || 0].img ?? ''}
          alt="subtheme logo"
          className="w-12 h-12 absolute z-10 top-1/2 -translate-y-1/2"
        />
        <div className="bg-black/50 w-32 pl-9 font-bold flex items-center h-10 absolute right-0 top-1/2 -translate-y-1/2 text-[#E2C45D] text-xs font-playfair">
          {tempArr[selectedId ?? 0].content}
        </div>
      </div>
      <div className="w-full h-full" onClick={handleSelect}></div>
      <SubThemeCarousel
        items={tempArr}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      ></SubThemeCarousel>
      <h3 className="font-semibold text-lg text-white absolute bottom-12 font-playfair left-1/2 -translate-x-1/2 text-nowrap">
        {tempArr[selectedId ?? 0].content}
      </h3>
    </div>
  );
}
