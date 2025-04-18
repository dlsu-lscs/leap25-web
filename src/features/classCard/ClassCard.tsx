import { Separator } from '@/components/ui/separator';
import LeapButton from '@/components/ui/LeapButton';
import LeapTag from '@/components/ui/LeapTag';
import HostName from './HostName';
import ClassDetails from './ClassDetails';
import ClassDescription from './ClassDescription';

import { classModel, classPubModel, subThemeModel } from '@/types/classModels';
import { orgModel } from '@/types/orgModels';

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
      <div className="flex space-x-5">
        <div>
          <img
            className="h-[550px] min-w-[500px] bg-[#D9D9D9] border-none outline-none"
            src={pubURL || undefined}
          />
        </div>
        <div>
          <div className="space-x-3 text-sm font-medium">
            <LeapTag>{venue || 'venue'}</LeapTag>
            <LeapTag>{subThemeTitle || 'sub theme'}</LeapTag>
            <LeapTag>Tag Here</LeapTag>
          </div>
          <h1 className="text-4xl font-bold my-4 w-[80vh]">{classTitle || 'Class Title'}</h1>
          <div className="flex items-center">
            <p className="font-medium mr-3">Hosted By</p>
            <div className="space-x-2.5 flex flex-wrap w-[75vh] gap-y-1.5">
              <HostName src={orgLogo || undefined}>{name || 'Org Name'}</HostName>
            </div>
          </div>
          <Separator className="bg-black drop-shadow-md my-4"></Separator>
          <div className="flex space-x-4">
            <ClassDetails>Wednesday, June 26, 2025</ClassDetails>
            <ClassDetails>1:00 PM - 3:30 PM</ClassDetails>
            <ClassDetails>{venue || 'venue'}</ClassDetails>
          </div>
          <div className="my-4 w-[70vh]">
            <ClassDescription>{description || 'Description'}</ClassDescription>
          </div>
          <div className="my-6 flex justify-between">
            <div className="flex items-center space-x-3">
              <LeapButton className="bg-[#ADADAD] px-4 py-2 font-medium">
                Join Now - Free
              </LeapButton>
              <p className="text-shadow-lg">Only {registered_slots || 0} slots left!</p>
            </div>
            <div className="flex items-center space-x-4.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
