import React from 'react'

const CustomSubHeading = ({ SubHeadingText, SubHeadingClass }) => {
    return (
        <>
            <h2 className={`font-family-primary text-center text-5xl pb-8 font-semibold text-black ${SubHeadingClass}`}>{SubHeadingText}</h2>
        </>
    )
}

export default CustomSubHeading