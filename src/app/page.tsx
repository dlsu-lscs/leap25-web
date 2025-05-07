'use client';

import SubThemeCarousel from '@/features/MapSubTheme/SubThemeCarousel';
import useGoogleAuthRedirect from '@/hooks/useGoogleAuthRedirect';
import { useState } from 'react';
import pixieLogo from '@/../public/subthemeLogos/colored/Pixie Hollow.png';
import coralLogo from '@/../public/subthemeLogos/colored/Coral Lagoon.png';
import pirateLogo from '@/../public/subthemeLogos/colored/Pirate_s Cove.png';
import secondStarLogo from '@/../public/subthemeLogos/colored/Second Star to the Right.png';
import lostBoysLogo from '@/../public/subthemeLogos/colored/Lost Boys_ Hideout.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display_SC } from 'next/font/google';
import MapButton from '@/components/ui/MapButton';
import SubThemeMapPicker from '@/features/MapSubTheme/DesktopMapSubTheme/SubThemeMapPicker';

const playfair_display_sc_bold = Playfair_Display_SC({ subsets: ['latin'], weight: '700' });

const tempArr = [
  { content: 'PIXIE HOLLOW', id: 0, bgColor: '#F5A1B4', img: pixieLogo, bgPos: 'bg-[100%_100%]' },
  { content: 'CORAL LAGOON', id: 1, bgColor: '#27659B', img: coralLogo, bgPos: 'bg-[100%_0%]' },
  { content: "PIRATE'S COVE", id: 2, bgColor: '#7B5D9E', img: pirateLogo, bgPos: 'bg-[0%_100%]' },
  {
    content: 'SECOND STAR',
    id: 3,
    bgColor: '#FCAE3E',
    img: secondStarLogo,
    bgPos: 'bg-[50%_50%]',
  },
  {
    content: "LOST BOY'S HIDEOUT",
    id: 4,
    bgColor: '#0E7769',
    img: lostBoysLogo,
    bgPos: 'bg-[0%_0%]',
  },
];
export default function Map() {
  const [selectedId, setSelectedId] = useState<number | undefined>(tempArr[0].id);
  useGoogleAuthRedirect();
  const [isStart, setStart] = useState(false);
  return (
    <>
      <div className="flex justify-between w-full h-full flex-col bg-[url('/map/LEAP_MAP.webp')] bg-black/40 bg-blend-multiply bg-cover bg-center">
        <AnimatePresence>
          {isStart ? (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,10,30,0.45)_100%)]  pointer-events-none z-10"></div>
              <div className="fixed z-20">
                <SubThemeMapPicker></SubThemeMapPicker>
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,10,30,0.95)_100%)]  pointer-events-none z-10"></div>
              <motion.div
                className="flex flex-col items-center justify-center my-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
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
              </motion.div>

              <motion.div
                className="flex justify-center my-36"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <MapButton
                  onClick={() => {
                    setStart(!isStart);
                  }}
                ></MapButton>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <div className="flex justify-center md:hidden overflow-x-hidden">
          <SubThemeCarousel
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            items={tempArr}
          ></SubThemeCarousel>
        </div>
      </div>
    </>
  );
}
