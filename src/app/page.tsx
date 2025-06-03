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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setMute] = useState(false);

  useEffect(() => {
    const audio = new Audio('/sounds/bg_music.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audio.play();
    setMute(false);
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

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
      <div className="absolute top-3 right-15 sm:top-auto sm:bottom-5 sm:right-5 z-50">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ease-in-out"
          style={{
            background:
              'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
            border: '2px solid transparent',
          }}
          onClick={() => {
            if (!isMuted) {
              audioRef.current!.volume = 0;
              setMute(true);
            } else {
              audioRef.current!.volume = 0.4;
              setMute(false);
            }
          }}
        >
          {!isMuted ? (
            <>
              <img src="/soundsAssets/Sound.png" alt="Bookmark" width="28" height="28" />
            </>
          ) : (
            <img src="/soundsAssets/Mute.png" alt="Bookmark" width="28" height="28" />
          )}
        </div>
      </div>
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
