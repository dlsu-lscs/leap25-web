'use client';
import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  disabled: boolean;
  onClick?: () => void;
}

export default function LeapButton({ children, className, disabled, onClick }: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-2 py-1 rounded-sm shadow-lg ${className}`}
      >
        {children}
      </button>
    </>
  );
}
