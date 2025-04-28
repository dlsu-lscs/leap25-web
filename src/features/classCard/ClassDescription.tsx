import { ReactNode } from 'react';

interface ClassDescriptionProps {
  children?: ReactNode;
  className?: string;
}

export default function ClassDescription({ children, className }: ClassDescriptionProps) {
  return (
    <>
      <div className="flex items-center">
        <div className="bg-white w-1 h-20 drop-shadow-xl"></div>
        <p className={`pl-4 text-shadow-xs ${className}`}>{children}</p>
      </div>
    </>
  );
}
