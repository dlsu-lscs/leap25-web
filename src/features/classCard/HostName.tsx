import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { nameInitials } from '@/lib/helpers';

interface HostProps {
  children?: ReactNode;
  src?: string;
}
export default function HostName({ children, src }: HostProps) {
  return (
    <>
      <div className="flex space-x-2 items-center">
        <Avatar className="w-7 h-7 text-xs">
          <AvatarImage src={src || undefined} />
          <AvatarFallback>{nameInitials(children)}</AvatarFallback>
        </Avatar>
        <p className="font-medium text-shadow-lg">{children}</p>
      </div>
    </>
  );
}
