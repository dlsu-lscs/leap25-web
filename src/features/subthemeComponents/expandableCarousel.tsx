'use client';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
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
import { style } from '@mui/system';
import { Button } from '@/components/ui/Button';
interface ExpandableCarouselProps {
  // Add more props as needed, for example:
  itemsToShow: any[];
  className?: string;
  setBgImg: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * NOTE: set overflow-hidden on parent div in order for the carousel to only take up the remaining width
 * @param itemsToShow array of items to be shown in the carousel, can be a div
 * @returns
 */
export default function ExpandableCarousel({
  itemsToShow,
  className,
  setBgImg,
}: ExpandableCarouselProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(itemsToShow[0]?.id);
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
      api.off('init', updateSelectedItem);
    };
  }, [api, updateSelectedItem]);

  useEffect(() => {
    const currentItem = itemsToShow.find((item) => item.id === selectedId);
    if (currentItem && currentItem.bgImg) {
      setBgImg(currentItem.bgImg);
    } else if (itemsToShow.length > 0 && itemsToShow[0]?.bgImg && selectedId === undefined) {
      // Fallback to the first item's bgImg if selectedId is somehow undefined initially
      // and itemsToShow is not empty. This depends on your logic for initial state.
      // Or ensure selectedId is always valid.
      setBgImg(itemsToShow[0].bgImg);
    }
  }, [selectedId, itemsToShow, setBgImg]);

  return (
    <>
      <Carousel
        setApi={setApi}
        // plugins={[Autoplay({ delay: 10000 })]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className={`w-full h-full relative duration-1000 ${className ?? ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <CarouselContent className="!h-full">
          {itemsToShow.map((item, index) => {
            return (
              <CarouselItem
                key={index}
                className={cn(
                  `sm:h-[524px] h-full flex basis-full transition-all ease-in-out duration-700 `,
                  item.id === selectedId
                    ? 'md:basis-2/3 justify-end px-0 sm:pr-8'
                    : 'md:basis-1/3 flex-start '
                )}
              >
                <div
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(118, 1, 129, 1) 0%, rgba(118, 1, 129, 0) 70%), url(${item.bgImg})`,
                  }}
                  className={cn(
                    'bg-[#760181] flex items-center duration-1000 w-full h-full relative bg-cover bg-center sm:rounded-lg border-white border-solid sm:border-2 ',
                    item.id === selectedId ? 'max-w-[900]' : 'max-w-96'
                  )}
                >
                  {item.id === selectedId && (
                    <div
                      className={cn(
                        'sm:w-[400] w-full sm:ml-12 flex h-[420] sm:items-start justify-between items-center flex-col'
                      )}
                    >
                      {item.titleCard.length > 0 ? (
                        <img src={`${item.titleCard}`} className="w-64" alt="title card" />
                      ) : (
                        <h1 className="text-5xl">{item.titleFallback}</h1>
                      )}
                      <div className="flex flex-col sm:items-start items-center">
                        <div className="flex sm:flex-row flex-col gap-2 my-4">
                          <div className="w-24 h-6 bg-yellow-400 rounded-md"></div>
                          <div className="w-24 h-6 border-solid border-white border-2  rounded-md"></div>
                        </div>
                        <p className="sm:block hidden">{item.content}</p>
                        <Button
                          className="w-32 sm:mt-8 text-base font-bold px-6 py-4 bg-white text-black"
                          variant={'secondary'}
                        >
                          <ArrowCircleRightSharpIcon />
                          Join Now
                        </Button>
                      </div>
                    </div>
                  )}

                  {item.id === selectedId && (
                    <>
                      <HighlightNext className={`absolute sm:top-120 sm:right-8 top-80 right-6 `} />
                      <HighlightPrev className="absolute sm:top-120 sm:left-auto sm:right-24 top-80 left-10" />
                    </>
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </>
  );
}
