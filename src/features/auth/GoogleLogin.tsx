'use client';
import googleLogin from '@/../public/googleLogin.svg';
import Image from 'next/image';
import { useCookies } from 'react-cookie';
import sleep from '@/lib/sleep';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function GoogleLogin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const playClouds = () => {
    const audio = new Audio('/sounds/cloud_sounds.mp3');
    audio.play();
  };

  useEffect(() => {
    const handleLoginRedirect = async () => {
      if (status === 'authenticated') {
        const leftCloud = document.querySelector('.left-cloud');
        const rightCloud = document.querySelector('.right-cloud');

        playClouds();
        leftCloud?.classList.add('left-cloud-inout');
        rightCloud?.classList.add('right-cloud-inout');
        await sleep(800);
        router.push('/');
        await sleep(1600);
        leftCloud?.classList.remove('left-cloud-inout');
        rightCloud?.classList.remove('right-cloud-inout');
      }
    };
    handleLoginRedirect();
  }, [status, router]);

  // Add event listener for message from popup window
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Verify the origin of the message for security
      if (event.origin !== window.location.origin) return;

      // If the popup sends the authentication-complete message, refresh the session
      if (event.data === 'authentication-complete') {
        // Refresh the session status to trigger the redirect in the other useEffect
        playClouds();
        window.location.reload();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleGoogleSignIn = () => {
    try {
      setIsSigningIn(true);

      // Calculate popup position (centered)
      const width = 500;
      const height = 600;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;

      // Open the popup window
      window.open(
        `/api/auth/signin/google?callbackUrl=${encodeURIComponent(`${window.location.origin}/auth/popup-close`)}`,
        'googleLogin',
        `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
      );

      // The authentication flow will continue in the popup
      // and communicate back via postMessage when complete
    } catch (error) {
      console.error('Sign-in error:', error);
    } finally {
      // Keep the isSigningIn true until we get the message
      // from the popup window that auth is complete
      setTimeout(() => {
        setIsSigningIn(false);
      }, 1000);
    }
  };

  return (
    <>
      <button
        className="hover:scale-110 transition active:scale-105"
        onClick={handleGoogleSignIn}
        disabled={isSigningIn}
      >
        <Image src={googleLogin} alt="google login" className="w-44 lg:w-52"></Image>
      </button>
    </>
  );
}
