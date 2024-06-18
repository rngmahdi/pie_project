import React from "react";
import {
   Nav,
   Hero,
   Examples,
   Services,
   Footer,
   Contact,
} from "../components/_home";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
export default function Home() {
   return (
      <div className=" font-Alpino h-full">
         <header className="bg-gradient-to-b from-slate-200 h-screen">
            <Nav />
            <Hero />
         </header>
         <Examples />
         <Services />
         <Contact />
         <Footer />
      </div>
   );
}
