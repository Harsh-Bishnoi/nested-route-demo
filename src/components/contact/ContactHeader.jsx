import React from 'react'
import Hero from '../common/Hero'
import CustomHeading from '../common/CustomHeading'
import CustomDescription from '../common/CustomDescription'

const ContactHeader = () => {
    return (
        <>
            <div className="flex items-center justify-center flex-col bg-[url(../../src/assets/images/png/contact-bg-img.jpeg)] bg-no-repeat bg-cover bg-center relative">
                <div className="opacity-60 bg-black absolute inset-0"></div>
                <div className="max-w-[1140px] w-full z-1">
                    <Hero />
                </div>
                <div className="max-w-[1140px] px-4 w-full pt-32 pb-18 sm:py-32 z-0">
                    <CustomHeading HeadingText="Start the Conversation. Ignite the Journey." />
                    <CustomDescription descriptionText="Whether you’re ready to explore our latest models, customize your dream car, or schedule a private test drive, our dedicated team is here to guide you every step of the way. Reach out today and take the first step toward an extraordinary driving experience tailored just for you." />
                </div>
            </div>
        </>
    )
}

export default ContactHeader