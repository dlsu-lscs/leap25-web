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
    <div>
      <img src={imgLink || undefined} className="h-[512px] w-[410px]" />
      <h1 className="text-3xl font-semibold w-[410px] mt-4">{children}</h1>
    </div>
  );
}
