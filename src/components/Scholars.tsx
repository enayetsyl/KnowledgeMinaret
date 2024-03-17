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
      link: '/scholars'
    },
    {
      title: 'Dr. Muhammad Saifullah',
      description: 'Graduate from Madina Islamic University. Phd holder. Mutalli of Masjid As Siddik and chairman of Masjid At Takwa.',
      link: '/scholars' 
    },
    {
      title: 'Enamul Haque',
      description: 'A marin engineer by profession. Now spending full time in the preaching of islam throughout the whole bangladesh.',
      link: '/scholars'
    },
    {
      title: 'Dr. Manzoor e Elahi',
      description: 'Graduate from Madina Islamic University. Phd holder. Professor at the National University, Gazipur, Bangladesh..',
      link: '/scholars' 
    },
    {
      title: 'Naseel Shahrukh',
      description: 'Graduate from BUET. Hafiz and double dawra from madrasha board. Teacher of hifz at School for Community Development.',
      link: '/scholars'
    },
    {
      title: 'Sayed Madani',
      description: 'Graduate from Madina Islamic University. Imam and Khatib of Qudrat Ullah Mosque, BandarBazar, Sylhet.',
      link: '/scholars' 
    }
  ]
  return (
    <div className='mt-20'>
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