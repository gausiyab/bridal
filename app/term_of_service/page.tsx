import React from 'react'
import { Metadata } from "next"
export const metadata: Metadata = {
  title:'Term & Condition Policy',
  };

export default function page() {
  return (
      <div className="py-2 tracking-wider px-9 mt-20 justify-center items-center text-center m-2.5">
        <span className="text-[#9d174d] text-3xl font-extrabold">TERM & CONDITION</span>
        <h2 className="text-2xl mt-6">* TO  carefully the product quality the best,
            most dresses are NOT  in ready stock and are custom made as per indiviual customer requirements.
            NOTE : Customization may take a few days extra depending on your request.
        </h2>
        <h2 className='text-xl'>* Special Note : Slight color variations possible due to individually differing screen and photographic resolution.</h2>
        <h2 className='text-xl'>* NOTE : Customized Order once placed cannot be canceled after 24 hours of placing the order.</h2>
        <p className='text-xl'>* All hand Embroidery dresses have Crystal, Beades and Sequins that are put hand .</p>
        <p className='text-xl'>* we do not share personal customer details with anyone outside Gausiya Coutur.</p>
        <span className="text-[#9d174d] text-3xl mt-6 font-extrabold">Thank You !</span>
    </div>
  )
}
