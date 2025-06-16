import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const GroupsIcon = dynamic(() => import('@mui/icons-material/Groups'), { ssr: false });

interface HostProps {
  children?: ReactNode;
  src?: any;
  org_url?: any;
}
export default function HostName({ children, src, org_url }: HostProps) {
  console.log(org_url);
  return (
    <>
      {org_url ? (
        <>
          <a
            href={org_url}
            target="_blank"
            className="flex space-x-2 items-center cursor-pointer px-2 py-1 rounded-md bg-white/02 hover:bg-white/20 transition duration-200"
          >
            {src ? (
              <img
                src={src}
                className="w-7 h-7 inset-shadow-xs shadow-xl box-shadow-xl"
                alt="logo"
              />
            ) : (
              <GroupsIcon sx={{ fontSize: 24, color: 'white' }} />
            )}
            <p className="font-semibold text-amber-300 text-shadow-lg drop-shadow-md flex items-center space-x-1">
              {children}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-4 h-4 opacity-80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5M4.5 19.5L13.5 10.5"
                />
              </svg>
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
