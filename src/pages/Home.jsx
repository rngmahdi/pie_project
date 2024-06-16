import React from 'react'
import { Nav, Hero, Examples, Services, Footer, Contact } from '../components/_home'
import { ScrollShadow } from "@nextui-org/scroll-shadow";
export default function Home() {
   return (
      <div className=' font-Alpino h-full'>
         <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-300 -z-10' >
         </div>
         <Nav />
         <Hero />
         <Examples />
         <Services />
         <Contact />
         <Footer />
      </div>
   )
}
