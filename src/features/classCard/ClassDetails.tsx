import { ReactNode } from 'react'

interface ClassDetailsProps {
  children?: ReactNode
}
export default function ClassDetails({ children }: ClassDetailsProps) {
  return (
    <>
      <div className="flex space-x-2">
        <div className="bg-[#ADADAD] w-6 h-6 rounded-xs"></div>
        <p className="font-medium text-shadow-xl">{children}</p>
      </div>
    </>
  )
}
