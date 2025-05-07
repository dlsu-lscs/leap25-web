import { Separator } from '@/components/ui/separator';
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

type ClassCardsProps = {
  event: classModel;
};

export default function ClassCard({ event }: ClassCardsProps) {
  console.log(event);
  const hostedBy = [<HostName />, <HostName />];
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
      <div className={`flex space-x-10 text-white ${public_sans.className}`}>
        <div>
          <img
            className="h-[560px] w-[448px] bg-[#D9D9D9] border-none outline-none"
            src={'/encrypt.jpg'}
          />
        </div>
        <div>
          <div className=" space-x-3 text-sm font-medium text-black">
            <LeapTag className="bg-white">{event.venue || 'venue'}</LeapTag>
            <LeapTag className="bg-white">{'sub theme'}</LeapTag>
            <LeapTag className="bg-white">{'₱' + event.fee || 0}</LeapTag>
          </div>
          <h1
            className={`text-[64px] font-bold my-4 w-[75vh] text-white text-shadow-lg ${playfair_display.className}`}
          >
            {event.title || 'R&Deploy Your Own Bot Workshop'}
          </h1>
          <div className="flex items-center my-8">
            <div className="space-x-3 flex flex-wrap w-[75vh] gap-y-1.5">
              {hostedBy.map((host, hostID) => (
                <HostName src={undefined} key={hostID}>
                  {'Org Name'}
                </HostName>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <ClassDetails
              className="text-white"
              icon={
                <CalendarMonthOutlinedIcon
                  sx={{ fontSize: 32, color: 'white' }}
                ></CalendarMonthOutlinedIcon>
              }
            >
              {formattedDate}
            </ClassDetails>
            <ClassDetails
              className="text-white"
              icon={
                <AccessTimeOutlinedIcon
                  sx={{ fontSize: 32, color: 'white' }}
                ></AccessTimeOutlinedIcon>
              }
            >
              {formattedTime}
            </ClassDetails>
            <ClassDetails
              className="text-white"
              icon={
                <LocationOnOutlinedIcon
                  sx={{ fontSize: 32, color: 'white' }}
                ></LocationOnOutlinedIcon>
              }
            >
              {event.venue || 'venue'}
            </ClassDetails>
          </div>
          <div className="my-4 w-[70vh]">
            <ClassDescription className="font-extrabold">
              {event.description ||
                'Whether youre a coding enthusiast or just curious about Discord bot development, this event is the perfect opportunity to explore your creativity, sharpen your technical skills, and build bots that can automate everyday tasks.'}
            </ClassDescription>
          </div>
          <div className="my-6 flex justify-between">
            <div className="flex items-center space-x-3">
              <LeapButton className="bg-white px-4 py-2 font-medium text-black">
                {event.registered_slots > 0 ? 'Join Now - Free' : 'Event is Full!'}
              </LeapButton>
              <p className="text-shadow-lg font-semibold">
                {event.registered_slots > 0
                  ? `Only ${event.registered_slots || 0} slots left!`
                  : null}
              </p>
            </div>
            <div className="flex items-center space-x-4.5">
              <BookmarkBorderOutlinedIcon
                sx={{ fontSize: 32, color: 'white' }}
              ></BookmarkBorderOutlinedIcon>
              <ShareOutlinedIcon sx={{ fontSize: 32, color: 'white' }}></ShareOutlinedIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
