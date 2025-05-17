import Image from 'next/image';

export default function AboutLSCS() {
  return (
    <>
      <div>
        <div className="pt-24 px-8 flex items-center space-x-1.5">
          <div className="flex sm:hidden">
            <Image src={'/lscsAssets/lscsLogo.png'} width={180} height={120} alt="lscs logo" />
          </div>
          <div className="text-4xl sm:text-[64px] font-playfair font-bold text-shadow-xl drop-shadow-lg flex flex-col space-y-1">
            <h1 className="text-[#98C10E]">LA SALLE</h1>
            <h1 className="text-[#FBBC05]">COMPUTER SOCIETY</h1>
          </div>
        </div>
      </div>
      <div className="font-public-sans text-white text-[12px] sm:text-[20px] px-8 py-12 leading-6 flex flex-col space-y-8">
        <div>
          <p>
            <span className="font-bold">La Salle Computer Society</span> is the pioneering
            organization in the College of Computer Studies now on its 38th year of service for the
            Lasallian community. Developing members to become competent and well-rounded Lasallians
            who are aware of the numerous advances in computer technology.
          </p>
        </div>
        <div className="flex flex-col space-y-0.5">
          <p className="font-bold">LSCS Vision:</p>
          <ul className="list-disc px-4 sm:px-8">
            <li>
              We envision the La Salle Computer Society to be an organization that, through quality
              assistance and activities, will mold its members academically, socially and
              spiritually in order for them to become competent Lasallian students and well-rounded
              individuals. We also see the organization to be the pioneering student organization of
              the De La Salle University Manila that strongly symbolizes the expertise of the
              College of Computer Studies (CCS) in the field of computer science
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-0.5">
          <p className="font-bold">LSCS Mission:</p>
          <ul className="list-disc px-4 sm:px-8">
            <li>
              <span className="font-bold">Purpose - </span>to know and understand the reason behind
              every act, decision, and endeavor pursued.
            </li>
            <li>
              <span className="font-bold">Process - </span>to organize and oversee the entire
              procedure of every project and make sure that each goes through very necessary step
              towards the purpose.
            </li>
            <li>
              <span className="font-bold">Excellence - </span> to accomplish our goals in the best
              way possible and in accordance with the ideals of the organization and of De La Salle
              University Manila.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
