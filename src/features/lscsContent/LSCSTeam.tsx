import LSCSMember from './LSCSMember';
import { developers, heads, uiux } from '@/lib/data';

export default function LSCSTeam() {
  return (
    <>
      <div className="flex flex-col space-y-24">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <h1 className="text-[#FBBC05] font-playfair font-bold text-[48px] sm:text-[64px]">
            MEET THE <span className="text-[#98C10E]">TEAM</span>
          </h1>
          <p className="font-public-sans font-light text-[16px] sm:text-[24px] text-white w-1/2">
            Meet the developers of the LEAP 2025 website from the Research and Development Committee
            of the La Salle Computer Society
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-8 px-12 ">
          <h1 className="text-[#98C10E] font-playfair font-bold text-[48px] sm:text-[64px] text-center">
            HEADS
          </h1>
          <div className="flex space-x-24 justify-center">
            {heads.map((member, index) => {
              return (
                <LSCSMember
                  key={index}
                  src={member.src}
                  position={member.position}
                  name={member.name}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <h1 className="text-[#98C10E] font-playfair font-bold text-[48px] sm:text-[64px]">
            DEVELOPERS
          </h1>
          <div className="flex space-x-24 justify-center">
            {developers.map((member, index) => {
              return (
                <LSCSMember
                  key={index}
                  src={member.src}
                  position={member.position}
                  name={member.name}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-8 pb-20">
          <h1 className="text-[#98C10E] font-playfair font-bold text-[48px] sm:text-[64px]">
            UI/UX
          </h1>
          <div className="flex space-x-24 justify-center">
            {uiux.map((member, index) => {
              return (
                <LSCSMember
                  key={index}
                  src={member.src}
                  position={member.position}
                  name={member.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
