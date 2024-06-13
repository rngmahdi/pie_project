import React from 'react'
import { Image } from "@nextui-org/react";

export function Examples() {
   return (
      <>
         <div className='my-44  flex flex-col justify-center items-center'>
            <div className='font-semibold text-2xl '>
               Examples
            </div>
            <div className='flex mt-12 gap-8 px-40'>
               <Image src='src/assets/example1.png' width={600} />
               <Image src='src/assets/example2.png' width={600} />
               <Image src='src/assets/example3.png' width={600} />
            </div>
         </div>
      </>
   )
}
