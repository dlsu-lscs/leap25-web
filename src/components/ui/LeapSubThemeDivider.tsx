import Image from 'next/image';
import whiteEllipse from '@/../public/white-ellipse.svg';

export default function LeapSubThemeDivider({ className }: { className?: string }) {
  return (
    <>
      <div className={`bg-yellow-400 rounded-full ${className || ''}`}></div>
    </>
  );
}
