import Image from 'next/image';

export default function Loading() {
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
