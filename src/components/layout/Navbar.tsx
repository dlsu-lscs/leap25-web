'use client';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { nameInitials } from '@/lib/helpers';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

interface NavbarProps {
  subtheme?: string;
  className?: string;
  src?: string;
}

import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({ subsets: ['latin'] });

export default function Navbar({ subtheme = 'Sub Theme', className, src }: NavbarProps) {
  const [loading, setLoading] = useState(false);
  const [cookies, ,] = useCookies(['currentUser', 'currentUserPicture']);

  useEffect(() => {
    setLoading(typeof window !== 'undefined');
  }, []);

  return (
    <>
      <div
        className={`bg-black/75 bg-opacity-50 text-white min-w-screen flex justify-between px-8 py-5  ${className}`}
      >
        <div className="flex items-center text-2xl space-x-1.5">
          <div
            onClick={() => {
              history.back();
            }}
            className="hover:opacity-50 transition duration-50"
          >
            <ChevronLeftOutlinedIcon sx={{ fontSize: 48 }} role="button"></ChevronLeftOutlinedIcon>
          </div>
          <div className={public_sans.className}>
            {loading && window.location.pathname == '/subtheme' ? 'Back to Menu' : subtheme}
          </div>
          <Avatar className="w-8 h-8 mx-2 text-xs">
            <AvatarImage src={src || undefined} />
            <AvatarFallback>{nameInitials(subtheme || 'na')}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <Avatar className="w-10 h-10 text-xs text-black">
            <AvatarImage src={cookies['currentUserPicture'] || undefined} />
            <AvatarFallback>{nameInitials(cookies['currentUser'])}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}
