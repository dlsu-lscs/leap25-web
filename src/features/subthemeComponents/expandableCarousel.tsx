'use client';
import dynamic from 'next/dynamic';

const ArrowCircleRightSharpIcon = dynamic(
  () => import('@mui/icons-material/ArrowCircleRightSharp'),
  { ssr: false }
);
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
// import { style } from '@mui/system';
import { Button } from '@/components/ui/button';
import LeapSeperator from '@/components/ui/LeapSeperator';
import { registerEvent } from '@/services/registerService';
import { classModel, subThemeModel } from '@/types/classModels';
import { getSubTheme, getSubThemeLink } from '@/services/subthemeService';
interface ExpandableCarouselProps {
  // Add more props as needed, for example:
  itemsToShow: highlightEvent[];
  className?: string;
  subthemeSlug: any;
  setBgImg: React.Dispatch<React.SetStateAction<string>>;
}

interface highlightEvent {
  highlightEvent: classModel;
  highlightSubtheme?: subThemeModel;
  bg_img: string;
  color: string;
  contentful_id: string;
  event_id: number;
  id: number;
  short_desc: string;
  title_card: string;
  title_fallback: string;
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
  subthemeSlug,
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
    if (currentItem && currentItem.bg_img) {
      setBgImg(currentItem.bg_img);
    } else if (itemsToShow.length > 0 && itemsToShow[0]?.bg_img && selectedId === undefined) {
      // Fallback to the first item's bgImg if selectedId is somehow undefined initially
      // and itemsToShow is not empty. This depends on your logic for initial state.
      // Or ensure selectedId is always valid.
      setBgImg(itemsToShow[0].bg_img);
    }
  }, [selectedId, itemsToShow, setBgImg]);

  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[Autoplay({ delay: 8000 })]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className={`w-full h-full relative duration-1000 ${className ?? ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <CarouselContent className="!h-full !overflow-visible">
          {itemsToShow.map((item, index) => {
            return (
              <CarouselItem
                key={index}
                className={cn(
                  `sm:h-[524px] h-full flex basis-full transition-all ease-in-out duration-700 overflow-visible`,
                  item.id === selectedId
                    ? 'md:basis-2/3 justify-end px-0 sm:pr-8'
                    : 'md:basis-1/3 flex-start '
                )}
              >
                <div
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(118, 1, 129, 1) 0%, rgba(118, 1, 129, 0) 70%), url(${item.bg_img})`,
                  }}
                  className={cn(
                    'bg-[#760181] flex items-center duration-1000 w-full h-full relative bg-cover bg-center sm:rounded-lg border-solid sm:border-2 border-white/70',
                    item.id === selectedId ? 'max-w-[900]' : 'max-w-96'
                  )}
                >
                  {item.id === selectedId ? (
                    <div
                      className={cn(
                        'relative sm:w-[400] w-full sm:ml-12 flex h-[484] sm:items-start justify-between items-center flex-col'
                      )}
                    >
                      <div className="absolute sm:-left-10 left-1/2 sm:translate-0 -translate-x-[49%] sm:-top-22 -top-28 flex items-center justify-center ">
                        <LeapSeperator
                          direction="left"
                          className="sm:hidden"
                          variant="diamond"
                        ></LeapSeperator>
                        <h1
                          className={`sm:text-5xl text-3xl font-bold whitespace-nowrap text-center font-playfair`}
                        >
                          LEAP's choice
                        </h1>
                        <LeapSeperator
                          direction="right"
                          className="pl-4"
                          variant="diamond"
                        ></LeapSeperator>
                      </div>
                      <div className="flex flex-col sm:flex-col-reverse gap-2 items-center sm:mt-8">
                        <div className="flex gap-2 sm:justify-start justify-center items-center w-full sm:flex-row flex-col">
                          <div className="w-24 h-6 bg-yellow-400 rounded-md"></div>
                        </div>
                        {item.title_card.length > 0 ? (
                          <img src={`${item.title_card}`} className="w-64 mt-2" alt="title card" />
                        ) : (
                          <h1 className="text-5xl mt-2">{item.title_fallback}</h1>
                        )}
                      </div>

                      <a
                        href={`/${subthemeSlug}/${item.highlightEvent.slug}`}
                        className="flex flex-col sm:items-start items-center"
                      >
                        <p className="line-clamp-4 sm:line-clamp-none sm:w-full w-42 sm:text-start text-center mb-18 sm:mb-0">
                          {item.short_desc}
                        </p>
                        <Button
                          className="w-32 sm:mt-8 text-base font-bold px-6 py-4 bg-white text-black"
                          variant={'secondary'}
                        >
                          <ArrowCircleRightSharpIcon />
                          Join Now
                        </Button>
                      </a>
                    </div>
                  ) : (
                    <div className="h-full w-full flex flex-col justify-around items-center">
                      {item.title_card.length > 0 ? (
                        <img src={`${item.title_card}`} className="w-64 mt-2" alt="title card" />
                      ) : (
                        <h1 className="text-5xl mt-2">{item.title_fallback}</h1>
                      )}
                      <h3>Short desc</h3>
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
