'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CookiesProvider } from 'react-cookie';

interface ProvidersProps {
  children?: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  const clientID = '112879338322-58o490i8bdlag1dhio1d98n693furloc.apps.googleusercontent.com';

  return (
    <>
      <GoogleOAuthProvider clientId={clientID}>
        <CookiesProvider>{children}</CookiesProvider>
      </GoogleOAuthProvider>
    </>
  );
}
