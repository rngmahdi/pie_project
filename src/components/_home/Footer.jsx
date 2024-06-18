import React from 'react'
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
export function Footer() {
   return (
      <>
         <div className='flex flex-col items-center bg-gradient-to-b from-transparent  to-slate-200 pt-20 pb-10 '>
            <div>
               <img className='w-20' src='src/assets/logo.svg' />
            </div>
            <div className='flex gap-4 my-2'>
               <FaInstagram className='w-6 h-6' />
               <FaFacebookF className='w-6 h-6' />
            </div>
            <div>© 2024 YourSite Inc. All rights reserved.</div>
         </div>
      </>
   )
}
