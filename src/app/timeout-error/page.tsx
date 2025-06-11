'use client';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';

function TimeoutErrorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const message = searchParams.get('message') || 'Connection timeout occurred';

  return (
    <div className="h-full w-full bg-[url('/landingBG.webp')] bg-cover bg-center bg-black/50 bg-blend-multiply flex items-center justify-center flex-col">
      <Image
        width={200}
        height={200}
        alt="timeout error"
        src="/lscsAssets/XXMACKY.png"
        className="my-6"
      />
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-shadow-lg inset-shadow-lg text-center">
        <span className="text-[#FBBC05] font-playfair">Timeout! </span>
        <span className="text-[#98C10E] font-playfair">AdventureLand took too long to load...</span>
      </h1>

      <h3 className="text-white text-md text-center my-4 font-normal">{message}</h3>

      <div className="flex gap-4 mt-4">
        <Button
          variant={'outline'}
          onClick={() => router.back()}
          className="font-playfair text-xl font-semibold px-8 py-4"
        >
          <KeyboardReturnIcon /> Go Back
        </Button>

        <Button
          onClick={() => router.push('/')}
          className="font-playfair text-xl font-semibold px-8 py-4"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}

export default function TimeoutErrorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TimeoutErrorContent />
    </Suspense>
  );
}
