import googleLogin from '@/../public/googleLogin.svg';
import Image from 'next/image';

export default function Login() {
  return (
    <>
      <div className="flex h-full w-full justify-center items-center">
        <button className="hover:scale-110 transition active:scale-105">
          <Image src={googleLogin} alt="google login" className="w-44 lg:w-52"></Image>
        </button>
      </div>
    </>
  );
}
