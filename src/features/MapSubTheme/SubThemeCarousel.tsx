'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import LeapSubThemeDivider from '@/components/ui/LeapSubThemeDivider';
import { useCallback, useEffect, useState } from 'react';
import pixieLogo from '@/../public/subthemeLogos/colored/Pixie Hollow.png';
import coralLogo from '@/../public/subthemeLogos/colored/Coral Lagoon.png';
import pirateLogo from '@/../public/subthemeLogos/colored/Pirate_s Cove.png';
import secondStarLogo from '@/../public/subthemeLogos/colored/Second Star to the Right.png';
import lostBoysLogo from '@/../public/subthemeLogos/colored/Lost Boys_ Hideout.png';

export default function SubThemeCarousel() {
  const tempArr = [
    { content: 'PIXIE HOLLOW', id: 0, bgColor: '#F5A1B4', img: pixieLogo },
    { content: 'CORAL LAGOON', id: 1, bgColor: '#27659B', img: coralLogo },
    { content: "PIRATE'S COVE", id: 2, bgColor: '#7B5D9E', img: pirateLogo },
    { content: 'SECOND STAR', id: 3, bgColor: '#FCAE3E', img: secondStarLogo },
    { content: "LOST BOY'S HIDEOUT", id: 4, bgColor: '#0E7769', img: lostBoysLogo },
  ];
  const [selectedId, setSelectedId] = useState<number | undefined>(tempArr[0].id);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [currBgColor, setCurrBgColor] = useState<string>(tempArr[0].bgColor);

  // Update selected item when carousel settles
  const updateSelectedItem = useCallback(() => {
    if (!api) return;

    const currentIndex = api.selectedScrollSnap();
    const newSelectedId = tempArr[currentIndex]?.id;
    setSelectedIndex(currentIndex);
    setCurrBgColor(tempArr[currentIndex].bgColor);

    if (newSelectedId !== undefined && newSelectedId !== selectedId) {
      setSelectedId(newSelectedId);
    }
  }, [api, tempArr, selectedId]);

  // Set up event listeners for the carousel
  useEffect(() => {
    if (!api) return;

    // Update selection when scrolling settles
    api.on('settle', updateSelectedItem);

    // Also update during scrolling for more responsive feel
    api.on('select', updateSelectedItem);

    // Initial selection
    api.on('init', updateSelectedItem);

    return () => {
      api.off('settle', updateSelectedItem);
      api.off('init', updateSelectedItem);
    };
  }, [api, updateSelectedItem]);

  // Immediately update selection when clicking
  const handleSelect = (id: number, index: number) => {
    // Update selection state immediately for responsiveness
    setSelectedId(id);

    // Then scroll to the item
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="relative h-72 w-full">
      <div
        className='transition-colors duration-200 ease-in-out opacity-40 w-full h-full absolute [mask-image:linear-gradient(to_top,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_80%,transparent_100%)]"'
        style={{ backgroundColor: currBgColor }}
      ></div>
      <Carousel
        className="w-full mt-16"
        opts={{
          align: 'center',
          loop: true,
          duration: 15, // Much faster animation (default is 25)
          dragFree: false, // Snap immediately
        }}
        setApi={setApi}
        // style={{ backgroundColor: currBgColor }}
      >
        <CarouselContent
          className=""
          // style={{ backgroundColor: currBgColor }}
        >
          {tempArr.map(({ content, id, bgColor, img }, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 pl-2"
              // style={{ backgroundColor: currBgColor }}
            >
              <div className="flex items-center justify-between h-48 select-none backdrop-blur-md">
                <LeapSubThemeDivider></LeapSubThemeDivider>

                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={() => handleSelect(id, index)}
                >
                  <Avatar
                    className={`${id === selectedId ? '' : 'opacity-40'} transition-[width,height] duration-200 ease-in-out ${id === selectedId ? 'w-24 h-24' : 'w-16 h-16'}`}
                  >
                    <AvatarImage src={img?.src ?? undefined} alt="Avatar" />
                    <AvatarFallback className="text-3xl">😀</AvatarFallback>
                  </Avatar>
                </div>

                {selectedId === id && (
                  <h3 className="font-semibold text-lg text-white absolute bottom-3 left-1/2 -translate-x-1/2 text-nowrap">
                    {content}
                  </h3>
                )}

                <LeapSubThemeDivider></LeapSubThemeDivider>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
