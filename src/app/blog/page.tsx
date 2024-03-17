import { BackgroundBeams } from '@/components/ui/BackgroundBeams'
import React from 'react'
import Header from './Header'
import { FirstSection } from './FirstSection'

const Blog = () => {
  return (
    <div className="bg-slate-950 text-white ">
      <Header/>
      <FirstSection/>
      <h1>background beam</h1>
      <h1>skewed grid</h1>
      <h1>Populate with header and content</h1>
      <h1>two column grid</h1>
    </div>
  )
}

export default Blog