import React from 'react'
import CustomInput from '../common/CustomInput'
import CustomBtn from '../common/CustomBtn'

const ContactForm = () => {
    return (
        <>
            <div className="flex justify-center items-center py-30">
                <div className="max-w-[1140px] px-4 w-full mx-auto">
                    <h2 className='font-family-primary text-center text-5xl pb-8 font-semibold'>Join Us</h2>
                    <div className="flex sm:flex-row flex-col gap-3.5 mb-3.5 justify-center">
                        <CustomInput placeholder="First Name" type="text" />
                        <CustomInput placeholder="Last Name" type="text" />
                    </div>
                    <div className="flex gap-3.5 sm:flex-row flex-col mb-3.5 justify-center">
                        <CustomInput placeholder="Phone no." type="Number" />
                        <CustomInput placeholder="Email" type="email" />
                    </div>
                    <textarea className='w-full max-w-[814px] mx-auto flex justify-center min-h-[200px] border-[2px] border-black p-4 font-family-primary text-gray-400 max-h-[200px] rounded-2xl font-medium text-xl' placeholder='Your Message'></textarea>
                    <CustomBtn text="Submit" />
                </div>
            </div>
        </>
    )
}

export default ContactForm