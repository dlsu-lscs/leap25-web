import { GetStaticPaths, GetStaticProps } from 'next';
import Navbar from '@/components/layout/Navbar';
import { LeapCarousel } from '@/components/ui/LeapCarousel';
import LeapSeperator from '@/components/ui/LeapSeperator';
import ExpandableCarousel from '@/features/subthemeComponents/expandableCarousel';
import SubThemeClassCard from '@/features/subthemeComponents/subThemeClassCard/SubthemeClassCard';
import useGoogleAuthRedirect from '@/hooks/useGoogleAuthRedirect';
import { nameInitials } from '@/lib/helpers';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Playfair_Display } from 'next/font/google';
import FadeOverlay from '@/components/ui/FadeOverlay';
import { getSubTheme } from '@/services/subthemeService';
import { getEventByID, getEvents } from '@/services/eventService';
import { classModel } from '@/types/classModels';
const playfair_display = Playfair_Display({ subsets: ['latin'] });

const dummyHighlightData = [
  {
    id: 1,
    content:
      "Ever wondered what lies beyond coding? Tech is more than just lines of code—it's a treasure trove of untapped opportunities waiting to be discovered! From UI/UX to digital forensics to embedded systems, your future in tech can be anything you make it! Join us for an insightful discussion with industry professionals and find your niche in the ever-evolving tech landscape!",
    titleCard: '/dummy/lscsDummyTitle.png',
    titleFallback: 'Beyond Code',
    bgImg: '/dummy/lscsDummyBg.png',
  },
  {
    id: 2,
    content:
      "Ever wondered what lies beyond coding? Tech is more than just lines of code—it's a treasure trove of untapped opportunities waiting to be discovered! From UI/UX to digital forensics to embedded systems, your future in tech can be anything you make it! Join us for an insightful discussion with industry professionals and find your niche in the ever-evolving tech landscape!",
    titleCard: '/dummy/lscsDummyTitle.png',
    titleFallback: 'Beyond Code',
    bgImg: '/dummy/lscsDummyBg.png',
  },
  {
    id: 3,
    content:
      "Ever wondered what lies beyond coding? Tech is more than just lines of code—it's a treasure trove of untapped opportunities waiting to be discovered! From UI/UX to digital forensics to embedded systems, your future in tech can be anything you make it! Join us for an insightful discussion with industry professionals and find your niche in the ever-evolving tech landscape!",
    titleCard: '/dummy/lscsDummyTitle.png',
    titleFallback: 'Beyond Code',
    bgImg: '/dummy/lscsDummyBg.png',
  },
  {
    id: 4,
    content:
      "Ever wondered what lies beyond coding? Tech is more than just lines of code—it's a treasure trove of untapped opportunities waiting to be discovered! From UI/UX to digital forensics to embedded systems, your future in tech can be anything you make it! Join us for an insightful discussion with industry professionals and find your niche in the ever-evolving tech landscape!",
    titleCard: '/dummy/lscsDummyTitle.png',
    titleFallback: 'Beyond Code',
    bgImg: '/dummy/lscsDummyBg.png',
  },
];

export default async function Subtheme({ params }: { params: Promise<{ subtheme: string }> }) {
  // useGoogleAuthRedirect();
  // const [bgImg, setBgImg] = useState('');
  const { subtheme } = await params;
  const { asset, name } = getSubTheme(subtheme);
  const events = await getEvents(subtheme);
  const event = await getEventByID(1);
  console.log(event);

  return (
    <>
      <div className="fixed top-0 z-20">
        <Navbar />
      </div>
      <div
        className="min-h-screen text-white bg-black/60 bg-blend-multiply bg-cover"
        style={{ backgroundImage: `url()` }}
      >
        <div className="flex flex-col items-center w-full">
          <h1
            className={`mt-20 text-5xl font-bold whitespace-nowrap ${playfair_display.className} ml-6 mr-24`}
          >
            LEAP's choice
          </h1>
          <div className="flex flex-col mt-4 w-full px-12 overflow-x-hidden">
            <LeapSeperator variant="diamond"></LeapSeperator>
            {/*
            <ExpandableCarousel
              setBgImg={setgBgImg}
              itemsToShow={dummyHighlightData}
            ></ExpandableCarousel>
            */}
          </div>
        </div>
      </div>
      <div className="absolute -translate-y-10">
        <FadeOverlay></FadeOverlay>
      </div>
      <div
        className={`min-h-screen sm:py-24 sm:px-24 text-white  bg-black/60 bg-blend-multiply bg-contain`}
        style={{ backgroundImage: `url("/SubThemeBG/${asset}")` }}
      >
        <div>
          <div className="flex items-center w-full">
            <Avatar className="w-24 h-24 text-xs">
              <AvatarImage src={'/subthemeLogos/' + asset} />
              <AvatarFallback>{nameInitials('na')}</AvatarFallback>
            </Avatar>
            <h1
              className={`text-[64px] font-bold whitespace-nowrap ${playfair_display.className} ml-6 mr-24`}
            >
              {name}
            </h1>
            <div className="flex mt-4">
              <LeapSeperator></LeapSeperator>
            </div>
          </div>
          <div className="py-12 space-y-4">
            <div>
              <h2 className={`text-[30px] font-bold sm:ml-0 ml-4 ${playfair_display.className}`}>
                Day 1
              </h2>
            </div>
            <LeapCarousel
              loopItems={false}
              row2={false}
              itemsToShow={events.map((event: classModel, index: number) => {
                return (
                  <>
                    <SubThemeClassCard
                      key={index}
                      subtheme={subtheme}
                      id={event.id}
                      registered_slots={event.registered_slots}
                      descripton={event.description}
                      title={event.title}
                    />
                  </>
                );
              })}
            ></LeapCarousel>
            <div>
              <h2 className={`text-[30px] font-bold sm:ml-0 ml- ${playfair_display.className}`}>
                Day 2
              </h2>
            </div>
            <LeapCarousel
              loopItems={false}
              row2={false}
              itemsToShow={events.map((event: classModel, index: number) => {
                return (
                  <>
                    <SubThemeClassCard
                      key={index}
                      subtheme={subtheme}
                      id={event.id}
                      registered_slots={event.registered_slots}
                      descripton={event.description}
                      title={event.title}
                    />
                  </>
                );
              })}
            ></LeapCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
