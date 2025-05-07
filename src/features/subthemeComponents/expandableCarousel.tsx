'use client';
import { useCallback, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  HighlightNext,
  HighlightPrev,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

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
export default function ExpandableCarousel({ itemsToShow, className }: ExpandableCarouselProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(itemsToShow[selectedIndex].id);
  const [api, setApi] = useState<CarouselApi>();

  // Update selected item when carousel settles
  const updateSelectedItem = useCallback(() => {
    if (!api) return;

    const currentIndex = api.selectedScrollSnap();
    const newSelectedId = itemsToShow[currentIndex]?.id;
    setSelectedIndex(currentIndex);
    if (newSelectedId !== undefined && newSelectedId !== selectedId) {
      setSelectedId(newSelectedId);
    }
  }, [api, itemsToShow, selectedId]);

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

  return (
    <>
      <Carousel
        setApi={setApi}
        // plugins={[Autoplay({ delay: 10000 })]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className={`w-full relative ${className ?? ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <CarouselContent>
          {itemsToShow.map((item, index) => (
            <CarouselItem
              key={index}
              className={cn(
                `h-[600px] flex basis-full transition-all ease-in-out duration-350 pl-0`,
                item.id === selectedId
                  ? 'md:basis-2/3 justify-end pr-8'
                  : 'md:basis-1/3 flex-start '
              )}
            >
              <div
                className={cn(
                  'bg-white flex items-center w-full h-full relative',
                  item.id === selectedId ? 'max-w-[900]' : 'max-w-96'
                )}
              >
                {item.id === selectedId && (
                  <div className={cn('w-[400] ml-12 bg-black h-[460]')}></div>
                )}

                {item.id === selectedId && (
                  <>
                    <HighlightNext className={`absolute top-135 right-8 `} />
                    <HighlightPrev className="absolute top-135 right-25" />
                  </>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
