import Link from "next/link";
import { simplifiedProduct } from "../interface";
import Image from "next/image";
import { allproduct } from "../lib/allproduct";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:'All Coutur Products',
};

export default async function All(){
    const data: simplifiedProduct[] = await allproduct();
   return(
    <div className="bg-whit mt-20">
        <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex  items-center justify-between gap-8 md:flex-row mt-6 xl:hidden">
        <div className="flex h-12 w-full divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Bridal"
            className="flex w-1/2 items-center justify-center text-black transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Bridal Couture
          </Link>
          <Link
            href="/Beaded"
            className="flex w-1/2 items-center justify-center text-black transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
           Beaded Fabric
          </Link>
          <Link
            href="/Lace"
            className="flex w-1/2 items-center justify-center text-black transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
           Bridal Lace
          </Link>
        </div>
      </div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">
            Our All Category products
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 lg:col-span-4 lg:gap-x-8 mt-4">
          {data.map((product) => (
            <Link 
            key={product._id}
            href={`/product/${product.slug}`} >
        <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full "
                  width={225}
                  height={200}
                  sizes="(min-width: 1360px) 400px, (min-width: 1040px) calc(25.67vw + 58px), (min-width: 720px) 344px, calc(46.5vw + 19px)"
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
    </div>
   )
}