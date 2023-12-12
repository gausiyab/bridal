import Link from "next/link"
import {NavigationOff, PhoneForwarded, Facebook ,Instagram,Linkedin, MailPlus} from "lucide-react"
import { FaPinterestSquare} from 'react-icons/fa';
import { ImPaypal } from 'react-icons/im';
import { FaCcStripe } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcDiscover } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { siteConfig } from "../config/site";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-7">
      {/* <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-20 lg:px-8"> */}
      <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8 pt-4 ">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {siteConfig.footer.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-lg md:text-sm leading-6">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="grid md:grid-cols-2 md:gap-x-12 lg:grid lg:grid-cols-2 mt-8 text-center items-center justify-center gap-3">
        <div className="">
        {/* <div className=""> */}
          Addres
          <div className="flex gap-3">
          <NavigationOff color='rgb(255, 117, 26)'size={30}/>
            Plot no 29 , Road no 5, Shivaji Nagar, Govandi Mumbai 400043,India.
          </div>
        <div className="flex items-center justify-center gap-3">
          <PhoneForwarded color='rgb(16, 239, 43)'size={30}/> 
          +91 9967924064
        </div>
      </div>      
      <div className="relative ">
      GET CONNECTED
        <div className="flex my-0.5 items-center justify-center gap-3">         
        <Link href="https://www.facebook.com/gausiyaboutiques" target="blank">
        <Facebook  color='rgb(0, 0, 255)' size={30}/></Link>
         <Link href="https://www.instagram.com/gausiyaboutiques/" target="blank">
        <Instagram  color='rgb(221, 42, 123)'size={30}/></Link>
        <Link href="https://in.pinterest.com/gausiyaboutique92/" target="blank">
        <FaPinterestSquare color='rgb(189, 8, 28)' size={30}/></Link>
        <Link  href="https://www.linkedin.com/in/gausiyaboutique/" target="blank">
        <Linkedin  color='rgb(0, 119, 181)'size={30}/></Link>
        </div>
        <div className="flex my-0.5 items-center justify-center text-base gap-3"><MailPlus color='rgb(255, 117, 26)'size={30}/>gausiyaboutique@gmail.com</div>
      </div>     
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-12 lg:grid lg:grid-cols-2 text-center items-center justify-center gap-3">
        <div className="flex mt-1 gap-3 text-base">secure payment methods
                <ImPaypal color='rgb(0, 0, 255)' size={30}/>
                <FaCcStripe  color='rgb(221, 42, 123)'size={35}/>
                <RiVisaFill color='rgb(189, 8, 28)' size={35}/>
                <FaCcMastercard  color='rgb(0, 0, 255)'size={35}/>
                <FaCcDiscover  color='rgb(255, 153, 0)'size={35}/></div>
        <div className="mt-1 block text-center text-base leading-5">
          Gausiya Boutique @ {new Date().getFullYear()} All Rights Reserved.
        </div>
        </div>
      </div>
    </footer>
  )
}
