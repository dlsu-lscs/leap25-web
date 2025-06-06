'use client';
import { useState, useEffect } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
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
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [api2, setApi2] = useState<CarouselApi>();
  const [canScrollPrev2, setCanScrollPrev2] = useState(false);
  const [canScrollNext2, setCanScrollNext2] = useState(false);

  // Update scroll state for first carousel
  useEffect(() => {
    if (!api) return;

    const updateScrollState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    api.on('scroll', updateScrollState);
    api.on('init', updateScrollState);
    updateScrollState();

    return () => {
      api.off('scroll', updateScrollState);
      api.off('init', updateScrollState);
    };
  }, [api]);

  // Update scroll state for second carousel
  useEffect(() => {
    if (!api2) return;

    const updateScrollState = () => {
      setCanScrollPrev2(api2.canScrollPrev());
      setCanScrollNext2(api2.canScrollNext());
    };

    api2.on('scroll', updateScrollState);
    api2.on('init', updateScrollState);
    updateScrollState();

    return () => {
      api2.off('scroll', updateScrollState);
      api2.off('init', updateScrollState);
    };
  }, [api2]);
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
      {' '}
      <Carousel
        setApi={setApi}
        opts={{
          // align: "center",
          loop: loopItems,
          dragFree: true,
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
        </CarouselContent>{' '}
        <CarouselPrevious
          className={`absolute -left-12 transition-all duration-300 w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center shadow ${isHovering && canScrollPrev ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 8l-8 8 8 8" />
          </svg>
        </CarouselPrevious>{' '}
        <CarouselNext
          className={`absolute -right-12 transition-all duration-300 w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center shadow ${isHovering && canScrollNext ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8l8 8-8 8" />
          </svg>
        </CarouselNext>
      </Carousel>
      {row2 && itemsToShow.length > 6 && (
        <Carousel
          setApi={setApi2}
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
            className={`absolute -left-14 transition-all duration-300 w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center shadow ${isHovering && canScrollPrev2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-gray-200"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 8l-8 8 8 8" />
            </svg>
          </CarouselPrevious>{' '}
          <CarouselNext
            className={`absolute -right-14 transition-all duration-300 w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center shadow ${isHovering && canScrollNext2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-gray-200"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8l8 8-8 8" />
            </svg>
          </CarouselNext>
        </Carousel>
      )}
    </>
  );
}
