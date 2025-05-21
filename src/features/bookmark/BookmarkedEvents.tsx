'use client';
import dynamic from 'next/dynamic';

const PersonIcon = dynamic(() => import('@mui/icons-material/Person'), { ssr: false });
const CalendarViewIcon = dynamic(() => import('@mui/icons-material/CalendarViewDay'), {
  ssr: false,
});

export default function BookmarkedEvents() {
  return (
    <>
      <div className="font-playfair bg-gray-500 p-4 sm:p-6 rounded-full hover:bg-black/60 duration-200 transition ease-in-out">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <div className="font-semibold text-[16px] sm:text-[24px]">{'Event Title'}</div>
          <div className="text-[12px] sm:text-[16px] flex justify-between gap-4">
            <div className="flex items-center gap-1">
              <PersonIcon />
              <p>{20} slots left</p>
            </div>
            <div className="flex items-center gap-1">
              <CalendarViewIcon />
              <p>{'September 9, 2025'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
