import React from 'react'
import { Image } from "@nextui-org/react";

export function Examples() {
   return (
      <>
         <div id='examples' className='pt-32 pb-20 flex flex-col justify-center items-center'>
            <div className='font-semibold text-4xl '>
               Examples
            </div>
            <div className='flex mt-12 gap-8 px-40 pt-10'>
               <Image src='src/assets/example1.png' width={600} />
               <Image src='src/assets/example2.png' width={600} />
               <Image src='src/assets/example3.png' width={600} />
            </div>
         </div>
      </>
   )
}
