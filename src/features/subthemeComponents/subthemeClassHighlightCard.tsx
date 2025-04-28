/**
 *
 * @param imgLink
 * @returns
 */

import { ReactNode } from 'react';

interface classHighlightProps {
  imgLink: string;
  children: ReactNode;
}

export default function ClassHighlight({ imgLink, children }: classHighlightProps) {
  return (
    <div className="flex sm:flex-col flex-col-reverse sm:w-[410px]  w-[290px]">
      <img src={imgLink || undefined} className="h-[360px] sm:h-[512px]" />
      <h1 className="text-[32px] font-semibold my-4 text-center sm:text-left">{children}</h1>
    </div>
  );
}
