import React from 'react';
import { CARS_DATA } from '../../utils/helper';
import { Link } from 'react-router-dom';
import CustomSubHeading from '../common/CustomSubHeading';

const Cars = () => {
    return (
        <div className="flex items-center justify-center py-10 sm:py-20 md:py-30 lg:py-32">
            <div className="max-w-[1140px] px-4 w-full">
                <h2 className='font-family-primary text-5xl text-center font-semibold text-black pb-8'></h2>
                <CustomSubHeading SubHeadingText="Our Products" />
                <div className="flex flex-wrap justify-between gap-y-6">
                    {CARS_DATA.map((item, index) => (
                        <div key={index} className="w-full sm:w-[48%] lg:w-[32%] flex justify-center" >
                            <div className="relative group w-full max-w-[360px] rounded-lg overflow-hidden">
                                <img className="w-full object-cover" src={item.img} alt="car-img"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                                    <Link className='font-family-primary text-white text-xl leading-[100%] relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear' to="/aboutCar">About Car</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cars;
