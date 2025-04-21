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

export default function SubThemeCarousel() {
  const tempArr = [
    { content: 'Hi', id: 0 },
    { content: 'Hi', id: 1 },
    { content: 'Hi', id: 2 },
    { content: 'Hi', id: 3 },
    { content: 'Hi', id: 4 },
  ];
  const [selectedId, setSelectedId] = useState<number | undefined>(tempArr[0].id);
  const [api, setApi] = useState<CarouselApi>();

  // Update selected item when carousel settles
  const updateSelectedItem = useCallback(() => {
    if (!api) return;

    const currentIndex = api.selectedScrollSnap();
    const newSelectedId = tempArr[currentIndex]?.id;

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
    <>
      <Carousel
        className="w-full"
        opts={{
          align: 'center',
          loop: true,
          duration: 15, // Much faster animation (default is 25)
          dragFree: false, // Snap immediately
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {tempArr.map(({ content, id }, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-2">
              <div className="flex items-center justify-between h-36 relative select-none">
                <LeapSubThemeDivider></LeapSubThemeDivider>

                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={() => handleSelect(id, index)}
                >
                  <Avatar className={id === selectedId ? 'w-24 h-24' : 'w-16 h-16'}>
                    <AvatarImage src="" alt="Avatar" />
                    <AvatarFallback>{content + index}</AvatarFallback>
                  </Avatar>
                </div>

                {selectedId === id && (
                  <h3 className="absolute bottom-0 left-1/2 -translate-x-1/2">{content}</h3>
                )}

                <LeapSubThemeDivider></LeapSubThemeDivider>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
