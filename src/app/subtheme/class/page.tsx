'use client';
import { LeapCarousel } from '@/components/ui/LeapCarousel';
import ClassCard from '@/features/classCard/ClassCard';
import ClassNavbar from '@/features/classCard/ClassNavbar';
import { subThemeModel } from '@/types/classModels';

import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({ subsets: ['latin'] });

export default function Class({ title }: subThemeModel) {
  return (
    <>
      <div className="fixed top-0 z-20">
        <ClassNavbar></ClassNavbar>
      </div>
      <div
        className={`flex flex-col p-40 py-44 bg-[url(/encrypt.jpg)]  bg-black/40 bg-blend-multiply bg-cover`}
      >
        <div>
          <ClassCard></ClassCard>
        </div>
        <div
          className={`my-20 space-y-8 text-white ${public_sans.className} font-semibold text-4xl text-shadow-lg`}
        >
          <div className="space-y-5">
            <p>More in {title || 'SubTheme'}</p>
            <LeapCarousel row2={false} itemsToShow={Array.from({ length: 8 })}></LeapCarousel>
          </div>
          <div className="space-y-5">
            <p>If you liked this, you might like...</p>
            <LeapCarousel row2={false} itemsToShow={Array.from({ length: 8 })}></LeapCarousel>
          </div>
          <div className="space-y-5">
            <p>Recently Viewed</p>
            <LeapCarousel row2={false} itemsToShow={Array.from({ length: 8 })}></LeapCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
