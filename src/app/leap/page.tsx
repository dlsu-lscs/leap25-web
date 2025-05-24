import Navbar from '@/components/layout/Navbar';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <>
      <div className="sm:bg-black/0 bg-black/20 fixed top-0 z-20">
        <Navbar />
      </div>
      <div
        className={`min-h-screen bg-black/60 bg-blend-multiply bg-cover bg-center 
            bg-[url('/landingBG.webp')] flex flex-col justify-center items-center font-public-sans font-medium text-white
            `}
      >
        <div
          className="flex flex-col justify-center items-center
          font-bold tracking-wide text-shadow-xl inset-shadow-xl font-playfair 
           text-[32px] sm:text-[52px] text-center 
          "
        >
          <div className="relative h-[250px] sm:h-[350px] overflow-hidden">
            <Image
              src="/leapLogos/Logo_v1.png"
              alt="Leap 2025"
              width={500}
              height={300}
              className="object-cover object-center w-[350px] sm:w-[500px]"
            />
          </div>
          <h1>
            <span className="text-[#FBBC05]">About </span>
            <span className="text-[#98C10E]">Us</span>
          </h1>
        </div>
        <div className="flex flex-col text-white font-public-sans text-[16px] sm:text-[20px] sm:w-1/2 sm:m-12 p-8">
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <div className="flex flex-col my-6">
            <p className="font-bold">Section 1.10.32 of "de Finibus Bonorum et Malorum":</p>
            <ul>
              <li>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium,
              </li>
              <li>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium,
              </li>
              <li>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium,
              </li>
              <li>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium,
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
