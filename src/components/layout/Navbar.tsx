'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { nameInitials } from '@/lib/helpers';
import { Public_Sans } from 'next/font/google';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
import Bookmarked from '@/features/bookmark/Bookmarked';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ScrollArea } from '../ui/scroll-area';
import BookmarkedEvents from '@/features/bookmark/BookmarkedEvents';
import { getEventBySearch } from '@/services/eventService';
import { useSetSearchEvent } from '@/hooks/useSearchEvent';
import ProfileCard from './Profile';

const ChevronLeftOutlinedIcon = dynamic(() => import('@mui/icons-material/ChevronLeftOutlined'), {
  ssr: false,
});

interface NavbarProps {
  name?: string;
  src?: string;
  className?: string;
  variant?: string;
}

const public_sans = Public_Sans({ subsets: ['latin'] });

export default function Navbar({ className, src, name, variant }: NavbarProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { event: searchedEvents } = useSetSearchEvent(searchValue);

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
        {variant === 'non-map' ? (
          <a
            onClick={() => router.back()}
            className="flex items-center space-x-1 hover:opacity-50 transition duration-50"
          >
            <ChevronLeftOutlinedIcon sx={{ fontSize: 48 }} role="button" />
            <div className={`sm:text-[20px] text-base ${public_sans.className}`}>Go Back</div>
          </a>
        ) : variant === 'map' ? (
          <a
            href="./"
            className="flex items-center space-x-1 hover:opacity-50 transition duration-50"
          >
            <ChevronLeftOutlinedIcon sx={{ fontSize: 48 }} role="button" />
            <div className={`sm:text-[20px] text-base ${public_sans.className}`}>Back to Map</div>
          </a>
        ) : name === undefined ? (
          <>
            <a
              onClick={() => router.back()}
              className="flex items-center space-x-1 hover:opacity-50 transition duration-50"
            >
              <ChevronLeftOutlinedIcon sx={{ fontSize: 48 }} role="button" />
              <div className={`sm:text-[20px] text-base ${public_sans.className}`}>Go Back</div>
            </a>
          </>
        ) : (
          <>
            <a
              href="./"
              className="flex items-center space-x-1 hover:opacity-50 transition duration-50"
            >
              <ChevronLeftOutlinedIcon sx={{ fontSize: 48 }} role="button" />
              <p className={`sm:text-[20px] text-base ${public_sans.className}`}>{name}</p>
              <div
                className="w-10 h-10 mx-2 hidden sm:block rounded-full p-[2px]"
                style={{
                  background:
                    'linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73)',
                }}
              >
                <Avatar className="w-full h-full text-xs">
                  <AvatarImage src={src} className="rounded-full" />
                  <AvatarFallback className="bg-black text-[#FBBC05] rounded-full">
                    {nameInitials(name)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </a>
          </>
        )}
      </div>{' '}
      <div className="flex items-center gap-4">
        <div className="hidden sm:inline">
          <Bookmarked />
        </div>
        <div
          onClick={() => {
            if (!showSearch) setShowSearch(true);
          }}
          className="hidden px-2 py-[6px] rounded-full sm:flex items-center transition-all duration-500 ease-in-out"
          style={{
            background:
              'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
            border: '2px solid transparent',
          }}
        >
          <HoverCard open={showSearchResults}>
            <HoverCardTrigger asChild>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className={cn(
                    'search-input bg-transparent outline-none text-[#FBBC05] placeholder:text-[#FBBC05]/50 transition-all duration-300 ease-in-out px-2 h-6',
                    showSearch ? 'w-72 opacity-100 mr-2' : 'w-0 opacity-0 p-0 m-0'
                  )}
                  onFocus={() => {
                    setShowSearch(true);
                    setShowSearchResults(true);
                  }}
                  onBlur={() => {
                    // Add a slight delay to allow clicking on search results
                    setTimeout(() => {
                      setShowSearchResults(false);
                    }, 200);
                  }}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    const newState = !showSearch;
                    setShowSearch(newState);
                    setShowSearchResults(newState);
                  }}
                >
                  <Image src={'/dropdown/search.svg'} alt="search" width={20} height={20}></Image>
                </button>
              </div>
            </HoverCardTrigger>
            <HoverCardContent
              className="w-96 p-1 bg-black"
              align="center"
              side="bottom"
              sideOffset={15}
              style={{
                background:
                  'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
                border: '2px solid transparent',
                maxHeight: '70vh',
                overflow: 'hidden',
              }}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
            >
              <div
                className="bg-black rounded-sm w-full text-[#FBBC05]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ScrollArea className="h-[500px]">
                  <div className="flex flex-col gap-4 p-4">
                    {searchedEvents ? (
                      searchedEvents.map((searchedEvent, index) => {
                        return (
                          <BookmarkedEvents
                            key={index}
                            event_id={searchedEvent.id}
                            variant="search"
                          />
                        );
                      })
                    ) : (
                      <>
                        <div className="font-public-sans text-white">No searched classes</div>
                      </>
                    )}
                  </div>
                </ScrollArea>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <ProfileCard></ProfileCard>
      </div>
    </div>
  );
}
