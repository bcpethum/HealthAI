import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

const menuOptions = [
  {
    id:1,
    name: 'Home',
    path: '/home',
  },
  {
    id:2,
    name: 'History',
    path: '/history',
  },
  {
    id:3,
    name: 'Pricing',
    path: '/pricing',
  },
  {
    id:4,
    name: 'Profile',
    path: '/profile',
  },
]

function AppHeader() {
  return (
    <div className='w-full flex items-center justify-between px-60 py-4 border-b shadow md:px-20 lg:px-40'> 
      <Image src='/logo.svg' alt='logo' width={32} height={32} />
    <div className='hidden md:flex items-center gap-12'>
        {menuOptions.map((option, index) => (
            <div key={index}>
                <h2 className='hover:font-bold cursor-pointer transition-all'>{option.name}</h2>
            </div>
        ))}
    </div>
    <UserButton/>
    </div>
  )
}

export default AppHeader
