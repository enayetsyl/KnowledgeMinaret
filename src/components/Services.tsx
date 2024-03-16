import Image from 'next/image';
import React from 'react'
import { Tabs } from './ui/tabs';
import Link from 'next/link';
import img from '../../public/download.jpg'
import {BackgroundBeams }from './ui/BackgroundBeams';

const Services = () => {
  const tabs = [
    {
      title: "Videos",
      value: "videos",
      content: (
       <Link href='/videos'>
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-gray-500">
          <p>Videos</p>
          <Image
          alt='videos'
          src={img}
          height={300}
          width={300}
          className='w-full h-[80%] rounded-2xl my-5'
          />
        </div>
       </Link>
      ),
    },
    {
      title: "Blog",
      value: "blog",
      content: (
        <Link href='blog'>
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-black">
          <p>Blog</p>
          <Image
          alt='videos'
          src={img}
          height={300}
          width={300}
          className='w-full h-[80%] rounded-2xl my-5'
          />
        </div>
        </Link>
      ),
    },
    {
      title: "Halaqa Timing",
      value: "halaqa",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-slate-500">
          <p>Halaqa Timing</p>
          <Image
          alt='videos'
          src={img}
          height={300}
          width={300}
          className='w-full h-[80%] rounded-2xl my-5'
          />
        </div>
      ),
    },
    {
      title: "Books",
      value: "books",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-600 to-black">
          <p>Books</p>
          <Image
          alt='videos'
          src={img}
          height={300}
          width={300}
          className='w-full h-[80%] rounded-2xl my-5'
          />
        </div>
      ),
    },
    {
      title: "Quiz",
      value: "quiz",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-stone-700 to-black">
          <p>Quiz</p>
          <Image
          alt='videos'
          src={img}
          height={300}
          width={300}
          className='w-full h-[85%] rounded-2xl my-5'
          />
        </div>
      ),
    },
  ];
  return (
   <>
   
    <div className=" relative h-[20rem] md:h-[40rem] [perspective:1000px] flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
    

  
   </>
  )
}

export default Services

