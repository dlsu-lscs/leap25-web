/**
 *
 * @param imgLink
 * @returns
 */

interface classHighlightProps {
  imgLink: string;
  classTitle: string;
}

export default function ClassHighlight({ imgLink, classTitle }: classHighlightProps) {
  return (
    <div>
      <img src={imgLink || undefined} className="h-[512px] w-[410px]" />
      <h1 className="text-3xl font-semibold w-[410px] mt-4">{classTitle}</h1>
    </div>
  );
}
