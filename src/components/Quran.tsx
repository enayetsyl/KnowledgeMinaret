import React from 'react'
import { TypewriterEffect } from './ui/typewriter-effect'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';
import bukhari from '../../public/bukhari.jpg'

const Quran = () => {
  const words = [
    {
      text: "R",
      className: "text-white  dark:text-blue-500",
    },
    {
      text: "e",
    },
    {
      text: "c",
    },
    {
      text: "o",
    },
    {
      text: "m",
    },
    {
      text: "m",
    },
    {
      text: "e",
    },
    {
      text: "n",
    },
    {
      text: "d",
    },
    {
      text: "a",
    },
    {
      text: "t",
    },
    {
      text: "i",
    },
    {
      text: "o",
    },
    {
      text: "n",
    },
   
    
  ];
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
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
        <TypewriterEffect words={words}/>
      </div>
      <div className="">
      <StickyScroll content={content} />
    </div>
    </div>
  )
}

export default Quran