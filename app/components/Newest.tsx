import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { simplifiedProduct } from "../interface";
import {client} from "../lib/sanity";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { Button } from "@/components/ui/button";

async function getData(){
    const query = `*[_type == "product"][0...8] | order(_createdAt desc) {
        _id,
          price,
          name,
          shipping,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;
      const data = await client.fetch(query);
      return data
}

export default async function Newest(){

    const data: simplifiedProduct[] = await getData();
   return(
    <div className="bg-whit ">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest products
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="allproducts">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 lg:col-span-3 lg:gap-x-8">         
          {data.map((product) => (
            <Link 
            key={product._id}
            href={`/product/${product.slug}`} >
        <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
                <Image
                src={urlFor(product.imageUrl).url()}
                alt={product.name}
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full "
                  width={225}
                  height={200}
                    quality={60}
                    sizes="(max-width: 768px) 100vw, 700px"
                    priority
               />
             </div>
                  <h2 className="text-sm text-gray-700 mt-2.5">
                  {product.name.substring(0,60) + " .."}
                  </h2>
               <div className="flex text-base justify-between mx-4">
                <span className="font-medium text-gray-900 ">
                  $ {product.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  $ {product.price + 30}
                </span>
                </div>
                <span className="text-sm text-lime-700">{product.shipping}</span>
            </div>
            </Link>
          ))}
        </div>
        </div>
        <div className="flex justify-center items-center mt-4">
        <Button className="bg-[#090808]">
        <Link className="flex items-center gap-x-1 justify-center " href="allproducts">
            See All
            <span>
              <ArrowRight />
            </span>
          </Link>
          </Button></div>
    </div>
   )

}