import Navbar from '@/components/layout/Navbar';
import AuthRedirectProvider from '@/context/authRedirectProvider';

export default function FAQ() {
  return (
    <>
      <AuthRedirectProvider>
        <div className="fixed top-0 z-20">
          <Navbar />
        </div>
      </AuthRedirectProvider>
    </>
  );
}
