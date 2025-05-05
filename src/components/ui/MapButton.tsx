import { ReactNode } from 'react';

interface MapButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

import { Playfair_Display_SC } from 'next/font/google';

const playfair_display_sc_regular = Playfair_Display_SC({ subsets: ['latin'], weight: '400' });

export default function MapButton({ children, onClick }: MapButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`${playfair_display_sc_regular.className} text-white border-3 border-[#FBBC05] box-shadow-lg inset-shadow-lg px-6 py-2 text-[16px] bg-[rgba(0,0,0,0.35)] hover:bg-[rgba(0,0,0,0.5)] hover:scale-105 transition duration-200`}
      >
        {children || '- CLICK TO START - '}
      </button>
    </>
  );
}
