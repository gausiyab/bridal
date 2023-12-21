import React from 'react'
import { FaPinterestSquare} from 'react-icons/fa';
import {NavigationOff, PhoneForwarded, Facebook ,Instagram,Linkedin, MailPlus} from "lucide-react"
import {BsWhatsapp } from "react-icons/bs";
import Link from "next/link"
import { Metadata } from "next"
export const metadata: Metadata = {
   title: "Customer 24/7"
  };
 

export default function page() {
  return (
    <div className="py-2 tracking-wider px-9 mt-20 justify-center items-center text-center m-2.5">
    <div>
      <h2 className="text-[#9d174d] text-3xl font-extrabold">Customer Support Services 24/7</h2>
     <h3 className="text-xl m-2.5">Customer service is one of our top priorities.
      The goal of our company is to provide 100% customer satisfaction.
      whenever you have a complaint, please contact us and we will make sure to assist you.
     </h3>
    <div className="relative ">
      <span className="text-[#9d174d] text-2xl font-extrabold">Contact Us 24/7</span>
        <div className="flex m-2.5 items-center justify-center gap-3">
         
        <Link href="https://www.facebook.com/mahiracoutures/" target="blank">
        <Facebook  color='rgb(0, 0, 255)' size={30}/></Link>

         <Link href="https://www.instagram.com/mahira___couture" target="blank">
        <Instagram  color='rgb(221, 42, 123)'size={30}/></Link>

        <Link href="https://in.pinterest.com/mahiracoutures/" target="blank">
        <FaPinterestSquare color='rgb(189, 8, 28)' size={30}/></Link>

        {/* <Link  href="https://www.linkedin.com/in/gausiyaboutique/" target="blank">
        <Linkedin  color='rgb(0, 119, 181)'size={30}/></Link> */}

        <Link href= "https://wa.me/919967924064" target="blank">
       <BsWhatsapp  color='hsla(126, 100%, 50%, 1)' size={30}/></Link>
        </div>
        <div className="flex my-0.5 items-center justify-center text-base gap-3"><MailPlus color='rgb(255, 117, 26)'size={30}/>mahiracouture92@gmail.com</div>
      </div>
    </div>
  </div>
  )
}
