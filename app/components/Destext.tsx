
import Image from "next/image";
import Payment from "../../public/payment.jpg"

export default function Destext(){
   return(
    <div className="flex justify-center items-center">
    <Image
              src={Payment}
              alt="payment logo"             
              className="h-full w-full object-cover object-center"
              width={200}
              height={200}           
              sizes="(max-width: 768px) 100vw, 700px"             
              priority
            />
  </div>
   )

}