'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CookiesProvider } from 'react-cookie';

interface ProvidersProps {
  children?: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <GoogleOAuthProvider
        clientId={'417662644693-3ebmp4qkddo9oaso162h6ma09laue9mj.apps.googleusercontent.com'}
      >
        <CookiesProvider>{children}</CookiesProvider>
      </GoogleOAuthProvider>
    </>
  );
}
