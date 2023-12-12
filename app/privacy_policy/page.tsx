import React from 'react'
import { Metadata } from "next"
export const metadata: Metadata = {
  title:'Privacy Policy',
  };

export default function page() {
  return (
    <div className="py-2 tracking-wider px-9 mt-20 justify-center items-center text-center m-2.5">
      <h1 className="text-[#9d174d] text-3xl font-extrabold">Privacy Policy</h1>

      <h2 className="text-2xl mt-6">Welcom to our website <span className="text-[#dc2626]"> www.gausiyacoutur.com </span>
      please read our privacy policy carefully.
      This privacy policy applies when you visit our surf the site without purchasing any product.</h2>

      <h3 className="text-xl">Note : Such a claim must be initaited by the customer within 15 days of item being delivered.
       Customer needs to share images for the claim on our mail id ,
       and once approved the return is processed.</h3>

       <h2 className="text-xl">Customer Personal Information</h2>

       <h3 className="text-xl">We are Committed to keep your Information secure.
        your data completely safe with us.
       </h3>

       <h2 className="text-xl">Customer Support Services 24/7</h2>

       <h3 className="text-xl">Customer service is one of our top priorities.
        The goal of our company is to provide 100% customer satisfaction.
        whenever you have a complaint, please contact us and we will make sure to assit you.
       </h3>

       <span className="text-[#9d174d] text-3xl mt-6 font-extrabold">Thank You !</span>

    </div>
  )
}
