'use client';
import googleLogin from '@/../public/googleLogin.svg';
import useGoogleAuth from '@/hooks/useGoogleAuth';
import Image from 'next/image';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function GoogleLogin() {
  const { user, loading, error, login } = useGoogleAuth();
  const [cookie] = useCookies(['currentUser']);

  useEffect(() => {
    if ('currentUser' in cookie) {
      window.location.replace('/');
    }
  }, [user]);

  return (
    <>
      <button
        className="hover:scale-110 transition active:scale-105"
        onClick={() => {
          login();
        }}
      >
        <Image src={googleLogin} alt="google login" className="w-44 lg:w-52"></Image>
      </button>
    </>
  );
}
