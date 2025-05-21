import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CARS_DATA } from '../utils/helper';
import CustomSubHeading from './common/CustomSubHeading';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
const CarsDetail = () => {
    const { id } = useParams();
    const car = CARS_DATA.find(item => item.id.toString() === id);

    if (!car) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-black text-white">
                <p className="font-family-primary font-bold text-5xl">😞 oh! Car Not Found</p>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center bg-black min-h-screen py-10 sm:py-20 md:py-30 lg:py-32 flex-col">
            <div className="max-w-[1140px] px-4 w-full">
                <CustomSubHeading SubHeadingClass="text-white" SubHeadingText="Car Details" />
                <div
                    className="w-full max-w-[800px] mx-auto border rounded-lg p-6 text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-white"
                    style={{ background: 'linear-gradient(135deg, #000000, #1a1a1a)' }}  >
                    <img className="w-full object-cover rounded" src={car.img} alt={car.name} />
                    <h3 className='font-family-primary text-2xl font-medium pt-3'>Name: {car.name}</h3>
                    <p className='font-family-primary text-xl font-medium pt-2'>Type: {car.type}</p>
                    <p className='font-family-primary text-xl font-medium pt-2'>Brand: {car.brand}</p>
                    <p className='font-family-primary text-xl font-medium pt-2'>Fuel Type: {car.fuelType}</p>
                    <p className='font-family-primary text-xl font-medium pt-2'>Features: {car.features}</p>
                </div>
                <CustomSubHeading SubHeadingClass="pt-10 text-white" SubHeadingText="Car Images" />
                <Swiper className='mt-10'
                    slidesPerView={1}
                    autoplay={{
                        delay: 1500,
                    }}
                    loop={true}
                    spaceBetween={10}
                    modules={[Autoplay]}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}>
                    <SwiperSlide> {car.img_1 && <img className='max-lg:px-3 w-full lg:max-w-[335px]' src={car.img_1} alt="car img 1" />}</SwiperSlide>
                    <SwiperSlide>
                        {car.img_2 && <img className='max-lg:px-3 w-full lg:max-w-[335px]' src={car.img_2} alt="car img 2" />}
                    </SwiperSlide>
                    <SwiperSlide>
                        {car.img_3 && <img className='max-lg:px-3 w-full lg:max-w-[335px]' src={car.img_3} alt="car img 3" />}
                    </SwiperSlide>
                    <SwiperSlide>
                        {car.img_4 && <img className='max-lg:px-3 w-full lg:max-w-[335px]' src={car.img_4} alt="car img 4" />}
                    </SwiperSlide>
                    <SwiperSlide>
                        {car.img_5 && <img className='max-lg:px-3 w-full lg:max-w-[335px]' src={car.img_5} alt="car img 5" />}
                    </SwiperSlide>
                </Swiper>
                <Link
                    className='font-family-primary text-2xl font-semibold border-[2px] text-white max-w-[145px] border-white px-7 py-2.5 rounded-3xl mt-8 mx-auto flex hover:scale-105 transition-all duration-300 ease-linear'
                    to="/product">
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default CarsDetail;
