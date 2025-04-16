interface ButtonProps {
  text?: string;
  className?: string;
}

export default function Button({ text, className }: ButtonProps) {
  return (
    <>
      <button
        className={`bg-[#D9D9D9] px-2 py-1 font-bold rounded-xs shadow-lg ${className}`}
      >
        {text}
      </button>
    </>
  );
}
