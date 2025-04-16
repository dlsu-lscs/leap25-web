import { ReactNode } from 'react'

interface HostProps {
  children?: ReactNode
  url: string
}
export default function HostName({ children, url }: HostProps) {
  return (
    <>
      <div className="flex space-x-2">
        <div className="bg-[#D9D9D9] rounded-[100vw] w-6 h-6 drop-shadow-xl/12"></div>
        <p className="font-medium text-shadow-lg">{children}</p>
      </div>
    </>
  )
}
