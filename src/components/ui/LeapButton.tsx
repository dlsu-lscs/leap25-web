'use client';
import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
}

export default function LeapButton({ children, className }: ButtonProps) {
  return (
    <>
      <button className={`bg-[#D9D9D9] px-2 py-1 rounded-xs shadow-lg ${className}`}>
        {children}
      </button>
    </>
  );
}
