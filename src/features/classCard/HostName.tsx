import Image from 'next/image';
import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { nameInitials } from '@/lib/helpers';

interface HostProps {
  children?: ReactNode;
  src?: any;
}
export default function HostName({ children, src }: HostProps) {
  return (
    <>
      <div className="flex space-x-3.5 items-center">
        <img src={src} className="w-7 h-7 inset-shadow-xs shadow-xl box-shadow-xl" alt="logo" />
        <p className="font-medium text-shadow-lg">{children}</p>
      </div>
    </>
  );
}
