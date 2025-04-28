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

export default function ClassCard({
  //Class Model
  title: classTitle,
  description,
  venue,
  schedule,
  fee,
  code,
  registered_slots,
  maxSlots,
  //Sub Theme Model
  title: subThemeTitle,
  //Org Models
  name,
  orgLogo,
  //Class Pub Model
  pubURL,
}: classModel & subThemeModel & orgModel & classPubModel) {
  return (
    <>
      <div className={`flex space-x-5 text-white ${public_sans.className}`}>
        <div>
          <img
            className="h-[560px] w-[448px] bg-[#D9D9D9] border-none outline-none"
            src={pubURL || undefined}
          />
        </div>
        <div>
          <div className="space-x-3 text-sm font-medium text-black">
            <LeapTag>{venue || 'venue'}</LeapTag>
            <LeapTag>{subThemeTitle || 'sub theme'}</LeapTag>
            <LeapTag>Tag Here</LeapTag>
          </div>
          <h1
            className={`text-8xl font-bold my-4 w-[75vh] text-white text-shadow-lg ${playfair_display.className}`}
          >
            {classTitle || 'R&Deploy Your Own Bot Workshop'}
          </h1>
          <div className="flex items-center my-8">
            <div className="space-x-2.5 flex flex-wrap w-[75vh] gap-y-1.5">
              <HostName src={orgLogo || undefined}>{name || 'Org Name'}</HostName>
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
              Wednesday, June 26, 2025
            </ClassDetails>
            <ClassDetails
              className="text-white"
              icon={
                <AccessTimeOutlinedIcon
                  sx={{ fontSize: 32, color: 'white' }}
                ></AccessTimeOutlinedIcon>
              }
            >
              1:00 PM - 3:30 PM
            </ClassDetails>
            <ClassDetails
              className="text-white"
              icon={
                <LocationOnOutlinedIcon
                  sx={{ fontSize: 32, color: 'white' }}
                ></LocationOnOutlinedIcon>
              }
            >
              {venue || 'venue'}
            </ClassDetails>
          </div>
          <div className="my-4 w-[70vh]">
            <ClassDescription className="font-extrabold">
              {description ||
                'Whether youre a coding enthusiast or just curious about Discord bot development, this event is the perfect opportunity to explore your creativity, sharpen your technical skills, and build bots that can automate everyday tasks.'}
            </ClassDescription>
          </div>
          <div className="my-6 flex justify-between">
            <div className="flex items-center space-x-3">
              <LeapButton className="bg-[#ADADAD] px-4 py-2 font-medium text-black">
                Join Now - Free
              </LeapButton>
              <p className="text-shadow-lg font-semibold">
                Only {registered_slots || 0} slots left!
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
