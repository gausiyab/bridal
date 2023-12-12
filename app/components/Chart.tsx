import React from 'react'
import {BsWhatsapp } from "react-icons/bs";
import Link from "next/link"

export default function Chart() {
  return (
    <div className='flex justify-end relative mr-2 '>
      <div className='top-[90%] fixed z-50 mb-9 bg-[#28D146]  hover:bg-[#51e951] rounded-lg'>
      <Link href= "https://wa.me/919967924064" target="blank">
       <BsWhatsapp className='p-1 text-slate-100' size={35}/></Link>
       </div>
    </div>
  )
}
