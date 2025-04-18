'use client';

import { LeapCarousel } from '@/components/ui/LeapCarousel';
import ClassHighlight from '@/features/subthemeComponents/subthemeClassHighlightCard';
import { useEffect, useState } from 'react';

export default function Subtheme() {
  const [isMobile, setIsMobile] = useState(false);
  // Effect to detect screen size
  useEffect(() => {
    // Check initial screen size
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to handle screen size detection
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // 768px is standard md breakpoint
  };

  return (
    <>
      <div className="h-full w-full pt-12">
        <div className="flex w-full flex-row flex-wrap md:flex-nowrap justify-center gap-12">
          <div className="sm:pl-12 pl-0 w-full flex-0">
            <ClassHighlight imgLink="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/480109991_988152660123302_5845435330837760038_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFoLZ4YxfFUQZ6gacPygpuMqHDmVHJtWQyocOZUcm1ZDE-K5ilAniNWGZmbKQwNYDda0BSPp5W-LWZ328FNSR4P&_nc_ohc=cKYUfYGnImQQ7kNvwFsjwz3&_nc_oc=AdkP3tJFrxTUgEU92tnAQwrF7wRgNMU0hS2-wUEa_SN6WKtl6krU_12X_ujs4hgL1O8&_nc_zt=23&_nc_ht=scontent.fcrk1-2.fna&_nc_gid=rBy56VX3nEQkql8Q4zf0Tg&oh=00_AfEfdGqjdaQl2KcNsyB-4qTaTR0eCHz3Cu5PLhczJyav6A&oe=68056D8F">
              R&Deploy Your Own Bot Workshop
            </ClassHighlight>
          </div>

          <div className="overflow-hidden flex-grow-1">
            <h3 className="font-semibold text-3xl ml-12 mb-4">Day 1</h3>
            <LeapCarousel
              row2={isMobile ? false : true}
              itemsToShow={Array.from({ length: 16 })}
            ></LeapCarousel>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-3xl ml-12 my-4">Day 2</h3>
          <LeapCarousel row2={false} itemsToShow={Array.from({ length: 12 })}></LeapCarousel>
        </div>
        <div>
          <h3 className="font-semibold text-3xl ml-12 my-4">Day 3</h3>
          <LeapCarousel row2={false} itemsToShow={Array.from({ length: 12 })}></LeapCarousel>
        </div>
        <div>
          <h3 className="font-semibold text-3xl ml-12 my-4">Day 4</h3>
          <LeapCarousel row2={false} itemsToShow={Array.from({ length: 12 })}></LeapCarousel>
        </div>
        <div className="pb-12">
          <h3 className="font-semibold text-3xl ml-12 my-4">Day 5</h3>
          <LeapCarousel row2={false} itemsToShow={Array.from({ length: 12 })}></LeapCarousel>
        </div>
      </div>
    </>
  );
}
