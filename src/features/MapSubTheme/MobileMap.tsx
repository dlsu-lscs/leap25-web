import React, { useState } from 'react';

export default function ZoomImage({ src, bgPos }: { src: string; bgPos: string }) {
  const [selectedRegion, setSelectedRegion] = useState(bgPos);
  const handleClick = (region: string) => {
    console.log(`Clicked on ${region}`);
    // Implement your logic here
  };
  return (
    <div className="max-w-full">
      {/* Alternatively, background image approach */}
      <div
        className={`relative flex justify-center items-center w-full h-64 bg-no-repeat bg-[length:400%_auto] transition-all duration-500 ease-in-out ${bgPos}`}
        style={{ backgroundImage: `url(/fullMapColored.png)` }}
      >
        <button
          onClick={() => handleClick('top-left')}
          className="w-1/2 h-1/2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Top Left Region"
        />
      </div>
    </div>
  );
}
