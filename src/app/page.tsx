'use client';
import SubThemeMapPicker from '@/features/MapSubTheme/DesktopMapSubTheme/SubThemeMapPicker';
import MobileMapClientWrapper from '@/features/MapSubTheme/mapClientWrapper';
import AuthRedirectProvider from '@/context/authRedirectProvider';
import { useEffect, useState } from 'react';
import Loading from './loading';

export default function Map() {
  const [onImageLoad, setImageLoad] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = '/map/LEAP_MAP.webp';
    img.onload = () => {
      setImageLoad(true);
    };
  }, []);
  return (
    <div className="overflow-hidden h-full">
      <AuthRedirectProvider>
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
            <div className="sm:hidden w-full h-full">
              <MobileMapClientWrapper></MobileMapClientWrapper>
            </div>
            <div className="sm:inline hidden">
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
      </AuthRedirectProvider>
    </div>
  );
}
