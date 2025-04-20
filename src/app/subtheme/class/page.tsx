'use client';
import { LeapCarousel } from '@/components/ui/LeapCarousel';
import ClassCard from '@/features/classCard/ClassCard';
import { subThemeModel } from '@/types/classModels';

export default function Class({ title }: subThemeModel) {
  return (
    <>
      <div className={`flex flex-col mx-40 my-28`}>
        <div>
          <ClassCard></ClassCard>
        </div>
        <div className="my-20 space-y-8">
          <div className="space-y-5">
            <p className="font-medium text-3xl">More in {title || 'SubTheme'}</p>
            <LeapCarousel row2={false} itemsToShow={Array.from({ length: 8 })}></LeapCarousel>
          </div>
          <div className="space-y-5">
            <p className="font-medium text-3xl">If you liked this, you might like...</p>
            <LeapCarousel row2={false} itemsToShow={Array.from({ length: 8 })}></LeapCarousel>
          </div>
          <div className="space-y-5">
            <p className="font-medium text-3xl">Recently Viewed</p>
            <LeapCarousel row2={false} itemsToShow={Array.from({ length: 8 })}></LeapCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
