import React from 'react'

const CustomInput = ({ type, placeholder, inputClass }) => {
    return (
        <>
            <input className={`sm:max-w-[400px] rounded-2xl font-medium text-xl w-full h-[58px] border-[2px] border-black px-4 font-family-primary text-gray-400 ${inputClass}`} type={type} placeholder={placeholder} />
        </>
    )
}

export default CustomInput