import React from 'react'

const CustomBtn = ({ text }) => {
    return (
        <>
            <button className='font-family-primary text-2xl font-semibold text-gray-400 border-[2px] border-black px-7 py-2.5 rounded-3xl mt-5 mx-auto flex hover:bg-black hover:text-white transition-all duration-300 ease-linear cursor-pointer'>{text}</button>
        </>
    )
}

export default CustomBtn