'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button } from '@/components/ui/button';

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="h-full w-full bg-[url('/landingBG.webp')] bg-cover bg-center bg-black/50 bg-blend-multiply flex items-center justify-center flex-col">
      <Image
        width={200}
        height={200}
        alt="not found"
        src="/lscsAssets/XXMACKY.png"
        className="my-6"
      />
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-shadow-lg inset-shadow-lg text-center">
        <span className="text-[#FBBC05] font-playfair">Oops! </span>
        <span className="text-[#98C10E] font-playfair">
          You’ve drifted away from AdventureLand..
        </span>
      </h1>

      <h3 className="text-white text-md text-center my-4 font-normal">
        This page flew away from AdventureLand. Let’s guide you back.
      </h3>

      <Button
        variant={'outline'}
        onClick={() => router.back()}
        className="font-playfair text-xl font-semibold px-8 py-4"
      >
        <KeyboardReturnIcon /> Fly Me Back
      </Button>
    </div>
  );
}
