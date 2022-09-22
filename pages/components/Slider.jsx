import Image from 'next/image'
import React, { useState } from 'react'
import {FaArrowCircleLeft , FaArrowCircleRight} from 'react-icons/fa'
import { sliderData } from '../api/sliderData'
const Slider = () => {
 const [currnet,setCurrent] = useState(0)
 const length = sliderData.length;

 const nextSlide = () => {
    setCurrent(currnet === length - 1 ? 0 : currnet + 1)
 }
 const prevSlide = () => {
    setCurrent(currnet === 0 ? length - 1 : currnet - 1)
 }
 if(!Array.isArray(sliderData) || sliderData.length <= 0){
    return null;
 }
  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
        <h1 className='text-4xl font-bold text-center p-4'>Gallary</h1>
        
        <div className='relative flex justify-center p-4'>
            {sliderData.map((slide,index) => {
                return (
                    <div key={index} className={
                        index === currnet
                        ? 'block ease-in duration-1000'
                        : 'hidden'
                        }>

                            
                            <FaArrowCircleLeft
                            onClick={prevSlide}
                            size={50} className='absolute top-[50%]
                            left-[30px] text-white/70 cursor-pointer 
                            select-home z-[2]' />
                     {index === currnet && (
                          <Image src={slide.image} alt="/" 
                          width='1440' height='600' objectFit='cover'/>
                          )}
                          <FaArrowCircleRight
                          onClick={nextSlide}
                          size={50} className='absolute top-[50%]
                            right-[30px] text-white/70 cursor-pointer 
                            select-home z-[2]' />
                            </div>
                )
            })}
                    </div>
        
    </div>
  )
}

export default Slider
