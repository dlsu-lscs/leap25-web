'use client';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { nameInitials } from '@/lib/helpers';
import { useCookies } from 'react-cookie';

interface NavbarProps {
  className?: string;
}

import { Public_Sans } from 'next/font/google';
import { decodeJWT } from '@/lib/decodeJWT';
import { getSubTheme } from '@/services/subthemeService';

const public_sans = Public_Sans({ subsets: ['latin'] });

export default function Navbar({ className }: NavbarProps) {
  const [cookies, ,] = useCookies(['currentUser']);
  const decodedJWT = decodeJWT(cookies['currentUser']) || 'user';
  let subtheme;
  console.log(subtheme);

  return (
    <>
      <div
        className={`bg-black/0.2 text-white min-w-screen flex justify-between px-8 py-5  ${className}`}
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
          {subtheme == undefined ? (
            <div className={`text-[20px] ${public_sans.className}`}>Back to Map</div>
          ) : (
            <>
              <div className={`text-[20px] ${public_sans.className}`}>{subtheme}</div>
              <Avatar className="w-9 h-9 mx-2 text-xs">
                <AvatarImage src={'/subthemeLogos/' + subtheme} />
                <AvatarFallback>{nameInitials(subtheme || 'na')}</AvatarFallback>
              </Avatar>
            </>
          )}
        </div>
        <div>
          <Avatar className="w-10 h-10 text-xs text-black">
            <AvatarImage src={decodedJWT.display_picture} />
            <AvatarFallback>{nameInitials(decodedJWT.email || 'user')}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}
