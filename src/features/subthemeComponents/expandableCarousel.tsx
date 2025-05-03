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

interface ExpandableCarouselProps {
  // Add more props as needed, for example:
  itemsToShow: any[];
  className?: string;
}

/**
 * NOTE: set overflow-hidden on parent div in order for the carousel to only take up the remaining width
 * @param itemsToShow array of items to be shown in the carousel, can be a div
 * @returns
 */
export function ExpandableCarousel({ itemsToShow, className }: ExpandableCarouselProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className={`w-full relative ${className ?? ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <CarouselContent>
          {itemsToShow.map((_, index) => (
            <CarouselItem key={index} className="h-[600px] basis-full md:basis-1/2">
              <div className="bg-black w-full h-full"></div>
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
