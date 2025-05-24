'use client';
import useGoogleAuthRedirect from '@/hooks/useGoogleAuthRedirect';
import { ReactNode } from 'react';

export default function AuthRedirectProvider({ children }: { children: ReactNode }) {
  useGoogleAuthRedirect();
  return <>{children}</>;
}
