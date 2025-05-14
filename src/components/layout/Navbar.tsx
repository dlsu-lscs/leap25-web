'use client';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { nameInitials } from '@/lib/helpers';
import { useCookies } from 'react-cookie';

interface NavbarProps {
  name?: string;
  src?: string;
  className?: string;
}

import { Public_Sans } from 'next/font/google';
import { useDecodeJWT } from '@/hooks/useDecodeJWT';

const public_sans = Public_Sans({ subsets: ['latin'] });

export default function Navbar({ className, src, name }: NavbarProps) {
  const [cookies, ,] = useCookies(['currentUser']);
  const decodedJWT = useDecodeJWT(cookies['currentUser']);

  return (
    <>
      <div
        className={`bg-black/0.2 text-white min-w-screen flex justify-between sm:px-8 px-4 py-5  ${className}`}
      >
        <div className="flex items-center text-2xl space-x-1.5">
          <a
            href="./"
            className="flex items-center space-x-1 hover:opacity-50 transition duration-50"
          >
            <ChevronLeftOutlinedIcon sx={{ fontSize: 48 }} role="button"></ChevronLeftOutlinedIcon>
            {name == undefined ? (
              <div className={`text-[20px] ${public_sans.className}`}>Back to Map</div>
            ) : (
              <>
                <p className={`text-[20px] ${public_sans.className}`}>{name}</p>
                <Avatar className="w-9 h-9 mx-2 text-xs hidden sm:block">
                  <AvatarImage src={src} />
                  <AvatarFallback>{nameInitials(name || 'na')}</AvatarFallback>
                </Avatar>
              </>
            )}
          </a>
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
