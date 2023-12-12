import React from 'react'
import { Metadata } from "next"
export const metadata: Metadata = {
  title:'Shipping Policy',
  };


export default function page() {
  return (
       <div className="py-2 tracking-wider px-9 mt-20 justify-center items-center text-center m-2.5">
        <span className="text-[#9d174d] text-3xl font-extrabold">Shipping Term</span>
        <h2 className='text-2xl mt-6'>* We customize the dress after the order is place and ship within 1 to 7 working days after payment is successful, 
            depending on customization needed as per individual orders.
            We  final confirmation on Size Measurement, Address, Colour and Contact Point from the customer.</h2>
        <p  className='text-2xl'>* Custom / Import Charges And Taxes will be paid by Buyer International tax and Delay in destination Country "custom/import department"
        is not cover under late shipment.</p>
        <h2  className='text-xl'>* Express Shipping via DHL, FedEx, Aramex and Blue Dart so your item is safe and secured.
        Express shipping takes  6-9  business days for delivery from the date of shipping the parcel(and not date of purchase).</h2>
        <h3 className='text-2xl'>* Free Shipping : items will be via post & it generally takes 7 - 12 working days for delivery from the date of shipping the parcel(and not date of purchase). </h3>
        <span className='text-[#9d174d] text-3xl mt-6 font-extrabold'>Thank you !</span>
    </div>
  )
}
