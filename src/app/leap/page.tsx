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
            bg-[url('/landingBG.webp')] flex flex-col items-center font-public-sans font-medium text-white 
            `}
      >
        <div className="flex flex-col items-center -translate-y-8">
          <div
            className="flex flex-col justify-center items-center
          font-bold tracking-wide text-shadow-xl inset-shadow-xl font-playfair 
           text-[32px] sm:text-[64px] text-center 
          "
          >
            <div className="relative h-[250px] sm:h-[330px] overflow-hidden">
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
          <div className="flex flex-col text-white justfy-center font-public-sans text-[18px] sm:text-[24px] sm:mx-12 sm:my-6 my-8 px-8 gap-8">
            <p className="font-light">
              The Lasallian Enrichment Alternative Program (LEAP) is a week-long celebration of
              personal growth, creativity, and learning beyond the classroom—proudly spearheaded by
              the Council of Student Organizations (CSO) of De La Salle University.
            </p>
            <p className="font-light">
              LEAP Week 2025 runs from June 20, 21, 23, 25, and 26, featuring dynamic,
              interest-driven workshops and sessions led by DLSU’s diverse student organizations. On
              LEAP Day (June 26), regular academic classes are suspended to give way to a
              university-wide experience of exploration and engagement. It’s a unique opportunity to
              discover new passions, develop essential life skills, and connect with the Lasallian
              community in fun, but meaningful ways.
            </p>
            <p className="font-light">
              This year’s theme, <span className="font-bold">LEAP 2025: Soar Beyond Limits</span>,
              draws inspiration from adventure and the inner child within us all. It’s about
              reigniting curiosity, embracing play, and stepping boldly into spaces that challenge,
              excite, and inspire. Whether you're dancing, crafting, cooking, exploring advocacy, or
              learning something entirely new, LEAP Week is your playground for growth, connection,
              and self-discovery.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
