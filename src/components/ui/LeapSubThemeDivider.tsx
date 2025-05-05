import Image from 'next/image';
import whiteEllipse from '@/../public/white-ellipse.svg';

export default function LeapSubThemeDivider() {
  return (
    <>
      <Image
        src={whiteEllipse}
        alt="white-ellipse"
        className="w-2 h-2 opacity-40 bg-black rounded-full"
      ></Image>
    </>
  );
}
