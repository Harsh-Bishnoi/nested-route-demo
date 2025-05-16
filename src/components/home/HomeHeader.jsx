import React from 'react'
import Hero from '../common/Hero'
import CustomHeading from '../common/CustomHeading'
import CustomDescription from '../common/CustomDescription'

const HomeHeader = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col bg-[url(../../src/assets/images/png/homehero-bg-img.jpg)] bg-no-repeat bg-cover bg-bottom relative">
                <div className="bg-black opacity-60 inset-0 absolute top-0"></div>
                <div className="w-full max-w-[1140px] z-1">
                    <Hero />
                </div>
                <div className="max-w-[1140px] px-4 w-full pt-32 pb-18 sm:py-32 z-0">
                    <CustomHeading HeadingText="Drive Your Dream – Explore New & Used Cars Today" />
                    <CustomDescription descriptionText="Explore our wide selection of new and used vehicles at unbeatable prices. Fast financing, trusted service, and cars you'll love." />
                </div>
            </div>
        </>
    )
}

export default HomeHeader