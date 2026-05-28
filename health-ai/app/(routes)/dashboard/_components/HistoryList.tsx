"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';


export function HistoryList() {
    const [historyList, setHistoryList] = useState([]);
  return (
    <div className='mt-10'>
      {historyList.length==0?
      <div className='flex flex-col items-center justify-center space-y-5 py-20 border-2 border-rounded-2xl '>
        <Image src={'/Medical Assistant.png'} alt='empty'
        width={150} height={150} />
        <h2 className='text-xl font-bold mt-2'>No recent Consultations</h2>
        <p>It looks like you haven't had any consultations yet.</p>
        <Button className='bg-blue-500 hover:bg-blue-600 text-white'>+ Start a Consultation</Button>
      </div>
      :
      <div>List</div>}
    </div>
  )
}

export default HistoryList
