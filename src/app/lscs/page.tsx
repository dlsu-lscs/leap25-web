import Navbar from '@/components/layout/Navbar';
import FadeOverlay from '@/components/ui/FadeOverlay';
import LeapSeperator from '@/components/ui/LeapSeperator';
import BackgroundMusic from '@/features/backgroundMusic/BackgroundMusic';
import AboutLSCS from '@/features/lscsContent/AboutLSCS';
import LSCSTeam from '@/features/lscsContent/LSCSTeam';

export default function AboutUs() {
  return (
    <>
      <div className="sm:bg-black/0 bg-black/20 fixed top-0 z-20">
        <Navbar variant="non-map" />
      </div>
      <div
        className={`min-h-screen bg-black/60 bg-blend-multiply bg-cover bg-center 
            bg-[url('/landingBG.webp')] 
            `}
      >
        <AboutLSCS></AboutLSCS>
        <div className="min-w-screen flex justify-end p-8 sm:p-28">
          <LeapSeperator length="full"></LeapSeperator>
        </div>
        <LSCSTeam></LSCSTeam>
      </div>
    </>
  );
}
