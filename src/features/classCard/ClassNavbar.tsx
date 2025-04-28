'use client';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
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
          <ChevronLeftOutlinedIcon sx={{ fontSize: 48 }}></ChevronLeftOutlinedIcon>
          <div>{subtheme || 'Sub Theme'}</div>
          <Avatar className="w-8 h-8 mx-2 text-xs">
            <AvatarImage src={src || undefined} />
            <AvatarFallback>{nameInitials(subtheme || 'na')}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <AccountCircleOutlinedIcon sx={{ fontSize: 48 }}></AccountCircleOutlinedIcon>
        </div>
      </div>
    </>
  );
}
