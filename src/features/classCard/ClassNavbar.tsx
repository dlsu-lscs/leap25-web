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
      <div
        className={`bg-black/75 bg-opacity-50 text-white min-w-screen flex justify-between px-8 py-5  ${className}`}
      >
        <div className="flex items-center text-2xl space-x-1.5">
          <div
            onClick={() => {
              history.back();
            }}
            className="hover:opacity-50 transition duration-50"
          >
            <ChevronLeftOutlinedIcon sx={{ fontSize: 48 }}></ChevronLeftOutlinedIcon>
          </div>
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
