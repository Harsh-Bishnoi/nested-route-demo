import React from 'react'
import Hero from '../common/Hero'
import CustomDescription from '../common/CustomDescription'
import CustomHeading from '../common/CustomHeading'

const ProductHeader = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col bg-[url(../../src/assets/images/png/product-bg-img.jpg)] bg-no-repeat bg-cover bg-center relative">
        <div className="bg-black opacity-60 inset-0 absolute top-0"></div>
        <div className="w-full max-w-[1140px] z-1">
          <Hero />
        </div>
        <div className="max-w-[1140px] px-4 w-full pt-32 pb-18 sm:py-32 z-0">
          <CustomHeading HeadingText="Find Your Perfect Ride" />
          <CustomDescription descriptionText="Explore our diverse collection of sedans, SUVs, and sports cars designed to match your lifestyle. Whether you seek comfort, power, or style — your ideal drive starts here. Discover performance and elegance in every model." />
        </div>
      </div>
    </>
  )
}

export default ProductHeader