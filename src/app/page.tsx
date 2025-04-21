'use client';

import LeapTag from '@/components/ui/LeapTag';

export default function Map() {
  return (
    <>
      <div className="absolute left-1/2 z-20 -translate-x-1/2 flex justify-center">
        <div
          className="
        flex flex-col items-center py-8
        "
        >
          <div className="my-3 space-x-3 text-xs">
            <LeapTag>Tag Badge Here</LeapTag>
            <LeapTag>Tag Badge Here</LeapTag>
            <LeapTag>Tag Badge Here</LeapTag>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Leap into the Adventure</h1>
          </div>
        </div>
      </div>
      <div className="min-h-screen"></div>
    </>
  );
}
