'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CookiesProvider } from 'react-cookie';

interface ProvidersProps {
  children?: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  const clientID = '417662644693-3ebmp4qkddo9oaso162h6ma09laue9mj.apps.googleusercontent.com';

  return (
    <>
      <GoogleOAuthProvider clientId={clientID}>
        <CookiesProvider>{children}</CookiesProvider>
      </GoogleOAuthProvider>
    </>
  );
}
