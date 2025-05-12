'use client';
import LeapButton from '@/components/ui/LeapButton';
import LeapTag from '@/components/ui/LeapTag';
import HostName from './HostName';
import ClassDetails from './ClassDetails';
import ClassDescription from './ClassDescription';

import { classModel, classPubModel, subThemeModel } from '@/types/classModels';
import { orgModel } from '@/types/orgModels';

import { Playfair_Display } from 'next/font/google';
import { Public_Sans } from 'next/font/google';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const playfair_display = Playfair_Display({ subsets: ['latin'] });
const public_sans = Public_Sans({ subsets: ['latin'] });

import { toast } from 'sonner';
import { useSaveEvent } from '@/hooks/useSaveEvent';

type ClassCardsProps = {
  event: classModel;
  orgs: orgModel;
  subtheme: subThemeModel;
  eventMedia: classPubModel;
};

export default function ClassCard({ event, orgs, subtheme, eventMedia }: ClassCardsProps) {
  const date = new Date(event.schedule);
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  };

  const formattedDate = date.toLocaleDateString('en-US', dateOptions);
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

  return (
    <>
      <div
        className={`flex justify-center md:flex-row flex-col items-center gap-6 text-white ${public_sans.className}`}
      >
        <img
          className="sm:h-[560px] h-[496px] w-[448px] bg-[#D9D9D9] border-none outline-none"
          src={eventMedia.pub_url}
        />
        <div className="flex flex-col ">
          <div className="flex sm:gap-4 gap-2 text-nowrap flex-wrap sm:text-sm text-xs font-medium text-black">
            <LeapTag className="bg-white">{event.venue || 'venue'}</LeapTag>
            <LeapTag className="bg-white">{subtheme.title || 'subtheme'}</LeapTag>
            <LeapTag className="bg-white">{'₱' + event.fee || 0}</LeapTag>
          </div>
          <h1
            className={`md:text-6xl text-5xl text-wrap font-bold my-4 text-white text-shadow-lg ${playfair_display.className}`}
          >
            {0 || 'R&Deploy Your Own Bot Workshop'}
          </h1>
          <div className="flex items-center sm:my-8 my-4">
            <div className="space-x-3 flex flex-wrap gap-y-1.5">
              <HostName src={orgs.org_logo || undefined}>{orgs.name}</HostName>
              {/* {orgs.map((org: orgModel, hostID: number) => (
                <HostName src={org.orgLogo || undefined} key={hostID}>
                  {org.name}
                </HostName>
              ))} */}
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
              {formattedDate}
            </ClassDetails>
            <ClassDetails
              className="text-white"
              icon={
                <AccessTimeOutlinedIcon
                  sx={{ fontSize: 24, color: 'white' }}
                ></AccessTimeOutlinedIcon>
              }
            >
              {formattedTime}
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
          <div className="my-4">
            <ClassDescription className="font-extrabold">
              {event.description ||
                'Whether youre a coding enthusiast or just curious about Discord bot development, this event is the perfect opportunity to explore your creativity, sharpen your technical skills, and build bots that can automate everyday tasks.'}
            </ClassDescription>
          </div>
          <div className="my-4 flex justify-between">
            <div className="flex items-center gap-2 flex-col sm:flex-row">
              <LeapButton
                disabled={event.registered_slots > 0}
                className={`${event.registered_slots > 0 ? 'bg-white/100' : 'bg-white/65'}  px-4 py-2 font-medium text-black hover:bg-white/80 transition duration-100`}
              >
                {event.registered_slots > 0 ? `Join Now - ₱${event.fee}` : 'Event is Full!'}
              </LeapButton>
              <p className="text-shadow-lg font-semibold">
                {event.registered_slots > 0
                  ? `Only ${event.registered_slots || 0} slots left!`
                  : null}
              </p>
            </div>
            <div className="flex items-center space-x-4.5">
              <div
                onClick={() => {
                  toast.success(`${event.title} link is saved to google calendar`, {
                    style: {
                      backgroundColor: 'white',
                      color: 'black',
                      borderRadius: '8px',
                      padding: '16px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      fontFamily: public_sans.style.fontFamily,
                    },
                  });
                  useSaveEvent(
                    event.title,
                    event.description,
                    orgs.name,
                    event.venue,
                    event.schedule
                  );
                }}
                role="button"
                className="hover:opacity-50 duration-100 transition"
              >
                <BookmarkBorderOutlinedIcon
                  sx={{ fontSize: 32, color: 'white' }}
                ></BookmarkBorderOutlinedIcon>
              </div>
              <div
                onClick={() => {
                  toast.success(`${event.title} link is ready to be shared`, {
                    style: {
                      backgroundColor: 'white',
                      color: 'black',
                      borderRadius: '8px',
                      padding: '16px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      fontFamily: public_sans.style.fontFamily,
                    },
                  });
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
