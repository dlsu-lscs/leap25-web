'use client';
import SubThemeMapPicker from '@/features/MapSubTheme/DesktopMapSubTheme/SubThemeMapPicker';
import MobileMapClientWrapper from '@/features/MapSubTheme/mapClientWrapper';
import { useEffect, useRef, useState } from 'react';
import Loading from './loading';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { AnimatePresence, motion } from 'framer-motion';
import ProfileCard from '@/components/layout/Profile';

export default function Map() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showText, setShowText] = useState(true);
  const timerRef = useRef<number | null>(null);

  const [onImageLoad, setImageLoad] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = '/map/LEAP_MAP.webp';
    img.onload = () => {
      setImageLoad(true);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowText(false);

      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = window.setTimeout(() => {
        setShowText(true);
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);
  return (
    <div className="overflow-hidden h-full relative z-50">
      {onImageLoad && (
        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="absolute top-10 hidden lg:block left-1/2 font-bold text-shadow-lg inset-shadow-lg text-shadow-background-black -translate-x-1/2 font-playfair text-center z-30"
            >
              <h3 className="sm:text-3xl text-2xl text-[#98C10E]">LEAP INTO THE</h3>
              <h1 className="sm:text-6xl text-5xl text-[#FBBC05]">ADVENTURE</h1>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      <ProfileCard className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50" />
      <img
        src="/map/LEAP_MAP.webp"
        alt="image"
        onLoad={() => {
          setImageLoad(true);
        }}
        className="hidden"
      />
      {onImageLoad ? (
        <>
          <div className="lg:hidden w-full h-full">
            <MobileMapClientWrapper></MobileMapClientWrapper>
          </div>
          <div className="lg:inline hidden">
            <div className="flex justify-between w-full h-full flex-col bg-[url('/map/LEAP_MAP.webp')] bg-black/40 bg-blend-multiply bg-cover bg-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,10,30,0.45)_100%)]  pointer-events-none z-10"></div>
              <div className="fixed z-20">
                <SubThemeMapPicker></SubThemeMapPicker>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Loading></Loading>
        </>
      )}
    </div>
  );
}
