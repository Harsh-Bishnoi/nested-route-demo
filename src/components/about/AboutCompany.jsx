import React from 'react'
import CustomSubHeading from '../common/CustomSubHeading'
import CustomDescription from '../common/CustomDescription'


const AboutCompany = () => {
    return (
        <>
            <div className="flex justify-center items-center py-10 sm:py-20 md:py-30 lg:py-32">
                <div className="max-w-[1140px] mx-auto w-full px-4">
                    <CustomSubHeading SubHeadingClass="text-start leading-[130%] !max-sm:pb-4 max-sm:text-3xl max-w-[870px] max-md:text-4xl" SubHeadingText="Trusted by Thousands – Car Deal Name Makes Every Drive Special" />
                    <CustomDescription descriptionClass="!text-black !w-full !pt-0" descriptionText="Car Deal Name is a trusted car dealership committed to delivering quality, transparency, and customer satisfaction. We offer a wide selection of new and pre-owned vehicles to suit every need and budget. Our goal is to make your car-buying journey smooth, honest, and completely satisfying. With expert guidance and dependable service, we’re here to help you drive away in confidence — because every journey deserves a great start." />
                </div>
            </div>
        </>
    )
}

export default AboutCompany