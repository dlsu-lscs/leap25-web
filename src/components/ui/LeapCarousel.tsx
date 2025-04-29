'use client';
import { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import SubThemeClassCard from '@/features/subthemeComponents/subThemeClassCard/SubthemeClassCard';

interface CustomCarouselProps {
  row2: boolean;
  // Add more props as needed, for example:
  itemsToShow: any[];
  loopItems: boolean;
  className?: string;
}

/**
 * NOTE: set overflow-hidden on parent div in order for the carousel to only take up the remaining width
 * NOTE: the passed in divs will be responsible for the width, height, and the spacing between them
 * @param row2 (boolean) determines if the carousel will have 2 rows
 * @param itemsToShow array of items to be shown in the carousel, can be a div
 * @returns
 */
export function LeapCarousel({ row2, itemsToShow, loopItems, className }: CustomCarouselProps) {
  const [isHovering, setIsHovering] = useState(false);
  let carouselItems = [];
  let carouselItemsRow2 = [];
  if (itemsToShow.length > 6 && row2) {
    const midpoint = Math.ceil(itemsToShow.length / 2);

    carouselItems = itemsToShow.slice(0, midpoint);
    carouselItemsRow2 = itemsToShow.slice(midpoint);
  } else {
    carouselItems = itemsToShow;
  }

  return (
    <>
      <Carousel
        opts={{
          // align: "center",
          loop: loopItems,
        }}
        className={`w-full relative ${className ?? ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="flex-none justify-center items-center pl-0">
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className={`absolute left-0 transition-all duration-300 ${
            isHovering ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />
        <CarouselNext
          className={`absolute right-0 transition-all duration-300 ${
            isHovering ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />
      </Carousel>
      {row2 && itemsToShow.length > 6 && (
        <Carousel
          opts={{
            // align: "center",
            loop: true,
          }}
          className="w-full relative mt-4"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <CarouselContent>
            {carouselItemsRow2.map((item, index) => (
              <CarouselItem key={index} className="flex-none pl-0">
                {item}
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className={`absolute left-0 transition-all duration-300 ${
              isHovering ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
          <CarouselNext
            className={`absolute right-0 transition-all duration-300 ${
              isHovering ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        </Carousel>
      )}
    </>
  );
}
