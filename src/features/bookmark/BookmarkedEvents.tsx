'use client';
import { useSetEventMedia } from '@/hooks/useSetEventMedia';
import { useSetEvent } from '@/hooks/useSetEvents';
import { useSetSubtheme } from '@/hooks/useSetSubtheme';
import { getSubThemeLink } from '@/services/subthemeService';
import { classModel, classPubModel, subThemeModel } from '@/types/classModels';
import { url } from 'inspector';
import dynamic from 'next/dynamic';

const PersonIcon = dynamic(() => import('@mui/icons-material/Person'), { ssr: false });
const CalendarViewIcon = dynamic(() => import('@mui/icons-material/CalendarViewDay'), {
  ssr: false,
});

interface BookmarkedEventsProps {
  event_id: any;
  variant?: string;
}

export default function BookmarkedEvents({ event_id, variant }: BookmarkedEventsProps) {
  const { event }: { event: classModel | undefined } = useSetEvent(event_id);
  const { eventMedia }: { eventMedia: classPubModel | undefined } = useSetEventMedia(event_id);
  const { subtheme }: { subtheme: subThemeModel | undefined } = useSetSubtheme(event?.subtheme_id);
  const subthemeLink = getSubThemeLink(subtheme?.title);
  return (
    <>
      <a
        href={`/${subthemeLink}/${event?.slug}`}
        className={
          variant === 'search'
            ? 'font-playfair p-4 sm:p-6 rounded-lg bg-cover bg-center  bg-blend-multiply object-cover bg-black/70 hover:bg-black/90 duration-200 transition ease-in-out'
            : 'font-playfair p-4 sm:p-6 rounded-full bg-cover bg-center  bg-blend-multiply object-cover bg-black/70 hover:bg-black/90 duration-200 transition ease-in-out'
        }
        style={{ backgroundImage: `url(${eventMedia?.pub_url})` }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <div className="font-semibold text-[16px] sm:text-[24px]">
            {event?.title || 'Event Title'}
          </div>
          <div className="text-[12px] sm:text-[16px] flex justify-between gap-4">
            <div className="flex items-center gap-1">
              <PersonIcon />
              <p>{event?.registered_slots} slots left</p>
            </div>
            <div className="flex items-center gap-1">
              <CalendarViewIcon />
              <p>{'September 9, 2025'}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
