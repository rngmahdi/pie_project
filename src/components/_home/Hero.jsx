import { Button } from '@nextui-org/react';
import React from 'react'
import { FaArrowDown } from "react-icons/fa";

export function Hero() {
  return (
    <>
      <div id='hero' className='flex flex-col justify-center items-center h-[600px]'>
        <div className='w-[900px] flex flex-col content-center'>
          <h2 className='text-6xl inline-block text-center font-bold my-4'>We are your first step in <br /> the world of web</h2>
          <p className='text-2xl text-center'>we specialize in creating stunning, responsive websites tailored to your unique business needs.From captivating designs and seamless user experiences to robust e-commerce solutions and top-notch SEO strategies, we ensure your online success. </p>
        </div>
      </div>
      <div className='flex content-center justify-center items-center gap-3 '>
        <Button onClick={() => {
          let element = document.getElementById("examples")
          element.scrollIntoView({ block: "start",behavior:"smooth" })
        }}>
          Learn More <FaArrowDown className='animate-bounce' />
        </Button>
      </div>
    </>
  )
}
