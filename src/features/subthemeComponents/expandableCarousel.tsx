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
  // Add more props as needed, for example:
  itemsToShow: any[];
  loopItems: boolean;
  className?: string;
}

/**
 * NOTE: set overflow-hidden on parent div in order for the carousel to only take up the remaining width
 * @param row2 (boolean) determines if the carousel will have 2 rows
 * @param itemsToShow array of items to be shown in the carousel, can be a div
 * @returns
 */
export function LeapCarousel({ itemsToShow, loopItems, className }: CustomCarouselProps) {
  const [isHovering, setIsHovering] = useState(false);

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
          {itemsToShow.map((_, index) => (
            <CarouselItem
              key={index}
              className="flex-none justify-center items-center lg:w-56 w-40 mx-12"
            >
              <SubThemeClassCard></SubThemeClassCard>
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
    </>
  );
}
