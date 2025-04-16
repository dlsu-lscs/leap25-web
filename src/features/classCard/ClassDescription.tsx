interface ClassDescriptionProps {
  description: string;
}

export default function ClassDescription({
  description,
}: ClassDescriptionProps) {
  return (
    <>
      <div className="flex items-center">
        <div className="bg-[#000000] w-2 h-20 drop-shadow-xl"></div>
        <p className="pl-4 text-shadow-xs">
          {description ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        </p>
      </div>
    </>
  );
}
