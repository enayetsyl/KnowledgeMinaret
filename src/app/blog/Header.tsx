'use client'
import { toast, Toaster } from "sonner";
import { BackgroundBeams } from '@/components/ui/BackgroundBeams'
import { ButtonsCard } from '@/components/ui/tailwindcss-buttons'
import React, { useState } from 'react'

const Header = () => {
  const [email, setEmail] = useState([])

  const handleClick = () => {
    if(!email.length){
      toast.error('Please enter an email.')
      return
    }
    toast.success("You email is added to our list.");
    setEmail([])
  }

  const handleChange = (event:any) => {
    setEmail(event.target.value);
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Toaster position="top-center" />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-3xl md:text-5xl lg:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Subscribe to our Newsletter
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm md:text-base lg:text-xl  text-center relative z-10">
          If you want to get regular email update regarding various islamic lecture video, blog, halaka schedule, scholar information and other islamic information then subscribe to our newletter option.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 px-2 py-2"
          onChange={handleChange}
          value={email}
        />
        <ButtonsCard>

        <button 
        onClick={handleClick}
        className=" mt-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
        Subscribe
      </button>
        </ButtonsCard>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default Header