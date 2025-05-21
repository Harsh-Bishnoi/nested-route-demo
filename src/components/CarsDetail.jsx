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
                <p className="text-4xl sm:text-5xl font-semibold font-family-primary">😞 Oh no! Car Not Found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 py-10 sm:py-16 px-4 flex flex-col items-center">
            <div className="w-full max-w-[1140px]">
                <CustomSubHeading SubHeadingClass="text-white" SubHeadingText="Car Details" />
                <div className="bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-gray-700 rounded-xl p-6 md:p-8 shadow-xl transition hover:shadow-white/20 mx-auto max-w-4xl text-white">
                    <img className="w-full rounded-lg object-cover" src={car.img} alt={car.name} />
                    <div className="mt-6 space-y-3">
                        <h3 className="text-3xl font-semibold">{car.name}</h3>
                        <p className="text-lg">🚗 <span className="font-medium">Type:</span> {car.type}</p>
                        <p className="text-lg">🏷️ <span className="font-medium">Brand:</span> {car.brand}</p>
                        <p className="text-lg">⛽ <span className="font-medium">Fuel Type:</span> {car.fuelType}</p>
                        <p className="text-lg">✨ <span className="font-medium">Features:</span> {car.features}</p>
                    </div>
                </div>
                <CustomSubHeading SubHeadingClass="pt-12 text-white" SubHeadingText="Car Images" />
                <Swiper
                    className="mt-8"
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 1500 }}
                    spaceBetween={20}
                    modules={[Autoplay]}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }}
                >
                    {car.img_1 && (
                        <SwiperSlide>
                            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-white/30 transition">
                                <img className="w-full h-60 object-cover" src={car.img_1} alt="Car img 1" />
                            </div>
                        </SwiperSlide>
                    )}
                    {car.img_2 && (
                        <SwiperSlide>
                            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-white/30 transition">
                                <img className="w-full h-60 object-cover" src={car.img_2} alt="Car img 2" />
                            </div>
                        </SwiperSlide>
                    )}
                    {car.img_3 && (
                        <SwiperSlide>
                            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-white/30 transition">
                                <img className="w-full h-60 object-cover" src={car.img_3} alt="Car img 3" />
                            </div>
                        </SwiperSlide>
                    )}
                    {car.img_4 && (
                        <SwiperSlide>
                            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-white/30 transition">
                                <img className="w-full h-60 object-cover" src={car.img_4} alt="Car img 4" />
                            </div>
                        </SwiperSlide>
                    )}
                    {car.img_5 && (
                        <SwiperSlide>
                            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-white/30 transition">
                                <img className="w-full h-60 object-cover" src={car.img_5} alt="Car img 5" />
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className="flex justify-center mt-10">
                    <Link
                        to="/product"
                        className="px-6 py-3 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-transform transform hover:scale-105"
                    >  ← Go Back </Link>
                </div>
            </div>
        </div>
    );
};

export default CarsDetail;
