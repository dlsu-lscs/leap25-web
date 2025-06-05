import ClassCard from '@/features/classCard/ClassCard';
import Navbar from '@/components/layout/Navbar';

import { Public_Sans } from 'next/font/google';
import { getEventByID, getEventBySlug, getEventMedia } from '@/services/eventService';
import { getOrgByID } from '@/services/orgsServce';
import { classModel, classPubModel, subThemeModel } from '@/types/classModels';
import { orgModel } from '@/types/orgModels';
import { getSubThemeByID } from '@/services/subthemeService';
import RecentlyViewed from '@/context/recentlyViewed';
import RecentlyViewedCarousel from '@/features/RecentlyViewed/RecentlyViewedCarousel';

import type { Metadata } from 'next';
import BackgroundMusic from '@/features/backgroundMusic/BackgroundMusic';
import { BASE_URL } from '@/lib/constants';
import { AutoDismissAlert } from '@/components/ui/AutoDismissAlert';

const public_sans = Public_Sans({ subsets: ['latin'] });

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const event: classModel = await getEventBySlug(slug);
  const eventMedia: classPubModel = await getEventMedia(event.id);
  const subtheme: subThemeModel = await getSubThemeByID(event.subtheme_id);

  const fallBackImage = `${BASE_URL}/leapPub.webp`;

  const normalizeImageUrl = (url: string | undefined | null) => {
    if (!url) return fallBackImage;
    if (url.startsWith('http')) return url;
    if (url.startsWith('//')) return `https:${url}`;
    return `${BASE_URL}${url}`;
  };

  const title = event?.title?.replace(/^LEAP 2025:\s*/i, '') ?? '';
  const imageUrl = normalizeImageUrl(eventMedia?.pub_url);

  return {
    title: `${title}`,
    description: event.description,
    openGraph: {
      title: `${title} | ${subtheme.title}`,
      description: event.description,
      images: [imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${subtheme.title}`,
      description: event.description,
      images: [imageUrl],
    },
  };
}

export default async function Class({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event: classModel = await getEventBySlug(slug);
  const eventMedia: classPubModel = await getEventMedia(event.id);
  const orgs: orgModel[] = await getOrgByID(event.org_id);
  const subtheme: subThemeModel = await getSubThemeByID(event.subtheme_id);

  return (
    <div>
      <AutoDismissAlert duration={7000}></AutoDismissAlert>
      <div className="fixed top-0 z-20">
        <RecentlyViewed classID={event.id} maxItems={5} />
        <Navbar name={subtheme.title} src={subtheme.logo_pub_url} variant="class" />
      </div>
      <div
        style={{
          backgroundImage: eventMedia
            ? eventMedia.pub_as_bg
              ? `url(${eventMedia.pub_url})`
              : `url(${subtheme.background_pub_url})`
            : 'url("https://i.imgur.com/Rjo6F4G.png")',
        }}
        className={`overflow-visible relative flex flex-col lg:p-40 p-4 py-24 md:py-44 bg-black/75 bg-blend-multiply bg-cover`}
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
            <RecentlyViewedCarousel></RecentlyViewedCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
