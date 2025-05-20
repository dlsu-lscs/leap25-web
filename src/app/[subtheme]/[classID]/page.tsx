import { LeapCarousel } from '@/components/ui/LeapCarousel';
import ClassCard from '@/features/classCard/ClassCard';
import Navbar from '@/components/layout/Navbar';
import SubThemeClassCard from '@/features/subthemeComponents/subThemeClassCard/SubthemeClassCard';

import { Public_Sans } from 'next/font/google';
import { getEventByID, getEventMedia, getEvents } from '@/services/eventService';
import { getOrgByID } from '@/services/orgsServce';
import { classModel, classPubModel, subThemeModel } from '@/types/classModels';
import { orgModel } from '@/types/orgModels';
import { getSubThemeByID } from '@/services/subthemeService';
import RecentlyViewed from '@/context/recentlyViewed';
import RecentlyViewedCarousel from '@/features/RecentlyViewed/RecentlyViewedCarousel';

const public_sans = Public_Sans({ subsets: ['latin'] });

export default async function Class({ params }: { params: Promise<{ classID: number }> }) {
  const { classID } = await params;
  const event: classModel = await getEventByID(classID);
  const eventMedia: classPubModel = await getEventMedia(classID);
  const orgs: orgModel = await getOrgByID(event.org_id);
  const subtheme: subThemeModel = await getSubThemeByID(event.subtheme_id);
  const events: classModel[] = await getEvents(subtheme.title);

  return (
    <>
      <div className="fixed top-0 z-20">
        <RecentlyViewed classID={classID} />
        <Navbar name={subtheme.title} src={subtheme.logo_pub_url} />
      </div>
      <div
        style={{ backgroundImage: `url(${eventMedia.pub_url})` }}
        className={`overflow-hidden flex flex-col lg:p-40 p-4 py-24 md:py-44 bg-black/50 bg-blend-multiply bg-cover`}
      >
        <div>
          {' '}
          <ClassCard
            event={event}
            orgs={orgs}
            subtheme={subtheme}
            eventMedia={eventMedia}
          ></ClassCard>
        </div>
        <div
          className={`my-20 space-y-8 text-white ${public_sans.className} font-semibold md:text-4xl sm:text-3xl text-2xl text-shadow-lg`}
        >
          <div>
            {' '}
            <ClassCard
              event={event}
              orgs={orgs}
              subtheme={subtheme}
              eventMedia={eventMedia}
            ></ClassCard>
          </div>
          <div
            className={`my-20 space-y-8 text-white ${public_sans.className} font-semibold md:text-4xl sm:text-3xl text-2xl text-shadow-lg`}
          >
            <div className="space-y-5">
              <p>Recently Viewed</p>
              <RecentlyViewedCarousel subtheme={subtheme}></RecentlyViewedCarousel>
            </div>
        </div>
      </div>
    </>
  );
}
