import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { TypewriterEffect } from './ui/typewriter-effect';

const Footer = () => {
  const people = [
    {
      id: 1,
      name: "Abu Bokor",
      designation: "Software Engineer",
      image:
        "https://passtheknowledge.files.wordpress.com/2014/10/loon.jpeg",
    },
    {
      id: 2,
      name: "Omor Faruk",
      designation: "Product Manager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBcU7udFrPsmjeh9xosGQETQKW4SIqBdhFujCSqX9jmx-zkCRlxGgYCJmumnq2Y16sl0&usqp=CAU",
    },
    {
      id: 3,
      name: "Usman Gani",
      designation: "Data Scientist",
      image:
        "https://cdn.openart.ai/uploads/image_iVqVF46D_1692376501807_512.webp",
    },
    {
      id: 4,
      name: "Ali Bin Talib",
      designation: "UX Designer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Photography-wallpaper-facial-hair-man-beard-chin-moustache-human-elder-portrait-1453095.jpg/800px-Photography-wallpaper-facial-hair-man-beard-chin-moustache-human-elder-portrait-1453095.jpg",
    },
    {
      id: 5,
      name: "Hamza Asadullah",
      designation: "Frontend Developer",
      image:
        "https://storage.googleapis.com/pai-images/ab9ca8df1fa64f5cad86cd32d85a8e69.jpeg",
    },
    {
      id: 6,
      name: "Zayed Bin Haris",
      designation: "Backend Deleloper",
      image:
        "https://storage.googleapis.com/pai-images/d7e6098f9ea742c5860e19ade6b9f5e6.jpeg",
    },
  ];
  const words = [
    {
      text: "O",
      className: "text-white  dark:text-blue-500",
    },
    {
      text: "u",
    },
    {
      text: "r",
    },
    {
      text: " ",
    },
    {
      text: "T",
    },
    {
      text: "e",
    },
    {
      text: "a",
    },
    {
      text: "m",
    },
    
  ]
  return (
    <div className='pb-10'>
      <div className='pb-10'>
    <TypewriterEffect words={words}/>
      </div>
      <div>
        <h1 className='text-center pb-10'>Hover over image to know details.</h1>
      </div>
      <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
    </div>
  )
}

export default Footer