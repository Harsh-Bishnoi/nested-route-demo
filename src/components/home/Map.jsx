import React from 'react'
import CustomSubHeading from '../common/CustomSubHeading'
import CustomDescription from '../common/CustomDescription'

const Map = () => {
    return (
        <>
            <div className="flex justify-center items-center py-10 sm:py-20 md:py-30 lg:py-32">
                <div className="max-w-[1140px] px-4 w-full mx-auto" >
                    <CustomSubHeading SubHeadingClass="max-sm:text-4xl" SubHeadingText="Visit Our Showroom" />
                    <CustomDescription descriptionClass="!text-black text-center mx-auto !text-2xl !pt-0 pb-8" descriptionText="Looking to visit us in person? Use the map below to find our showroom location quickly and easily. Super Motors is conveniently located and ready to help you buy or sell quality used cars. Whether you're stopping by to browse our latest inventory or discuss a trade-in, we look forward to welcoming you!" />
                    <iframe className='mx-auto flex rounded-2xl max-w-[600px] h-[400px] w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34297.35193069136!2d75.68232847431639!3d29.159502100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d689adb1a5%3A0x6193609535d0316a!2sSuper%20Motors%20-%20Buy%20and%20Sell%20Old%20Cars!5e1!3m2!1sen!2sin!4v1747385682878!5m2!1sen!2sin" ></iframe>
                </div>
            </div>
        </>
    )
}

export default Map