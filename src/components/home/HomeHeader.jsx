import React from 'react'
import Hero from '../common/Hero'

const HomeHeader = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col bg-[url(../../src/assets/images/png/homehero-bg-img.jpg)] bg-no-repeat bg-cover bg-bottom relative">
                <div className="bg-black opacity-60 inset-0 absolute top-0"></div>
                <div className="w-full max-w-[1140px] z-1">
                    <Hero />
                </div>
                <div className="max-w-[1140px] px-4 w-full pt-32 pb-18 sm:py-32 z-0">
                    <h1 className='text-start font-family-primary font-medium leading-[100%] max-w-[922px] text-white text-4xl sm:text-6xl'>"Drive Your Dream – Explore New & Used Cars Today"</h1>
                    <p className='font-family-primary font-medium leading-[120%] pt-5 max-w-[822px] text-white text-2xl sm:text-3xl'>Explore our wide selection of new and used vehicles at unbeatable prices. Fast financing, trusted service, and cars you'll love.</p>
                </div>
            </div>
        </>
    )
}

export default HomeHeader