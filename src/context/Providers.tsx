'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CookiesProvider } from 'react-cookie';

interface ProvidersProps {
  children?: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
        <CookiesProvider>{children}</CookiesProvider>
      </GoogleOAuthProvider>
    </>
  );
}
