import { ReactNode } from 'react'

interface ButtonProps {
  children?: ReactNode
  className?: string
}

/**
 *
 * @param row2 (boolean) determines if the carousel will have 2 rows
 * @param itemsToShow array of items to be shown in the carousel, can be a div
 * @returns
 */
export default function LeapButton({ children, className }: ButtonProps) {
  return (
    <>
      <button
        className={`bg-[#D9D9D9] px-2 py-1 rounded-xs shadow-lg ${className}`}
      >
        {children}
      </button>
    </>
  )
}
