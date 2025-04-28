'use client';
import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
}

export default function LeapTag({ children, className }: ButtonProps) {
  return (
    <>
      <button className={`${className} flex p-2 rounded-lg shadow-lg `}>{children}</button>
    </>
  );
}
