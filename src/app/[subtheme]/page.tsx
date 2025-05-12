import Navbar from '@/components/layout/Navbar';
import { LeapCarousel } from '@/components/ui/LeapCarousel';
import LeapSeperator from '@/components/ui/LeapSeperator';
import SubThemeClassCard from '@/features/subthemeComponents/subThemeClassCard/SubthemeClassCard';
import { nameInitials } from '@/lib/helpers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import FadeOverlay from '@/components/ui/FadeOverlay';
import { getSubTheme, getSubThemeByName } from '@/services/subthemeService';
import { getEventMedia, getEvents } from '@/services/eventService';
import HighlightClientWrapper from '@/features/subthemeComponents/highlightClientWrapper';
import { classModel, classPubModel, subThemeModel } from '@/types/classModels';
import AuthRedirectProvider from '@/context/authRedirectProvider';

export default async function Subtheme({ params }: { params: Promise<{ subtheme: string }> }) {
  const { subtheme } = await params;
  const { asset, name } = getSubTheme(subtheme);
  const events: classModel[] = await getEvents('Test Subtheme with Image');
  const subthemeDetails: subThemeModel = await getSubThemeByName(name);

  return (
    <div className="overflow-hidden">
      <AuthRedirectProvider>
        <div className="fixed top-0 z-20">
          <Navbar />
        </div>
        <HighlightClientWrapper
          asset={asset || 'error'}
          name={name || 'error'}
        ></HighlightClientWrapper>
        <div className="absolute -translate-y-10 ">
          <FadeOverlay></FadeOverlay>
        </div>
        <div
          className={`min-h-screen sm:py-6 sm:px-24 text-white  bg-black/60 bg-blend-multiply bg-cover bg-center`}
          style={{ backgroundImage: `url("${subthemeDetails.background_pub_url}")` }}
        >
          <div>
            <div className="py-12 sm:px-0 px-4 space-y-4">
              <div className="flex gap-4 sm:gap-8 items-center justify-start flex-row center w-full">
                <Avatar className="sm:w-24 sm:h-24 w-20 h-20 text-xs">
                  <AvatarImage src={subthemeDetails.logo_pub_url} />
                  <AvatarFallback>{nameInitials('na')}</AvatarFallback>
                </Avatar>
                <div className="flex gap-4 justify-center">
                  <h1
                    className={`text-3xl md:text-6xl font-bold sm:text-nowrap text-wrap font-playfair `}
                  >
                    {subthemeDetails.title}
                  </h1>
                  <LeapSeperator direction="right"></LeapSeperator>
                </div>
              </div>

              <div>
                <h2 className={`text-[30px] font-bold sm:ml-0 ml-4 font-playfair`}>Day 1</h2>
              </div>
              <LeapCarousel
                loopItems={false}
                row2={false}
                itemsToShow={events.map(async (event: classModel, index: number) => {
                  const eventMedia: classPubModel = (await getEventMedia(event.id)) || undefined;
                  if (eventMedia != undefined) {
                    return (
                      <div key={index}>
                        <SubThemeClassCard
                          key={index}
                          subtheme={subtheme}
                          id={event.id}
                          registered_slots={event.registered_slots}
                          max_slots={event.max_slots}
                          descripton={event.description}
                          title={event.title}
                          eventMedia={eventMedia}
                        />
                      </div>
                    );
                  }
                })}
              ></LeapCarousel>
              <div>
                <h2 className={`text-[30px] font-bold sm:ml-0 ml-4 font-playfair`}>Day 2</h2>
              </div>
              <LeapCarousel
                loopItems={false}
                row2={false}
                itemsToShow={events.map(async (event: classModel, index: number) => {
                  const eventMedia: classPubModel = (await getEventMedia(event.id)) || undefined;
                  if (eventMedia != undefined) {
                    return (
                      <div key={index}>
                        <SubThemeClassCard
                          key={index}
                          subtheme={subtheme}
                          id={event.id}
                          registered_slots={event.registered_slots}
                          max_slots={event.max_slots}
                          descripton={event.description}
                          title={event.title}
                          eventMedia={eventMedia}
                        />
                      </div>
                    );
                  }
                })}
              ></LeapCarousel>
            </div>
          </div>
        </div>
      </AuthRedirectProvider>
    </div>
  );
}
