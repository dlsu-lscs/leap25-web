'use client';
import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
}

export default function LeapButton({ children, className }: ButtonProps) {
  return (
    <>
      <button className={`px-2 py-1 rounded-sm shadow-lg ${className}`}>{children}</button>
    </>
  );
}
