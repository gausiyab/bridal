import {BsWhatsapp } from "react-icons/bs";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { Truck } from "lucide-react";
import { Metadata } from "next";
import Payout from "@/app/components/Payout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getData } from "@/app/lib/productdetails";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata>{
  const datap: fullProduct = await getData(params.slug);

    if(!datap)
    return{
      title:"Not Found",
      description:"the page is not found",
    };
    return{
    title:datap.name,
    description:datap.description,
    alternates:{
      canonical:`/product/${datap.slug}`,
      languages:{
        "en-CA":`en-CA/product/${datap.slug}`
      },
    },
  };
};

export const dynamic = "force-dynamic";

export default async function ProductPge({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white mt-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 ">
        <div className="grid gap-8 md:grid-cols-2 ">
          <ImageGallery images={data.images} />
          <div className="md:py-6">
            <div className="mb-1 md:mb-3">
              <span className="mb-0.5 inline-block text-orange-600 font-medium">
                {data.categoryName}
              </span>
              <h1 className="text-lg font-bold text-gray-800 lg:text-2xl">
                {data.name}
              </h1>
            </div>
            <div className="mb-0.5">
              <div className="flex items-end gap-4">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  $ {data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>
            {/* <div className="mb-0.5 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">1 Week Shipping</span>
            </div> */}
            <span className="text-[#090808] text-lg">Product Id : {data.designid}</span>           
            <p className="mt-1 mb-2 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
            <Button className="bg-[#090808]">
            <Link className="flex items-center justify-center" href= "https://wa.me/919967924064" target="blank">
            <BsWhatsapp className='p-1 text-[#28D146]' size={35}/> Buy Now Contact Us On Whatsaap</Link>
            </Button>
            <div>
            <span className="text-lime-700 text-lg my-8"> NOTE : Secure Payment By PAYPAL & STRIPE</span></div>
          </div>          
        </div>       
        <Payout/>
      </div>      
    </div>
  );
}
