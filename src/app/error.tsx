'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button } from '@/components/ui/Button';

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="h-full w-full bg-[url('/landingBG.png')] bg-cover bg-center bg-black/50 bg-blend-multiply flex items-center justify-center flex-col">
      <h1 className="text-5xl font-extrabold tracking-wide text-shadow-lg inset-shadow-lg">
        <span className="text-[#FBBC05] font-playfair">Oops! </span>
        <span className="text-[#98C10E] font-playfair">You’ve drifted into Neverland..</span>
      </h1>

      <h3 className="text-white text-md text-center my-4 font-normal">
        This page flew off to Neverland. Let’s guide you back.
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
