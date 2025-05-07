'use client';

import SubThemeCarousel from '@/features/MapSubTheme/SubThemeCarousel';
import useGoogleAuthRedirect from '@/hooks/useGoogleAuthRedirect';

import { motion, AnimatePresence } from 'framer-motion';

import { Playfair_Display_SC } from 'next/font/google';
import MapButton from '@/components/ui/MapButton';
import { useState } from 'react';
import SubThemeMapPicker from '@/features/MapSubTheme/DesktopMapSubTheme/SubThemeMapPicker';

const playfair_display_sc_bold = Playfair_Display_SC({ subsets: ['latin'], weight: '700' });

export default function Map() {
  useGoogleAuthRedirect();
  return (
    <>
      <div className="sm:inline hidden">
        <div className="flex justify-between w-full h-full flex-col bg-[url('/map/LEAP_MAP.webp')] bg-black/40 bg-blend-multiply bg-cover bg-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,10,30,0.45)_100%)]  pointer-events-none z-10"></div>
          <div className="fixed z-20">
            <SubThemeMapPicker></SubThemeMapPicker>
          </div>
        </div>
      </div>
    </>
  );
}
