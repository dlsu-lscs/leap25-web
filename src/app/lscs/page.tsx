import Navbar from '@/components/layout/Navbar';
import AuthRedirectProvider from '@/context/authRedirectProvider';
import AboutLSCS from '@/features/lscsContent/AboutLSCS';

export default function AboutUs() {
  return (
    <>
      <AuthRedirectProvider>
        <div className="sm:bg-black/0 bg-black/20 fixed top-0 z-20">
          <Navbar />
        </div>
        <div
          className={`min-h-screen bg-black/60 bg-blend-multiply bg-cover bg-center 
            bg-[url('/landingBG.webp')] 
            `}
        >
          <AboutLSCS></AboutLSCS>
        </div>
      </AuthRedirectProvider>
    </>
  );
}
