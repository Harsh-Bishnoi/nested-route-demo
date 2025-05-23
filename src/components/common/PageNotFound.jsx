import React from 'react'
import CustomSubHeading from './CustomSubHeading'
import Error from '../../assets/images/png/error-img.png'
import CustomDescription from './CustomDescription'
import { Link } from 'react-router-dom'
import left from '../../assets/images/svg/not-found-left-circle.svg'
import right from '../../assets/images/svg/not-found-right-circle.svg'
const PageNotFound = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen relative overflow-y-hidden">
                <img className='absolute left-0 bottom-0' src={left} alt="" />
                <img className='absolute right-0 top-0' src={right} alt="" />
                <div className="max-w-[1320px] px-4 z-1">
                    <img src={Error} alt="error-img" />
                    <CustomSubHeading SubHeadingClass="pt-[22px] !pb-0 text-4xl leading-[67px] text-center text-black" SubHeadingText="😞 Oh no. We lost this page" />
                    <div className="flex justify-center">
                        <CustomDescription descriptionClass="font-normal text-lg max-w-[550px] leading-[22px] text-center !text-black" descriptionText="We searched everywhere but couldn’t find what  you’re looking for. Let’s find a better place for you to go." />
                    </div>
                    <div className="flex justify-center">
                        <Link className='py-[15.5px] px-[30px] rounded-[14px] font-family-primary leading-[17px] border border-black hover:bg-white hover:text-black transition-all duration-200 ease-linear font-semibold text-sm outline-0 shadow-xl hover:scale-105 text-white bg-black mt-6' to="/">Back to homepage</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound