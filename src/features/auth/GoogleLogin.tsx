'use client';
import googleLogin from '@/../public/googleLogin.svg';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GoogleLogin() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  return (
    <>
      <button
        className="hover:scale-110 transition active:scale-105"
        onClick={() => {
          signIn('google');
        }}
      >
        <Image src={googleLogin} alt="google login" className="w-44 lg:w-52"></Image>
      </button>
    </>
  );
}
