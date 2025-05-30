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
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { nameInitials } from '@/lib/helpers';
import { signOut, useSession } from 'next-auth/react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useSetSearchEvent } from '@/hooks/useSearchEvent';
import { ScrollArea } from '../ui/scroll-area';
import BookmarkedEvents from '@/features/bookmark/BookmarkedEvents';
import Bookmarked from '@/features/bookmark/Bookmarked';
import Link from 'next/link';

export default function ProfileCard({ className }: { className?: string }) {
  const [showMobileSearchResults, setShowMobileSearchResults] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { data: session, status } = useSession();
  const { event: searchedEvents } = useSetSearchEvent(searchValue);
  return (
    <div className={className}>
      <Sheet modal={false}>
        <SheetTrigger className="sm:hidden block">
          <div
            className="w-10 h-10 rounded-full p-[2px]"
            style={{
              background: 'linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73)',
            }}
            onClick={() => {
              // Reset mobile search when opening the sheet
              setShowMobileSearchResults(false);
            }}
          >
            <Avatar className="w-full h-full text-xs bg-black">
              <AvatarImage src={session?.user?.image?.toString()} className="rounded-full" />
              <AvatarFallback className="bg-black text-[#FBBC05] rounded-full">
                {session?.user?.email?.toUpperCase().slice(0, 2) || nameInitials('user')}
              </AvatarFallback>
            </Avatar>
          </div>
        </SheetTrigger>
        <SheetContent className="bg-black text-white border-none overflow-hidden">
          <HoverCard open={showMobileSearchResults} onOpenChange={setShowMobileSearchResults}>
            <HoverCardTrigger asChild>
              <div
                className="mt-10 p-2 rounded-full flex items-center transition-all duration-500 ease-in-out mx-2 cursor-pointer"
                style={{
                  background:
                    'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
                  border: '2px solid transparent',
                }}
                onClick={() => {
                  // Only toggle on explicit click
                  if (!showMobileSearchResults) {
                    setShowMobileSearchResults(true);
                  }
                }}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className={cn(
                    'mobile-search-input bg-transparent outline-none text-[#FBBC05] placeholder:text-[#FBBC05]/50 transition-all duration-300 ease-in-out px-2 h-6',
                    'w-full opacity-100 mr-2'
                  )}
                  onFocus={(e) => {
                    e.stopPropagation();
                    setShowMobileSearchResults(true);
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onBlur={(e) => {
                    e.stopPropagation();
                  }}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  autoFocus={false}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <Image src={'/dropdown/search.svg'} alt="search" width={24} height={24}></Image>
              </div>
            </HoverCardTrigger>

            <HoverCardContent
              className="w-[100vw] p-1 bg-black"
              align="center"
              side="bottom"
              sideOffset={15}
              style={{
                background:
                  'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
                border: '2px solid transparent',
                maxHeight: '60vh',
                overflow: 'hidden',
              }}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
              onInteractOutside={(e) => {
                // Prevent the hovercard from closing when clicking inside the sheet
                if (e.target instanceof Element && e.target.closest('[data-sheet-content]')) {
                  e.preventDefault();
                }
              }}
              forceMount
            >
              <div
                className="bg-black w-full text-[#FBBC05]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onPointerDown={(e) => {
                  // Prevent bubbling to ensure HoverCard stays open
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

          <SheetTitle className="px-4 flex items-center gap-2 justify-center border-b-2 border-[#A67C00] pb-4">
            <div
              className="w-10 h-10 rounded-full p-[2px]"
              style={{
                background:
                  'linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73)',
              }}
            >
              <Avatar className="w-9 h-9 text-xs">
                <AvatarImage src={session?.user?.image?.toString()} className="rounded-full" />
                <AvatarFallback className="bg-black text-[#FBBC05] rounded-full">
                  {session?.user?.email?.toUpperCase().slice(0, 2) || nameInitials('user')}
                </AvatarFallback>
              </Avatar>
            </div>
            <span className="font-playfair text-lg text-[#FBBC05]">
              Welcome, {session?.user?.name}
            </span>
          </SheetTitle>
          <div className="flex flex-col gap-4 px-4 font-playfair font-bold text-[#98C10E]">
            <div className="flex text-lg">
              <Bookmarked variant="mobile" />
            </div>
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
            <div
              role="button"
              className="flex text-lg"
              onClick={() => {
                signOut({ callbackUrl: '/login', redirect: true });
              }}
            >
              <Image
                src={'/dropdown/logout.svg'}
                alt="logout"
                width={28}
                height={28}
                className="mr-3"
              ></Image>
              Log Out
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger className="hidden sm:block">
          <div
            className="w-10 h-10 rounded-full p-[2px]"
            style={{
              background: 'linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73)',
            }}
          >
            <Avatar className="w-full h-full text-xs">
              <AvatarImage src={session?.user?.image?.toString()} className="rounded-full" />
              <AvatarFallback className="bg-black text-[#FBBC05] rounded-full">
                {session?.user?.email?.toUpperCase().slice(0, 2) || nameInitials('user')}
              </AvatarFallback>
            </Avatar>
          </div>
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
            {' '}
            <DropdownMenuLabel className="font-playfair text-xl flex items-center gap-4 text-[#FBBC05]">
              <div
                className="w-10 h-10 rounded-full p-[2px]"
                style={{
                  background:
                    'linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73)',
                }}
              >
                <Avatar className="w-9 h-9 text-xs">
                  <AvatarImage src={session?.user?.image?.toString()} className="rounded-full" />
                  <AvatarFallback className="bg-black text-[#FBBC05] rounded-full">
                    {session?.user?.email?.toUpperCase().slice(0, 2) || nameInitials('user')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <span className="font-playfair text-xl font-bold text-[#FBBC05]">
                Welcome, {session?.user?.name}
              </span>
            </DropdownMenuLabel>{' '}
            <DropdownMenuSeparator className="bg-[#B38B18]" />
            <DropdownMenuGroup className="p-2 font-playfair font-bold text-base">
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
                <div
                  role="button"
                  className="flex text-lg"
                  onClick={() => {
                    signOut({ callbackUrl: '/login', redirect: true });
                  }}
                >
                  <Image
                    src={'/dropdown/logout.svg'}
                    alt="logout"
                    width={28}
                    height={28}
                    className="mr-3"
                  ></Image>
                  Log Out
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
