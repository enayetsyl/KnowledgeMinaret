import { BackgroundBeams } from '@/components/ui/BackgroundBeams'
import React from 'react'
import Header from './Header'
import { FirstSection } from './FirstSection'
import SecondSection from './SecondSection'
import EndMessage from '../scholars/EndMessage'

const Blog = () => {
  return (
    <div className="bg-slate-950 text-white ">
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <div className='mt-20'>
      <EndMessage href='/mistry' />
      </div>
     
    </div>
  )
}

export default Blog