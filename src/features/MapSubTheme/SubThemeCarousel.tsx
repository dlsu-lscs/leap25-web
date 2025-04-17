'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import LeapSubThemeDivider from '@/components/ui/LeapSubThemeDivider';

export default function SubThemeCarousel() {
  return (
    <>
      <div className="py-24 flex justify-center">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/4 flex items-center space-x-3">
                <div className="flex justify-center items-center">
                  <Avatar className="w-28 h-28">
                    <AvatarImage src="" alt="Avatar" />
                    <AvatarFallback>test</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex justify-center px-3 space-x-3">
                  <LeapSubThemeDivider></LeapSubThemeDivider>
                  <LeapSubThemeDivider></LeapSubThemeDivider>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
