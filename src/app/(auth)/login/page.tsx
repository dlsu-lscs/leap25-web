import GoogleLogin from '@/features/auth/GoogleLogin';
import Image from 'next/image';


export default function Login() {
  return (
    <>
      <div className="flex flex-col h-full w-full justify-center items-center bg-[url('/landingBG.png')] bg-center bg-cover bg-black/50 bg-blend-multiply text-center">
        <div className="-translate-y-20">
          <div className={`flex flex-col items-center justify-center space-y-3 `}>
            <div className="h-[300px] overflow-hidden">
              <Image
                src="/leapLogos/Logo_v1.png"
                width={419}
                height={113}
                className="object-cover"
                style={{ objectPosition: 'center' }}
                alt="Leap 2025"
              />
            </div>
            <h1
              className={`text-center font-bold text-[30px] sm:text-[48px] text-[#FBBC05] font-bold font-playfair text-shadow-lg inset-shadow-lg`}
            >
              WELCOME TO
              <span className="text-[#98C10E]"> NEVERLAND</span>
            </h1>
            <h2
              className={`text-center text-white text-[16px] sm:text-[20px] font-playfair text-shadow-lg inset-shadow-lg`}
            >
              STEP INTO NEVERLAND - THE ADVENTURE AWAITS.
            </h2>
            <div className="font-light text-[12px] sm:text-[15px] text-white text-shadow-lg inset-shadow-lg">
              <p className="flex items-center justify-center">
                Powered by{' '}
                <Image
                  src={'/lscsAssets/lscsLogo.png'}
                  width={24}
                  height={24}
                  alt="lscs"
                  className="mx-1"
                />
                La Salle Computer Society
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3 py-16">
            <p className="text-white text-[16px] sm:text-[20px] font-light text-shadow-lg inset-shadow-lg">
              Use your DLSU Gmail to unlock your portal.
            </p>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </>
  );
}
