import React from 'react'
import { Nav, Hero, Examples, Services, Footer, Contact } from '../components/_home'
import { ScrollShadow } from "@nextui-org/scroll-shadow";
export default function Home() {
   return (
      <div className='bg-slate-50 font-Alpino h-full'>
         <div className=' absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-slate-300'></div>
         <Nav />
         <Hero />
         <Examples />
         <Services />
         <Contact />
         <Footer />
         {/* <iframe id="audio_iframe" src="https://elamiammahdi04.bubbleapps.io/version-test/widget?agent_id=eb9e7390-8404-4d0d-bae5-f39fff7f2e4d" allow="microphone" width="400px" height="550px" pointer-events="none"
            style={{ position: " fixed", top: "0", background: "transparent", border: "none", zIndex: "999", height: "100%" }}
         > </iframe> */}
         <iframe id="audio_iframe" src="https://elamiammahdi04.bubbleapps.io/version-test/widget?agent_id=eb9e7390-8404-4d0d-bae5-f39fff7f2e4d" allow="microphone" width="400px" height="550px" pointer-events="none" style={{ position: " fixed", top: "0", background: "transparent", border: "none", zIndex: "999" }}> </iframe>
      </div>
   )
}
