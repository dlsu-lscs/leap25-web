import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const GroupsIcon = dynamic(() => import('@mui/icons-material/Groups'), { ssr: false });

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
          <a href={org_url} target="_blank" className="flex space-x-2 items-cente">
            {src ? (
              <img
                src={src}
                className="w-7 h-7 inset-shadow-xs shadow-xl box-shadow-xl"
                alt="logo"
              />
            ) : (
              <GroupsIcon sx={{ fontSize: 24, color: 'white' }}></GroupsIcon>
            )}
            <p className="font-medium text-shadow-lg drop-shadow-amber-300 drop-shadow-xl hover:text-white/60">
              {children}
            </p>
          </a>
        </>
      ) : (
        <>
          <div className="flex space-x-2 items-center">
            {src ? (
              <img
                src={src}
                className="w-7 h-7 inset-shadow-xs shadow-xl box-shadow-xl"
                alt="logo"
              />
            ) : (
              <GroupsIcon sx={{ fontSize: 24, color: 'white' }}></GroupsIcon>
            )}
            <p className="font-medium text-shadow-lg">{children}</p>
          </div>
        </>
      )}
    </>
  );
}
