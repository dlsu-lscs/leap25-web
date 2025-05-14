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
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

// Define the type for the items in the carousel
interface CarouselItemData {
  content: string;
  id: number;
  img: string; // Or a more specific type if available
  bgPos: string;
  route: string;
}

// Define the props for the component
interface SubThemeCarouselProps {
  items: CarouselItemData[];
  selectedId: number | undefined;
  setSelectedId: Dispatch<SetStateAction<number | undefined>>;
}

export default function SubThemeCarousel({
  items,
  selectedId,
  setSelectedId,
}: SubThemeCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const router = useRouter();

  // Update selected item when carousel settles
  const updateSelectedItem = useCallback(() => {
    if (!api) return;

    const currentIndex = api.selectedScrollSnap();
    const newSelectedId = items[currentIndex]?.id;
    setSelectedIndex(currentIndex);

    if (newSelectedId !== undefined && newSelectedId !== selectedId) {
      setSelectedId(newSelectedId);
    }
  }, [api, items, selectedId]);

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
    // Update selection state immediately for responsivenes
    if (id === selectedId) {
      router.push(items[selectedId].route);
    }

    setSelectedId(id);

    // Then scroll to the item
    if (api) {
      api.scrollTo(id);
      console.log(id);
    }
  };

  return (
    <div className="relative h-80 w-full">
      <div className=' transition-colors duration-200 ease-in-out opacity-40 w-full h-full absolute [mask-image:linear-gradient(to_top,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_80%,transparent_100%)]"'></div>
      <Carousel
        className="w-full !inline-block"
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
          {items.map(({ content, id, bgPos, img }, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 relative"
              // style={{ backgroundColor: currBgColor }}
            >
              <div className="flex items-center justify-center h-48 select-none ">
                {selectedId === id && (
                  <>
                    <LeapSubThemeDivider
                      className={cn('w-2 h-2 absolute -left-3')}
                    ></LeapSubThemeDivider>
                    <LeapSubThemeDivider
                      className={cn('w-2 h-2 absolute left-1')}
                    ></LeapSubThemeDivider>
                  </>
                )}

                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={() => handleSelect(id, index)}
                >
                  <Avatar
                    className={`${id === selectedId ? '' : 'opacity-40'} transition-[width,height] duration-200 ease-in-out ${id === selectedId ? 'w-24 h-24' : 'w-16 h-16'}`}
                  >
                    <AvatarImage src={img} alt="Avatar" />
                    <AvatarFallback className="text-3xl">😀</AvatarFallback>
                  </Avatar>
                </div>
                {selectedId === id && (
                  <>
                    <LeapSubThemeDivider
                      className={cn('w-2 h-2 absolute -right-7')}
                    ></LeapSubThemeDivider>
                    <LeapSubThemeDivider
                      className={cn('w-2 h-2 absolute -right-3')}
                    ></LeapSubThemeDivider>
                  </>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
