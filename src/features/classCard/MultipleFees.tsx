import dynamic from 'next/dynamic';

const LocalActivityIcon = dynamic(() => import('@mui/icons-material/LocalActivity'), {
  ssr: false,
});

import ClassDetails from './ClassDetails';

type MultipleFeesProps = {
  code: String;
};

export default function MultipleFees({ code }: MultipleFeesProps) {
  if (code === 'S1207') {
    return (
      <div className="my-4 lg:space-y-2 space-y-6">
        <p className="font-bold">
          <LocalActivityIcon sx={{ fontSize: 24, color: 'white' }} className="mr-2" />
          Ticket Prices
        </p>
        <ClassDetails className="text-white">SVIP - Php 500.00</ClassDetails>
        <ClassDetails className="text-white">VIP - Php 450.00</ClassDetails>
        <ClassDetails className="text-white">Lower Box - Php 400.00</ClassDetails>
        <ClassDetails className="text-white">General Admission - Php 350.00</ClassDetails>
      </div>
    );
  } else if (code === 'S1128') {
    return (
      <div className="my-4 lg:space-y-2 space-y-6">
        <p className="font-bold">
          <LocalActivityIcon sx={{ fontSize: 24, color: 'white' }} className="mr-2" />
          Ticket Prices
        </p>
        <ClassDetails className="text-white">One Bingo Card - Php 80.00</ClassDetails>
        <ClassDetails className="text-white">Two Bingo Card - Php 100.00</ClassDetails>
        <ClassDetails className="text-white">Three Bingo Card- Php 150.00</ClassDetails>
      </div>
    );
  } else return null;
}
