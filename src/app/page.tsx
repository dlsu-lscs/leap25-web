'use client';

import SubThemeCarousel from '@/features/MapSubTheme/SubThemeCarousel';
import useGoogleAuthRedirect from '@/hooks/useGoogleAuthRedirect';
import { useCookies } from 'react-cookie';

import { Playfair_Display_SC } from 'next/font/google';
import MapButton from '@/components/ui/MapButton';

const playfair_display_sc_bold = Playfair_Display_SC({ subsets: ['latin'], weight: '700' });

export default function Map() {
  useGoogleAuthRedirect();
  const [cookies] = useCookies(['currentUser']);
  console.log(cookies['currentUser']);
  return (
    <>
      <div className="flex justify-between w-full h-full flex-col bg-[url('/map/LEAP_MAP.webp')] bg-black/60 bg-blend-multiply bg-cover bg-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,10,30,0.95)_100%)]  pointer-events-none z-10"></div>
        <div className="flex flex-col items-center justify-center my-12">
          <h1
            className={`text-center font-bold text-[30px] sm:text-[32px] text-[#98C10E] ${playfair_display_sc_bold.className} text-shadow-lg inset-shadow-lg`}
          >
            LEAP INTO THE
          </h1>
          <h1
            className={`text-center font-bold text-[30px] sm:text-[70px] text-[#FBBC05] ${playfair_display_sc_bold.className} text-shadow-lg inset-shadow-lg -translate-y-6`}
          >
            ADVENTURE
          </h1>
        </div>

        <div className="flex justify-center my-36">
          <MapButton></MapButton>
        </div>
      </div>
    </>
  );
}
