"use client";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CustomCarouselProps {
  row: number;
  // Add more props as needed, for example:
  itemsToShow: any[];
  autoplay?: boolean;
}

/**
 *
 * @param row
 * @param itemsToShow array of items, can be a div
 * @returns
 */
export function CustomCarousel({
  row,
  itemsToShow,
  autoplay,
}: CustomCarouselProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Carousel
      opts={{
        // align: "center",
        loop: true,
      }}
      className="w-full relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CarouselContent>
        {itemsToShow.map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/4 lg:basis-1/8"
          >
            <div className="p-1">
              <div className="bg-gray-400 rounded-sm aspect-[75/100] flex justify-center items-center">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        className={`absolute left-0 transition-all duration-300 ${
          isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <CarouselNext
        className={`absolute right-0 transition-all duration-300 ${
          isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </Carousel>
  );
}
