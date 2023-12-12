import React from 'react'
import { Metadata } from "next"
export const metadata: Metadata = {
    title:'Cancellation and Return',
  };

export default function page() {
  return (
    <div className="py-2 tracking-wider px-9 mt-20 justify-center items-center text-center m-2.5">
    <span className="text-[#9d174d] text-3xl font-extrabold">Refund policy</span>
    <h2 className='text-2xl my-3.5'>ORDER CANCELLATION / RETURN POLICY</h2>
    <h3 className='text-2xl my-3.5'>* Such a claim must  be initaited by the customer within 7 days of item being delivered.
        Customer needs to share images for the claim on our mail id , and once approved the return is processed.
    </h3>
    <h3 className='text-2xl my-3.5'>* NOT : The customer is resposible for return shipping & return handling charges.</h3>
    <h2 className='text-2xl my-3.5'>* Special Note : Slight color variations possible due to individually differing screen and photographic resolution.</h2>
     <span className='text-[#9d174d] text-3xl mt-6 font-extrabold'>Thank you !</span>
   </div>
  )
}
