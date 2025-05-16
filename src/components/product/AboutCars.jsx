import React from 'react'
import { CARS_DATA } from '../../utils/helper'
import { Link } from 'react-router-dom'

const AboutCars = () => {
    return (
        <>
            <div className="flex justify-center items-center bg-black">
                <div className="flex items-center justify-center py-10 sm:py-20 md:py-30 lg:py-32">
                    <div className="max-w-[1140px] lg:px-4 w-full">
                        <h2 className='font-family-primary text-5xl text-center font-semibold  text-white pb-8'>Car Details</h2>
                        <div className="flex flex-wrap justify-between gap-y-6">
                            {CARS_DATA.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full max-w-[350px] mx-auto sm:w-[48%] lg:w-[32%] border rounded-lg p-4 text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-white"
                                    style={{ background: 'linear-gradient(135deg, #000000, #1a1a1a)' }}
                                >
                                    <img className="w-full object-cover rounded" src={item.img} alt="car-img" />
                                    <h3 className='font-family-primary text-2xl font-medium pt-3'>Name : {item.name}</h3>
                                    <p className='font-family-primary text-xl font-medium pt-2'>Type : {item.type}</p>
                                    <p className='font-family-primary text-xl font-medium pt-2'>Brand : {item.brand}</p>
                                    <p className='font-family-primary text-xl font-medium pt-2'>Fuel Type : {item.fuelType}</p>
                                    <p className='font-family-primary text-xl font-medium pt-2'>Features : {item.features}</p>
                                </div>
                            ))}
                            <Link className='font-family-primary text-2xl font-semibold border-[2px] text-white border-white px-7 py-2.5 rounded-3xl mt-5 mx-auto flex hover:scale-105 transition-all duration-300 ease-linear' to="/product">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCars