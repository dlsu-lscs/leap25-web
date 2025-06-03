'use client';
import LeapButton from '@/components/ui/LeapButton';
import LeapTag from '@/components/ui/LeapTag';
import HostName from './HostName';
import ClassDetails from './ClassDetails';
import ClassDescription from './ClassDescription';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

import { classModel, classPubModel, subThemeModel } from '@/types/classModels';
import { orgModel } from '@/types/orgModels';

import { Playfair_Display } from 'next/font/google';
import { Public_Sans } from 'next/font/google';

const playfair_display = Playfair_Display({ subsets: ['latin'] });
const public_sans = Public_Sans({ subsets: ['latin'] });

import { toast } from 'sonner';
import { registerEvent } from '@/services/registerService';
import { shareEvent } from '@/services/eventService';

import dynamic from 'next/dynamic';
import { formatSchedule } from '@/lib/helpers';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getUserByEmail } from '@/services/userService';
import { useSetUser } from '@/hooks/useSetUser';
import { deleteBookmark, postBookmark } from '@/services/bookmarkService';
import { useSetBookmark } from '@/hooks/useSetBookmarks';

const CalendarMonthOutlinedIcon = dynamic(
  () => import('@mui/icons-material/CalendarMonthOutlined'),
  { ssr: false }
);

const BookmarkIcon = dynamic(() => import('@mui/icons-material/Bookmark'), { ssr: false });

const AccessTimeOutlinedIcon = dynamic(() => import('@mui/icons-material/AccessTimeOutlined'), {
  ssr: false,
});

const LocationOnOutlinedIcon = dynamic(() => import('@mui/icons-material/LocationOnOutlined'), {
  ssr: false,
});

const BookmarkBorderOutlinedIcon = dynamic(
  () => import('@mui/icons-material/BookmarkBorderOutlined'),
  { ssr: false }
);

const ShareOutlinedIcon = dynamic(() => import('@mui/icons-material/ShareOutlined'), {
  ssr: false,
});

type ClassCardsProps = {
  event: classModel;
  orgs: orgModel[];
  subtheme: subThemeModel;
  eventMedia: classPubModel;
};

