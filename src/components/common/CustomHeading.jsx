import React from 'react'

const CustomHeading = ({ HeadingText }) => {
    return (
        <>
            <h1 className='text-start font-family-primary font-medium leading-[100%] max-w-[922px] text-white text-4xl sm:text-6xl'>{HeadingText}</h1>
        </>
    )
}

export default CustomHeading