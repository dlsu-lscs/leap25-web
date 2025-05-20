'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { nameInitials } from '@/lib/helpers';
import { Public_Sans } from 'next/font/google';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import dynamic from 'next/dynamic';
import Link from 'next/link';

const ChevronLeftOutlinedIcon = dynamic(() => import('@mui/icons-material/ChevronLeftOutlined'), {
  ssr: false,
});

interface NavbarProps {
  name?: string;
  src?: string;
  className?: string;
}

const public_sans = Public_Sans({ subsets: ['latin'] });

export default function Navbar({ className, src, name }: NavbarProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  return (
    <div
      className={`bg-black/0.2 text-white min-w-screen flex justify-between sm:px-8 px-4 py-5  ${className}`}
    >
      <div className="flex items-center text-2xl space-x-1.5">
        <a
          href="./"
          className="flex items-center space-x-1 hover:opacity-50 transition duration-50"
        >
          <ChevronLeftOutlinedIcon sx={{ fontSize: 48 }} role="button" />
          {name == undefined ? (
            <div className={`sm:text-[20px] text-base ${public_sans.className}`}>Back to Map</div>
          ) : (
            <>
              <p className={`sm:text-[20px] text-base ${public_sans.className}`}>{name}</p>
              <Avatar className="w-9 h-9 mx-2 text-xs hidden sm:block">
                <AvatarImage src={src} />
                <AvatarFallback>{nameInitials(name || 'na')}</AvatarFallback>
              </Avatar>
            </>
          )}
        </a>
      </div>
      <div>
        <Sheet>
          <SheetTrigger className="sm:hidden block">
            <Avatar className="w-10 h-10 text-xs text-black">
              <AvatarImage src={session?.user?.image?.toString()} />
              <AvatarFallback>
                {session?.user?.email?.toUpperCase().slice(0, 2) || nameInitials('user')}
              </AvatarFallback>
            </Avatar>
          </SheetTrigger>
          <SheetContent className="bg-black text-white border-none">
            <SheetTitle className="px-4 flex items-center gap-2 mt-10 justify-center border-b-2 border-[#A67C00] pb-4">
              <Avatar className="w-10 h-10 text-xs font-playfair !text-[#FBBC05]">
                <AvatarImage src={session?.user?.image?.toString()} />
                <AvatarFallback>
                  {session?.user?.email?.toUpperCase().slice(0, 2) || nameInitials('user')}
                </AvatarFallback>
              </Avatar>
              <span className="font-playfair text-lg text-[#FBBC05]">
                Welcome, {session?.user?.name}
              </span>
            </SheetTitle>
            <div className="flex flex-col gap-4 px-4 font-playfair font-bold text-[#98C10E]">
              <Link href={'/bookmark'} className="flex text-lg">
                <Image
                  src={'/dropdown/bookmark.svg'}
                  alt="Bookmark"
                  width={28}
                  height={28}
                  className="mr-3"
                />
                Bookmark
              </Link>
              <Link href={'/faq'} className="flex text-lg">
                <Image
                  src={'/dropdown/faq.svg'}
                  alt="faq"
                  width={28}
                  height={28}
                  className="mr-3"
                ></Image>
                Frequently Asked Questions
              </Link>
              <Link href={'/leap'} className="flex text-lg">
                <Image
                  src={'/dropdown/leap.svg'}
                  alt="leap"
                  width={28}
                  height={28}
                  className="mr-3"
                ></Image>
                About LEAP 2025
              </Link>
              <Link href={'/lscs'} className="flex text-lg">
                <Image
                  src={'/dropdown/lscs.svg'}
                  alt="lscs"
                  width={28}
                  height={28}
                  className="mr-3"
                ></Image>
                La Salle Computer Society
              </Link>
              <Link href={'/logout'} className="flex text-lg">
                <Image
                  src={'/dropdown/logout.svg'}
                  alt="logout"
                  width={28}
                  height={28}
                  className="mr-3"
                ></Image>
                Log Out
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger className="hidden sm:block">
            <Avatar className="w-10 h-10 text-xs text-black">
              <AvatarImage src={session?.user?.image?.toString()} />
              <AvatarFallback>
                {session?.user?.email?.toUpperCase().slice(0, 2) || nameInitials('user')}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            alignOffset={20}
            className="hidden sm:block w-72 bg-black text-[#98C10E] p-[1px] rounded-md overflow-hidden"
            style={{
              background:
                'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
              border: '2px solid transparent',
            }}
          >
            <div className="bg-black rounded-sm w-full">
              <DropdownMenuLabel className="font-playfair text-xl flex items-center gap-4 text-[#FBBC05]">
                <Avatar className="w-10 h-10 text-xs text-black">
                  <AvatarImage src={session?.user?.image?.toString()} />
                  <AvatarFallback>
                    {session?.user?.email?.toUpperCase().slice(0, 2) || nameInitials('user')}
                  </AvatarFallback>
                </Avatar>
                <span className="font-playfair text-xl font-bold text-[#FBBC05]">
                  Welcome, {session?.user?.name}
                </span>
              </DropdownMenuLabel>{' '}
              <DropdownMenuSeparator className="bg-[#B38B18]" />
              <DropdownMenuGroup className="p-2 font-playfair font-bold text-base">
                <DropdownMenuItem>
                  <Link href={'/bookmark'} className="flex text-lg">
                    <Image
                      src={'/dropdown/bookmark.svg'}
                      alt="Bookmark"
                      width={28}
                      height={28}
                      className="mr-3"
                    />
                    Bookmark
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={'/faq'} className="flex text-lg">
                    <Image
                      src={'/dropdown/faq.svg'}
                      alt="faq"
                      width={28}
                      height={28}
                      className="mr-3"
                    ></Image>
                    Frequently Asked Questions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={'/leap'} className="flex text-lg">
                    <Image
                      src={'/dropdown/leap.svg'}
                      alt="leap"
                      width={28}
                      height={28}
                      className="mr-3"
                    ></Image>
                    About LEAP 2025
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={'/lscs'} className="flex text-lg">
                    <Image
                      src={'/dropdown/lscs.svg'}
                      alt="lscs"
                      width={28}
                      height={28}
                      className="mr-3"
                    ></Image>
                    La Salle Computer Society
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={'/logout'} className="flex text-lg">
                    <Image
                      src={'/dropdown/logout.svg'}
                      alt="logout"
                      width={28}
                      height={28}
                      className="mr-3"
                    ></Image>
                    Log Out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
