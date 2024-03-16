'use client'
import React, { useState } from 'react'
import { FloatingNav } from './ui/floating-navbar'
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from 'next/link';

const Navbar = ({ className }: { className?: string }) => {
  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Product',
      link: '/product',
    },
  ]

  const [active, setActive] = useState<string | null>(null);

  return (
    <>
    <div  className={cn("fixed top-0 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
      <Link href='/'>
      <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
      </Link>
      <Link href='/about'>
      <MenuItem setActive={setActive} active={active} item="About">
        </MenuItem>
      </Link>
      <Link href='/product'>
      <MenuItem setActive={setActive} active={active} item="Product">
        </MenuItem>
      </Link>
          
      </Menu>

</div>
{/* <FloatingNav navItems={navItems} /> */}
    </>
  )
}

export default Navbar