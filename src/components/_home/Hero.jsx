import { Button, Badge } from '@nextui-org/react';
import React from 'react'
import { FaArrowDown } from "react-icons/fa";

export function Hero() {
  return (
    <>
      <div id='hero' className='flex flex-col justify-center items-center h-[700px] z-10 '>
        <div className='w-[900px] flex flex-col content-center'>
          <h2 className='text-6xl inline-block text-center font-Erode font-bold my-4'>We are your first step in <br /> the world of web</h2>
          <p className='text-2xl text-center font-Alpino font-normal'>we specialize in creating stunning, responsive websites tailored to your unique business needs.From captivating designs and seamless user experiences to robust e-commerce solutions and top-notch SEO strategies, we ensure your online success. </p>
        </div>
        <div className='mt-32 gap-3 '>
          {/* <Badge color="danger" content={''} shape="circle" className='ms-2 p-1'> */}
          <Button
            onClick={() => {
              let element = document.getElementById("examples")
              element.scrollIntoView({ block: "start", behavior: "smooth" })
            }}
            color='primary'
            className=''>
            Learn More <FaArrowDown className='animate-bounce h-6 w-6' />
          </Button>
          {/* </Badge> */}
        </div>
      </div>
    </>
  )
}
