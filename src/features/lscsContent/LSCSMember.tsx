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
      <div className="flex flex-col items-center justify-center space-y-3.5">
        <div>
          <img
            className="hover:-translate-y-6 transition duration-200 ease-in-out w-56 h-auto "
            src={src}
            alt="member"
          />
        </div>
        <div className="space-y-1">
          <h1 className="text-white font-playfair text-[16px] sm:text-[20px] font-bold">{name}</h1>
          <p className="text-[#E9C438] font-public-sans font-light text-[16px] sm:text[20px]">
            {position}
          </p>
        </div>
      </div>
    </>
  );
}
