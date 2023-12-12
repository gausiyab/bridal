
import {client} from "../lib/sanity";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import {PortableText} from '@portabletext/react'

async function getData(){
    const query = `*[_type == "payout"]{    
          "imageUrl": image.asset->url,
          content,
      }`;
      const data = await client.fetch(query);
      return data
}

export default async function Payout(){

    const data = await getData();
   return(
    <div className="grid grid-cols-1">
<div className="flex w-auto justify-center items-center">
    {data.map((val:any, i: number) => {
            return(
        <div  key={i}>
            <Image
                src={urlFor(val.imageUrl).url()}
                alt="payment logo Image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full "
                  width={225}
                  height={200}
                 
                  // sizes="(min-width: 1360px) 400px, (min-width: 1040px) calc(25.67vw + 58px), (min-width: 720px) 344px, calc(46.5vw + 19px)"
                    quality={60}
                    sizes="(max-width: 768px) 100vw, 700px"
                    priority
                    />
    </div>
);})}


</div>
<div className="flex"><PortableText value={data[0].content} /></div>
</div>

)}