import { Button } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'

const EndMessage = () => {
  return (
    <>
    <hr className='h-[2px] bg-blue-800 mt-3'/>
    <div className='flex justify-center gap-5 py-10'>
     <Link href='/about'>
     <Button
        borderRadius="1rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-blue-500 dark:border-slate-800"
        >
        Let's Go To Next Page
      </Button>
     </Link>
    </div>
        </>
  )
}

export default EndMessage