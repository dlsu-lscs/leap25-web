import Image from 'next/image';
import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { nameInitials } from '@/lib/helpers';

interface HostProps {
  children?: ReactNode;
  src?: any;
  org_url?: any;
}
export default function HostName({ children, src, org_url }: HostProps) {
  return (
    <>
      {org_url ? (
        <>
          <a
            href={org_url}
            target="_blank"
            className="flex space-x-3.5 items-center hover:text-white/60"
          >
            <img src={src} className="w-7 h-7 inset-shadow-xs shadow-xl box-shadow-xl" alt="logo" />
            <p className="font-medium text-shadow-lg">{children}</p>
          </a>
        </>
      ) : (
        <>
          <div className="flex space-x-3.5 items-center">
            <img src={src} className="w-7 h-7 inset-shadow-xs shadow-xl box-shadow-xl" alt="logo" />
            <p className="font-medium text-shadow-lg">{children}</p>
          </div>
        </>
      )}
    </>
  );
}
