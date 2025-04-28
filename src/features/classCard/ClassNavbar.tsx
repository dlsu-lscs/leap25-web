'use client';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { nameInitials } from '@/lib/helpers';

interface ClassNavbarProps {
  subtheme: string;
  className?: string;
  src: string;
}

export default function ClassNavbar({ subtheme, className, src }: ClassNavbarProps) {
  return (
    <>
      <div className={`bg-black text-white min-w-screen flex justify-between p-6  ${className}`}>
        <div className="flex items-center text-2xl space-x-1.5">
          <ChevronLeftIcon className="w-10 h-10"></ChevronLeftIcon>
          <div>{subtheme || 'Sub Theme'}</div>
          <Avatar className="w-8 h-8 mx-2 text-xs">
            <AvatarImage src={src || undefined} />
            <AvatarFallback>{nameInitials(subtheme || 'na')}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <UserIcon className="w-10 h-10"></UserIcon>
        </div>
      </div>
    </>
  );
}
