
import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import { siteConfig } from "../config/site";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mt-16 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 ">
      <div className="flex flex-wrap justify-between md:mb-4">
        <div className="flex w-full flex-col justify-center lg:w-1/3 ">
         
          <h1 className="text-xl text-black md:text-lg lg:text-xl font-extrabold tracking-normal">
            Bridal Handmade Collection <span className="text-[#DC7633]">{new Date().getFullYear()}</span> {siteConfig.homepage}
          </h1>
        </div>

        <div className="flex w-full md:mb-4 lg:w-2/3 justify-center mt-4">
        {/* <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0"> */}
          {/* <div className="relative left-12  z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt=""
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
              sizes="(min-width: 1360px) 400px, (min-width: 1040px) calc(25.67vw + 58px), (min-width: 720px) 344px, calc(46.5vw + 19px)"
            />
          </div> */}

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg w-full">
            <Image
              src={urlFor(data.image2).url()}
              alt="Home page Image"             
              className="h-full w-full object-cover object-center"
              width={1024}
              height={600}            
              sizes="(max-width: 768px) 100vw, 700px"
              // sizes="(min-width: 1360px) 400px, (min-width: 1040px) calc(25.67vw + 58px), (min-width: 720px) 344px, calc(46.5vw + 19px)"
              priority
            />
          </div>
        </div>
      </div>

        <div className="flex  items-center justify-between gap-8 md:flex-row mt-6">
        <div className="flex h-12 w-full divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Bridal"
            className="flex w-1/2 items-center justify-center  text-black transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Bridal Coutur
          </Link>
          <Link
            href="/Beaded"
            className="flex w-1/2 items-center justify-center  text-black transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
           Beaded Fabric
          </Link>
          <Link
            href="/Lace"
            className="flex w-1/2 items-center justify-center  text-black transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
           Bridal Lace
          </Link>
        </div>
      </div>
    </section>
  );
}
