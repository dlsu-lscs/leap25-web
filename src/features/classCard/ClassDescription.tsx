import { ReactNode } from 'react'

interface ClassDescriptionProps {
  children?: ReactNode
}

export default function ClassDescription({ children }: ClassDescriptionProps) {
  return (
    <>
      <div className="flex items-center">
        <div className="bg-[#000000] w-1 h-20 drop-shadow-xl"></div>
        <p className="pl-4 text-shadow-xs">{children}</p>
      </div>
    </>
  )
}
