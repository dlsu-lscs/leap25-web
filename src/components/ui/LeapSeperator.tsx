interface LeapSeperatorProps {
  variant?: string;
}

/**
 * @param variants Variants Available: none, diamond, circle
 * @returns
 */
export default function LeapSeperator({ variant }: LeapSeperatorProps) {
  return (
    <>
      <div className="flex items-center">
        {variant == 'diamond' ? (
          <>
            <div className=" absolute -translate-x-3 w-4 h-4 border-white border-2 rotate-45"></div>
            <div className=" w-3 h-3   border-white border-2 rotate-45"></div>
          </>
        ) : (
          <>
            <div className="bg-white w-2 h-2 rounded-full"></div>
          </>
        )}
        <div className="bg-gradient-to-r from-white to-transparent h-[0.2vh] w-[100vh]"></div>
      </div>
    </>
  );
}
