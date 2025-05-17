import LSCSMember from './LSCSMember';

export default function LSCSTeam() {
  return (
    <>
      <div className="flex flex-col space-y-24">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <h1 className="text-[#FBBC05] font-playfair font-bold text-[48px] sm:text-[64px]">
            MEET THE <span className="text-[#98C10E]">TEAM</span>
          </h1>
          <p className="font-public-sans font-light text-[16px] sm:text-[24px] text-white w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-16">
          <h1 className="text-[#98C10E] font-playfair font-bold text-[48px] sm:text-[64px]">
            HEADS
          </h1>
          <div className="flex flex-col sm:flex-row gap-20 ">
            <LSCSMember />
            <LSCSMember />
            <LSCSMember />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-16">
          <h1 className="text-[#98C10E] font-playfair font-bold text-[48px] sm:text-[64px]">
            DEVELOPERS
          </h1>
          <div className="flex flex-col sm:flex-row gap-20 ">
            <LSCSMember />
            <LSCSMember />
            <LSCSMember />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-16">
          <h1 className="text-[#98C10E] font-playfair font-bold text-[48px] sm:text-[64px]">
            UI/UX
          </h1>
          <div className="flex flex-col sm:flex-row gap-20 ">
            <LSCSMember />
            <LSCSMember />
            <LSCSMember />
            <LSCSMember />
          </div>
        </div>
      </div>
    </>
  );
}
