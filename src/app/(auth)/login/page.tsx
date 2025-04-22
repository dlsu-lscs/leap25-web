import GoogleLogin from '@/features/auth/GoogleLogin';

export default function Login() {
  return (
    <>
      <div className="flex h-full w-full justify-center items-center">
        <GoogleLogin></GoogleLogin>
      </div>
    </>
  );
}
