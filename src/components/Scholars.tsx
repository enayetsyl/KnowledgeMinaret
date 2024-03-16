import React from 'react'
import { TypewriterEffect } from './ui/typewriter-effect';
import { Meteors } from './ui/meteors';
import { HoverEffect } from './card-hover-effect';

const Scholars = () => {
  // type Scholor = {
  //   name : string
  //   about: string
  // }
  const words = [
    {
      text: "S",
      className: "text-white  dark:text-blue-500",
    },
    {
      text: "c",
    },
    {
      text: "h",
    },
    {
      text: "o",
    },
    {
      text: "l",
    },
    {
      text: "a",
    },
    {
      text: "r",
    },
    {
      text: "s",
    },
  ];
  const scholars = [
    {
      title: 'Dr. Abdullah Jahangir',
      description: 'Graduate from Soudi Arab. Three time gold medalist. Ex professor of Islamic University.',
      link: '/scholor/ajhangir'
    },
    {
      title: 'Dr. Muhammad Saifullah',
      description: 'Graduate from Madina Islamic University. Phd holder. Mutalli of Masjid As Siddik and chairman of Masjid At Takwa.',
      link: '/scholor/saifullah' 
    },
    {
      title: 'Dr. Abdullah Jahangir',
      description: 'Graduate from Soudi Arab. Three time gold medalist. Ex professor of Islamic University.',
      link: '/scholor/ajhangir'
    },
    {
      title: 'Dr. Muhammad Saifullah',
      description: 'Graduate from Madina Islamic University. Phd holder. Mutalli of Masjid As Siddik and chairman of Masjid At Takwa.',
      link: '/scholor/saifullah' 
    },
    {
      title: 'Dr. Abdullah Jahangir',
      description: 'Graduate from Soudi Arab. Three time gold medalist. Ex professor of Islamic University.',
      link: '/scholor/ajhangir'
    },
    {
      title: 'Dr. Muhammad Saifullah',
      description: 'Graduate from Madina Islamic University. Phd holder. Mutalli of Masjid As Siddik and chairman of Masjid At Takwa.',
      link: '/scholor/saifullah' 
    }
  ]
  return (
    <div className=' my-40'>
      <div className='py-10'>
        <TypewriterEffect words={words}/>
      </div>
      <div className='max-w-5xl mx-auto px-8'>
        <HoverEffect items={scholars}/>
      </div>
      
      </div>
  )
}

export default Scholars