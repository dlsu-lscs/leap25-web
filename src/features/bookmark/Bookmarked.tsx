import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/Drawer';

import { Button } from '@/components/ui/button';

import { ScrollArea } from '@/components/ui/scroll-area';

import Image from 'next/image';
import BookmarkedEvents from './BookmarkedEvents';
import { getBookmarks } from '@/services/bookmarkService';

interface BookmarkProps {
  variant?: string;
  userId: number;
}

export default async function Bookmarked({ variant, userId }: BookmarkProps) {
  const bookmarks = await getBookmarks(userId);
  console.log(bookmarks);
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          {variant === 'mobile' ? (
            <>
              <div className="flex text-lg gap-4">
                <Image src="/dropdown/bookmark.svg" alt="Bookmark" width={28} height={28} />
                <div className="flex">Bookmark</div>
              </div>
            </>
          ) : (
            <>
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ease-in-out"
                style={{
                  background:
                    'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
                  border: '2px solid transparent',
                }}
              >
                <Image src="/dropdown/bookmark.svg" alt="Bookmark" width={28} height={28} />
              </div>
            </>
          )}
        </DrawerTrigger>
        <DrawerContent
          className="bg-[#161515] border-none"
          style={{
            background:
              'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
            border: '2px solid transparent',
          }}
        >
          <DrawerHeader className="text-white font-playfair">
            <div className="flex flex-col items-center justify-center mt-4">
              <DrawerTitle className="text-white text-[24px] sm:text-[36px] font-bold">
                BOOKMARK
              </DrawerTitle>
              <DrawerDescription className="text-white text[16px] sm:text-[12px]">
                SEE SAVED EVENTS HERE:
              </DrawerDescription>
            </div>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex flex-col items-center justify-center ">
              <ScrollArea className="h-[500px] sm:min-w-1/2 min-w-screen text-white p-4">
                <div className="flex flex-col gap-4">
                  <BookmarkedEvents />
                  <BookmarkedEvents />
                  <BookmarkedEvents />
                  <BookmarkedEvents />
                  <BookmarkedEvents />
                  <BookmarkedEvents />
                </div>
              </ScrollArea>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
