import React from 'react'
import { Nav, Hero, Examples, Services, Footer, Contact } from '../components/_home'
import { ScrollShadow } from "@nextui-org/scroll-shadow";
export default function Home() {
   return (
      <ScrollShadow className='h-full'>
         <div className='bg-slate-50'>
            <Nav />
            <Hero />
            <Examples />
            <Services />
            <Contact />
            <Footer />
         </div>
      </ScrollShadow>
   )
}
