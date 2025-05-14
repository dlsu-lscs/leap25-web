import { ReactNode } from 'react';

interface ClassDescriptionProps {
  children?: ReactNode;
  className?: string;
}

export default function ClassDescription({ children, className }: ClassDescriptionProps) {
  return (
    <>
      <div className="flex items-center border-solid border-l-2 border-l-white ">
        <p className={`pl-4 text-shadow-xs ${className}`}>{children}</p>
      </div>
    </>
  );
}
