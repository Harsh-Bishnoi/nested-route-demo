import React from 'react'
import { NavLink } from 'react-router-dom'
import CustomSubHeading from './common/CustomSubHeading'

const ContactLinks = () => {
    return (
        <>
            <div className="flex justify-center items-center pt-10 sm:pt-20 md:pt-30 lg:pt-32">
                <div className="max-w-[1140px] px-4 w-full mx-auto">
                    <CustomSubHeading SubHeadingText="Join Us" />
                    <div className="flex gap-5 pl-5 pb-8">
                        <NavLink activeclassname="active" to="/contact/form" className="font-family-primary font-semibold text-2xl text-black">Form</NavLink>
                        <NavLink activeclassname="active" to="/contact/link" className="font-family-primary font-semibold text-2xl text-black">Link 2</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactLinks