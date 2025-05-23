import React from 'react'

const CustomDescription = ({ descriptionText, descriptionClass }) => {
    return (
        <>
            <p className={`font-family-primary font-medium leading-[120%] pt-5 max-w-[822px] text-white text-2xl sm:text-3xl ${descriptionClass}`}>{descriptionText}</p>
        </>
    )
}

export default CustomDescription