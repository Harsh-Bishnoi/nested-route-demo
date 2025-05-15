import React from 'react'
import Hero from '../common/Hero'

const ContactHeader = () => {
    return (
        <>
            <div className="flex items-center justify-center flex-col bg-[url(../../src/assets/images/png/contact-bg-img.jpeg)] bg-no-repeat bg-cover bg-center relative">
                <div className="opacity-60 bg-black absolute inset-0"></div>
                <div className="max-w-[1140px] w-full z-1">
                    <Hero />
                </div>
                <div className="max-w-[1140px] px-4 w-full pt-32 pb-18 sm:py-32 z-0">
                    <h2 className='font-family-primary text-[40px] leading-[normal] sm:text-6xl text-white max-w-[800px]'>Start the Conversation. Ignite the Journey.</h2>
                    <p className='font-family-primary text-2xl max-w-[902px] text-white pt-5'>Whether you’re ready to explore our latest models, customize your dream car, or schedule a private test drive, our dedicated team is here to guide you every step of the way. Reach out today and take the first step toward an extraordinary driving experience tailored just for you.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ContactHeader