export default function ClassCard({ event, orgs, subtheme, eventMedia }: ClassCardsProps) {
  const { formattedDate: startDate, formattedTime: startTime } = formatSchedule(event.schedule);
  const { formattedDate: endDate, formattedTime: endTime } = formatSchedule(event.schedule_end);

  const { data: session } = useSession();
  const { user } = useSetUser(session);
  const { bookmarks } = useSetBookmark(user?.id);
  const [isBookmarked, setIsBookmarked] = useState<boolean>();

  useEffect(() => {
    if (bookmarks && event?.id) {
      setIsBookmarked(bookmarks?.some((bookmark) => bookmark.event_id === event.id));
    }
  }, [bookmarks, event]);

  const title = event?.title?.replace(/^LEAP 2025:\s*/i, '') ?? '';
  const price = event.fee > 0.0 ? '₱' + event.fee : 'Free';

  return (
    <>
      <div
        className={`flex justify-center lg:flex-row flex-col items-center gap-6  text-white ${public_sans.className}`}
      >
        <img
          className="aspect-[4/5] w-full max-w-[400px] min-w-[324px]  bg-[#D9D9D9] border-none outline-none object-cover"
          src={eventMedia.pub_url}
        />
        <div className="flex flex-col ">
          <div className="flex sm:gap-4 gap-2 text-nowrap flex-wrap sm:text-sm text-xs font-medium text-black">
            <LeapTag className="bg-white">{event.venue || 'venue'}</LeapTag>
            <LeapTag className="bg-white">{subtheme.title || 'subtheme'}</LeapTag>
            <LeapTag className="bg-white">{price}</LeapTag>
          </div>
          <h1
            className={`md:text-6xl text-5xl text-wrap font-bold my-4 text-white text-shadow-lg ${playfair_display.className}`}
          >
            {title || 'R&Deploy Your Own Bot Workshop'}
          </h1>
          <div className="flex items-center sm:my-8 my-4">
            <div className="space-x-3 flex flex-wrap gap-y-1.5">
              {orgs.map((org: orgModel, hostID: number) => (
                <HostName src={org.org_logo || undefined} key={hostID} org_url={org.org_url}>
                  {org.name}
                </HostName>
              ))}
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row">
            <ClassDetails
              className="text-white"
              icon={
                <CalendarMonthOutlinedIcon
                  sx={{ fontSize: 24, color: 'white' }}
                ></CalendarMonthOutlinedIcon>
              }
            >
              {startDate}
            </ClassDetails>
            <ClassDetails
              className="text-white"
              icon={
                <AccessTimeOutlinedIcon
                  sx={{ fontSize: 24, color: 'white' }}
                ></AccessTimeOutlinedIcon>
              }
            >
              {startTime} - {endTime}
            </ClassDetails>
            <ClassDetails
              className="text-white"
              icon={
                <LocationOnOutlinedIcon
                  sx={{ fontSize: 24, color: 'white' }}
                ></LocationOnOutlinedIcon>
              }
            >
              {event.venue || 'venue'}
            </ClassDetails>
          </div>
          <div className="my-4 lg:space-y-4 space-y-6">
            <ClassDescription className="font-extrabold">
              {event.description ||
                'Whether youre a coding enthusiast or just curious about Discord bot development, this event is the perfect opportunity to explore your creativity, sharpen your technical skills, and build bots that can automate everyday tasks.'}
            </ClassDescription>
            {event.is_bundle ? (
              <>
                <Alert className="bg-red-400/60 text-white font-public-sans border-none w-fit px-4 py-3 flex items-center gap-3 rounded-md">
                  <div className="flex items-center justify-center w-5 h-5">
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <AlertDescription className="text-white">
                    All members in the bundle must log in to this website at least once before
                    submitting registration.
                  </AlertDescription>
                </Alert>
              </>
            ) : null}
          </div>
          <div className="my-4 flex justify-between">
            <div className="flex items-center gap-2 flex-col sm:flex-row">
              <LeapButton
                onClick={() => {
                  registerEvent(
                    event.gforms_url ||
                      'https://docs.google.com/forms/d/e/1FAIpQLSf_lcAWFH0GLIeHjwB86jTW8Edc9mQDRBWf0pVBkNNy82iSlA/viewform'
                  );
                }}
                disabled={!(event.registered_slots < event.max_slots)}
                className={`${!(event.registered_slots < event.max_slots) ? 'bg-white/65' : 'bg-white/100'}  px-4 py-2 font-medium text-black hover:bg-white/80 transition duration-100`}
              >
                {event.registered_slots < event.max_slots
                  ? `Join Now - ${price}`
                  : 'Event is Full!'}
              </LeapButton>
              <p className="text-shadow-lg font-semibold">
                {event.registered_slots < event.max_slots
                  ? `Only ${event.max_slots - event.registered_slots || 0} slots left!`
                  : null}
              </p>
            </div>
            <div className="flex items-center space-x-4.5">
              {isBookmarked ? (
                <>
                  <div
                    role="button"
                    className="hover:opacity-50 duration-100 transition"
                    onClick={() => {
                      toast.success(`${event.title} is deleted as a bookmark`, {
                        style: {
                          backgroundColor: 'black',
                          color: 'white',
                          borderColor: 'white',
                          padding: '16px',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                          fontFamily: public_sans.style.fontFamily,
                        },
                      });
                      deleteBookmark(user?.id, event.id, process.env.NEXT_PUBLIC_LEAP_API);
                    }}
                  >
                    <BookmarkIcon sx={{ fontSize: 32, color: 'white' }} />
                  </div>
                </>
              ) : (
                <>
                  <div
                    role="button"
                    className="hover:opacity-50 duration-100 transition"
                    onClick={() => {
                      toast.success(`${event.title} is saved as a bookmark`, {
                        style: {
                          backgroundColor: 'black',
                          color: 'white',
                          borderColor: 'white',
                          padding: '16px',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                          fontFamily: public_sans.style.fontFamily,
                        },
                      });
                      postBookmark(user?.id, event.id, process.env.NEXT_PUBLIC_LEAP_API);
                    }}
                  >
                    <BookmarkBorderOutlinedIcon sx={{ fontSize: 32, color: 'white' }} />
                  </div>
                </>
              )}
              <div
                onClick={() => {
                  toast.success(`${event.title} link is ready to be shared`, {
                    style: {
                      backgroundColor: 'black',
                      color: 'white',
                      borderColor: 'white',
                      padding: '16px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      fontFamily: public_sans.style.fontFamily,
                    },
                  });
                  shareEvent();
                }}
                role="button"
                className="hover:opacity-50 duration-100 transition"
              >
                <ShareOutlinedIcon sx={{ fontSize: 32, color: 'white' }}></ShareOutlinedIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
