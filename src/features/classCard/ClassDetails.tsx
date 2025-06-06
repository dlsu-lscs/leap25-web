import { ReactNode } from 'react';

interface ClassDetailsProps {
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
}
export default function ClassDetails({ children, icon, className }: ClassDetailsProps) {
  return (
    <>
      <div className={`flex space-x-2 items-center ${className}`}>
        {icon}
        <p className="font-medium text-shadow-xl">{children}</p>
      </div>
    </>
  );
}
