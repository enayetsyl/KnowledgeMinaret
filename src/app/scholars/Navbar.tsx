import { FloatingNav } from '@/components/ui/floating-navbar'
import React from 'react'

const Navbar = () => {
  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Scholars',
      link: '/scholars',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Mystery',
      link: '/mystery',
    },
  ]
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  )
}

export default Navbar