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

import Image from 'next/image';

export default function BookmarkedEvents() {
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <div
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ease-in-out"
            style={{
              background:
                'linear-gradient(black, black) padding-box, linear-gradient(to right, #A67C00, #B38B18, #FFBF00, #FFCF40, #FFDC73) border-box',
              border: '2px solid transparent',
            }}
          >
            <Image src="/dropdown/bookmark.svg" alt="Bookmark" width={28} height={28} />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose></DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
