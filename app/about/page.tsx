import React from 'react'
import { ImPaypal } from 'react-icons/im';
import { FaCcStripe } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcDiscover } from 'react-icons/fa';
import { Metadata } from "next"
export const metadata: Metadata = {
  title:'About of Gausiya Coutur',
};
export default function page() {
  return (
      <div className="py-2 tracking-wider px-9 mt-20 justify-center items-center text-center m-2.5">
            <span className="text-3xl my-3.5 font-medium text-[#4f46e5]">Welcom To Gausiya Coutur</span>
            <div className="m-1.5">
            <span className="text-3xl font-extrabold border-b-2 divide-red-900 text-[#9d174d]">Owner : Mohd Nisar</span>
                <div className="m-1.5">
                <span className="font-medium text-2xl">Company Details</span>
                    <p className="text-2xl tracking-wider">
                        Nature of business : Manufacturer and Exporter worldwide. Established in the year 2014. IE
                        code :
                        031405****
                        GST no : 27BDSPS9571G1ZM Established in 2014 we are one of the reputed manufacturer,
                        exporter and supplier
                        of
                        a wide range of Designer Bridal Fabric Lace / BEADED GOWN / EVENING GOWN /
                        MOROCCAN CAFTAN.
                        More different types designs available.
                        We also manufacturer a large collection for adults and
                        some kids for example functional wear, Festival oriented series with designers New patterns.
                        Our products are in high demand international market too.
                        All our products are made Real Hand Made Design and finest fabric that the easy and
                        comfortable to wear.
                        GAUSIYA BOUTIQUE also
                        promises express delivery anywhere Country. We deliver worldwide shipping
                        USA / UK / EUROP / AFRICA / AUSTRALIA / UAE / Middle East AND MORE.</p>
                </div>
                <div className="flex mt-1 gap-3 text-base justify-center items-center">
                    Secure Payment Option
                    <ImPaypal color='rgb(0, 0, 255)' size={30}/>
                    <FaCcStripe  color='rgb(221, 42, 123)'size={35}/>
                    <RiVisaFill color='rgb(189, 8, 28)' size={35}/>
                    <FaCcMastercard  color='rgb(0, 0, 255)'size={35}/>
                    <FaCcDiscover  color='rgb(255, 153, 0)'size={35}/>
                </div>
            </div>
    </div>
  )
}


