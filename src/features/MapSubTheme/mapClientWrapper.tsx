import { SetStateAction, useState } from 'react';
import SubThemeCarousel from './SubThemeCarousel';
import { cn } from '@/lib/utils';
import LeapSubThemeDivider from '@/components/ui/LeapSubThemeDivider';
import { useRouter } from 'next/navigation';

const tempArr = [
  {
    content: 'CORAL LAGOON',
    id: 0,
    img: '/subthemeLogos/CoralLagoon.png',
    bgPos: 'bg-[0%_100%]',
    route: '/coral-lagoon',
  },
  {
    content: 'NORTHERN STAR STOP',
    id: 1,
    img: '/subthemeLogos/NorthernStarStop.png',
    bgPos: 'bg-[10%_0%]',
    route: '/northern-star-stop',
  },
  {
    content: "PIRATE'S COVE",
    id: 2,
    img: '/subthemeLogos/PiratesCove.png',
    bgPos: 'bg-[50%_50%]',
    route: '/pirates-cove',
  },
  {
    content: 'HOLLOWTREE HIDEWAY',
    id: 3,
    img: '/subthemeLogos/HollowTreeHideaway.png',
    bgPos: 'bg-[77%_100%]',
    route: '/hollow-tree-hideaway',
  },
  {
    content: 'FAIRY NOOK',
    id: 4,
    img: 'subthemeLogos/FairyNook.png',
    bgPos: 'bg-[98%_0%]',
    route: '/fairy-nook',
  },
];

export default function MobileMapClientWrapper() {
  const [selectedId, setSelectedId] = useState<number | undefined>(tempArr[0].id);
  const router = useRouter();
  return (
    <div
      className={cn(
        ' flex items-end w-full flex-col h-full bg-no-repeat bg-[length:450%_auto] transition-all duration-500 ease-in-out',
        tempArr[selectedId ?? 0].bgPos
      )}
      style={{ backgroundImage: `url(/map/mapWithLandmark.png)` }}
    >
      <div
        className="w-full h-full"
        onClick={() => router.push(tempArr[selectedId ?? 0].route)}
      ></div>
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
