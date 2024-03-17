import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const SpotlightSec = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-slate-950 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Exercise Caution <br /> Many perplexing puzzles ahead.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Proceed with caution, as there are many mysteries ahead. Within the following contents lie numerous hidden secrets. Without careful attention and thorough investigation, you may overlook valuable insights. Navigate with care.
        </p>
      </div>
    </div>
  )
}

export default SpotlightSec