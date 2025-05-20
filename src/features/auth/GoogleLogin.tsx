'use client';
import googleLogin from '@/../public/googleLogin.svg';
import useGoogleAuth from '@/hooks/useGoogleAuth';
import Image from 'next/image';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import sleep from '@/lib/sleep';

export default function GoogleLogin() {
  const { login } = useGoogleAuth();
  const [cookie] = useCookies(['currentUser']);
  const router = useRouter();

  useEffect(() => {
    const handleLoginRedirect = async () => {
      if ('currentUser' in cookie) {
        const leftCloud = document.querySelector('.left-cloud');
        const rightCloud = document.querySelector('.right-cloud');
        console.log(leftCloud);
        console.log(rightCloud);

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
  }, [cookie]);

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
