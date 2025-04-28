import LeapTag from '@/components/ui/LeapTag';
import { useState } from 'react';

export default function SubThemeClassCard() {
  const [onHover, setHover] = useState(false);
  return (
    <>
      <div
        className="h-[448px] w-[304px] bg-[url(/subthemeBG/Lost_Boys_Hideout_BG.png)] rounded-xl m-4 border-white border-2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {onHover ? (
          <>
            <div>
              <LeapTag className="text-xs m-4  bg-[#01B634] rounded-2xl px-2 py-1 font-bold text-white">
                20 Slots Available
              </LeapTag>
            </div>
            <div></div>
          </>
        ) : null}
      </div>
    </>
  );
}
