'use client'

import { CustomCarousel } from '@/components/ui/LeapCarousel'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <CustomCarousel
        itemsToShow={Array.from({ length: 8 })}
        row2={true}
      ></CustomCarousel>
      hello this is the first step of the leap web
    </>
  )
}
