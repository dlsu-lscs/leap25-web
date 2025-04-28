'use client';

import useGoogleAuthRedirect from '@/hooks/useGoogleAuthRedirect';

import { Playfair_Display } from 'next/font/google';
const playfair_display = Playfair_Display({ subsets: ['latin'] });

export default function Subtheme() {
  useGoogleAuthRedirect();

  return (
    <>
      <div className="h-full w-full py-12 px-24 bg-gray-400 text-white">
        <div>
          <h1 className={`text-[64px] font-bold ${playfair_display.className}`}>LEAP's choice</h1>
        </div>
      </div>
      <div className="h-full w-full p-12 bg-gray-800 text-white">
        <div>
          <h1 className={`text-[64px] font-bold ${playfair_display.className}`}>LEAP'S choice</h1>
        </div>
      </div>
    </>
  );
}
