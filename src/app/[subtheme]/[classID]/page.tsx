import { LeapCarousel } from '@/components/ui/LeapCarousel';
import ClassCard from '@/features/classCard/ClassCard';
import Navbar from '@/components/layout/Navbar';
import SubThemeClassCard from '@/features/subthemeComponents/subThemeClassCard/SubthemeClassCard';

import { Public_Sans } from 'next/font/google';
import { getEventByID, getEventMedia } from '@/services/eventService';
import { getOrgByID, getOrgs } from '@/services/orgsServce';
import { classModel, subThemeModel } from '@/types/classModels';
import { orgModel } from '@/types/orgModels';
import { getSubTheme, getSubThemeByID } from '@/services/subthemeService';

const public_sans = Public_Sans({ subsets: ['latin'] });

export default async function Class({ params }: { params: Promise<{ classID: number }> }) {
  const dummyData = [
    <SubThemeClassCard />,
    <SubThemeClassCard />,
    <SubThemeClassCard />,
    <SubThemeClassCard />,
    <SubThemeClassCard />,
    <SubThemeClassCard />,
    <SubThemeClassCard />,
  ];

  const { classID } = await params;
  const event: classModel = await getEventByID(classID);
  // const eventMedia = await getEventMedia(classID);
  const orgs: orgModel = await getOrgByID(event.org_id);
  const subtheme: subThemeModel = await getSubThemeByID(event.subtheme_id);

  return (
    <>
      <div className="fixed top-0 z-20">
        <Navbar />
      </div>
      <div
        className={`flex flex-col p-40 py-44 bg-[url(/encrypt.jpg)] bg-black/50 bg-blend-multiply bg-cover`}
      >
        <div>
          {' '}
          <ClassCard event={event} orgs={orgs} subtheme={subtheme}></ClassCard>
        </div>
        <div
          className={`my-20 space-y-8 text-white ${public_sans.className} font-semibold text-4xl text-shadow-lg`}
        >
          <div className="space-y-5">
            <p>More in {'SubTheme'}</p>
            <LeapCarousel loopItems={false} row2={false} itemsToShow={dummyData}></LeapCarousel>
          </div>
          <div className="space-y-5">
            <p>If you liked this, you might like...</p>
            <LeapCarousel loopItems={false} row2={false} itemsToShow={dummyData}></LeapCarousel>
          </div>
          <div className="space-y-5">
            <p>Recently Viewed</p>
            <LeapCarousel loopItems={false} row2={false} itemsToShow={dummyData}></LeapCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
