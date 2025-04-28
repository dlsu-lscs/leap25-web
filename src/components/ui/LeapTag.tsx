import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
}

export default function LeapTag({ children, className }: ButtonProps) {
  return (
    <>
      <button className={`bg-white p-2 rounded-lg shadow-lg ${className}`}>{children}</button>
    </>
  );
}
