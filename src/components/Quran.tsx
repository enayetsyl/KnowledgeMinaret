import React from 'react'
import { TypewriterEffect } from './ui/typewriter-effect'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';
import bukhari from '../../public/bukhari.jpg'
import { homePageQuranWords } from '@/constant';

const Quran = () => {
  const content = [
    {
      title: "Quran",
      description:
      "The Quran is the central religious text of Islam, which Muslims believe to be a revelation from God. It is widely regarded as the finest work in classical Arabic literature.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-600),var(--emerald-800))] flex items-center justify-center text-white text-xl font-bold text-">
          World's Best Book
        </div>
      ),
    },
    {
      title: "Sahih Bukhari",
      description:
      "Sahih al-Bukhari is one of the Kutub al-Sittah (six major hadith collections) of Sunni Islam. These prophetic traditions, or hadith, were collected by the Persian Muslim scholar Muhammad al-Bukhari.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={bukhari}
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Sahih Muslim",
      description:
      "Sahih Muslim is one of the Kutub al-Sittah (six major hadith collections) in Sunni Islam. It is highly acclaimed by Sunni Muslims and considered the second most authentic hadith collection after Sahih al-Bukhari.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white text-xl">
          Sahih Muslim
        </div>
      ),
    },
    {
      title: "Adabul Mufrad",
      description:
      "Adab al-Mufrad is a collection of hadith compiled by the Persian Islamic scholar Muhammad al-Bukhari, who is regarded as one of the most trusted collectors of hadith. The book is dedicated to moral behavior and manners in Islam.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--green-500))] flex items-center justify-center text-white text-xl">
          Adabul Mufrad
        </div>
      ),
    },
  ];

  return (
    <div className='pb-20'>
      <div className='pb-36'>
        <TypewriterEffect words={homePageQuranWords}/>
      </div>
      <div className="">
      <StickyScroll content={content} />
    </div>
    </div>
  )
}

export default Quran