import React from 'react'
import Hero from '../common/Hero'
import CustomHeading from '../common/CustomHeading'
import CustomDescription from '../common/CustomDescription'

const AboutHeader = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col bg-[url(../../src/assets/images/png/about-bg-img.webp)] bg-no-repeat bg-cover bg-center relative">
        <div className="opacity-60 bg-black absolute inset-0"></div>
        <div className="max-w-[1140px] w-full z-1">
          <Hero />
        </div>
        <div className="max-w-[1140px] px-4 w-full pt-32 pb-18 sm:py-32 z-0">
          <h2 className='font-family-primary text-[40px] leading-[normal] sm:text-6xl text-white'> </h2>
          <p className='font-family-primary text-2xl max-w-[902px] text-white pt-5'></p>
          <CustomHeading HeadingText="Luxury & Supercar Brand" />
          <CustomDescription descriptionText="Born from a legacy of excellence, we create more than just cars — we craft moving masterpieces. Every model reflects a relentless pursuit of performance, elegance, and innovation. Designed for visionaries, built without compromise — our supercars are the ultimate expression of power, prestige, and personal style." />
        </div>
      </div>
    </>
  )
}

export default AboutHeader