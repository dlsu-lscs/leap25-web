import Image from 'next/image';

export default function LSCSMember({
  name,
  position,
  src,
}: {
  name: string;
  position: string;
  src: string;
}) {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <div className="bg-gradient-to-b from-[#003D6E] to-[#002B50] rounded-full w-60 h-60 drop-shadow-xl inset-shadow-xl flex justify-center items-center">
          <img
            className="-translate-y-12 translate-x-3 hover:-translate-y-6 transition duration-200 ease-in-out w-[600px] h-[350px] "
            src={src}
            alt="member"
          />
        </div>
        <div className="x-col space-y-1">
          <h1 className="text-white font-playfair text-[16px] sm:text-[24px] font-bold">{name}</h1>
          <p className="text-[#E9C438] font-public-sans font-light text-[16px] sm:text[24px]">
            {position}
          </p>
        </div>
      </div>
    </>
  );
}
