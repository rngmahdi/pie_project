import React from 'react'
import { Textarea, Input } from "@nextui-org/input";
export function Contact() {
   return (
      <>
         <div id="contact">
            <div className='flex justify-center content-center my-4 text-2xl font-semibold'>
               Contact
            </div>
            <div className='flex w-[80%] m-auto justify-center items-center content-center'>
               <div className='flex justify-end px-4 content-center w-1/2'>
                  <Textarea
                     label="Description"
                     placeholder="Enter your message"
                     className="max-w-md"
                  />
               </div>
               <div className='flex flex-col justify-center content-center w-1/2  py-6'>
                  <div className='flex flex-col max-w-md gap-4'>
                     <Input type="email" label="Your Name" />
                     <Input type="email" label="Your Email" />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
