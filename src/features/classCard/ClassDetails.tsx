interface ClassDetailsProps {
  details: string;
}
export default function ClassDetails({ details }: ClassDetailsProps) {
  return (
    <>
      <div className="flex space-x-2">
        <div className="bg-[#ADADAD] w-6 h-6 rounded-xs"></div>
        <p className="font-medium text-shadow-xl">{details || "details"}</p>
      </div>
    </>
  );
}
