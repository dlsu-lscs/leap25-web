'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Loading() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('nawiufbawfbwab');
      // Redirect to timeout error page
      router.push(
        '/timeout-error?message=Connection%20timeout%20-%20Please%20check%20your%20internet%20connection'
      );
    }, 15000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <div className="h-full w-full bg-[url('/landingBG.webp')] bg-cover bg-center bg-black/50 bg-blend-multiply flex items-center justify-center flex-col">
        <div className="flex flex-col items-center justify-center -translate-y-8">
          <Image
            src={'/lscsAssets/loadingMacky.gif'}
            width={120}
            height={120}
            unoptimized
            priority
            alt="loading"
            className="my-6"
          ></Image>
          <h1 className="text-[32px] sm:text-[42px] text-center font-extrabold tracking-wide text-shadow-lg inset-shadow-lg">
            <span className="text-[#FBBC05] font-playfair">Off to </span>
            <span className="text-[#98C10E] font-playfair">AdventureLand...</span>
          </h1>
          <h3 className="text-white text-[16px] text-center my-4 font-normal">
            Pixie dust is settling. Please wait a moment.
          </h3>
        </div>
      </div>
    </>
  );
}
