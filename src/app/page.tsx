'use client';

import LeapTag from '@/components/ui/LeapTag';
import SubThemeCarousel from '@/features/MapSubTheme/SubThemeCarousel';

export default function Map() {
  return (
    <>
      <div className="absolute left-1/2 z-20 -translate-x-1/2 flex justify-center">
        <div
          className="
        flex flex-col items-center py-8
        "
        >
          <div className="hidden md:inline my-6 space-x-3 text-sm">
            <LeapTag>Tag Badge Here</LeapTag>
            <LeapTag>Tag Badge Here</LeapTag>
            <LeapTag>Tag Badge Here</LeapTag>
          </div>
          <div className="md:hidden inline my-3 space-x-3 text-xs">
            <LeapTag>Tag Badge Here</LeapTag>
          </div>
          <div>
            <h1 className="md:text-5xl text-4xl mx-5 font-bold max-w-[16ch]">
              Leap into the Adventure
            </h1>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="md:hidden inline">
          <SubThemeCarousel></SubThemeCarousel>
        </div>
      </div>
    </>
  );
}
