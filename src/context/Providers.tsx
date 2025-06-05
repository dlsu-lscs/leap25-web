'use client';
import { SessionProvider } from 'next-auth/react';
import { CookiesProvider } from 'react-cookie';

interface ProvidersProps {
  children?: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <CookiesProvider>
        <SessionProvider>{children}</SessionProvider>
      </CookiesProvider>
    </>
  );
}
