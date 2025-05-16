import React from 'react'
import { Facebook, Insta, Linkdin, Twitter } from '../../utils/icon'
import logo from '../../assets/images/svg/nav-logo.svg';

const Footer = () => {
    return (
        <>
            <div className="bg-black">
                <div className="max-w-[1140px] px-4 mx-auto py-10 sm:py-20">
                    <div className="flex justify-between flex-wrap">
                        <div className="max-w-[550px] w-full max-lg:mb-10">
                            <div className="max-w-[157px] flex flex-col justify-center items-center">
                                <img src={logo} alt="logo" />
                                <p className='text-white font-family-primary text-center font-bold text-[20px] tracking-[2px]'>Super Motors</p>
                            </div>
                            <p className='text-white font-family-primary text-lg pt-5 max-w-[500px]'>Precision-engineered for those who demand more than just performance — our vehicles embody art, innovation, and legacy. Every curve, every detail, is crafted to inspire. Experience a new era of driving built on passion, power, and prestige.</p>
                            <div className="flex gap-5 items-center mt-4">
                                <a className='hover:scale-105 transition-all duration-200 ease-linear' href="https://www.facebook.com/?_rdr" target='_blank'><Facebook /></a>
                                <a className='hover:scale-105 transition-all duration-200 ease-linear' href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'><Insta /></a>
                                <a className='hover:scale-105 transition-all duration-200 ease-linear' href="https://in.linkedin.com/" target='_blank'><Linkdin /></a>
                                <a className='hover:scale-105 transition-all duration-200 ease-linear' href="https://x.com/" target='_blank'><Twitter /></a>
                            </div>
                        </div>
                        <div className="max-w-[300px] w-full flex justify-between flex-wrap">
                            <ul>
                                <li className='text-white font-family-primary text-2xl font-semibold mb-4'>Links</li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear' href="#">About Us</a></li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear' href="#">Services</a></li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear' href="#">Locations</a></li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear' href="#">How it Works</a></li>
                            </ul>
                            <ul>
                                <li className='text-white font-family-primary text-2xl font-semibold mb-4'>Legel</li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear' href="#">terms of use</a></li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear' href="#">privacy policy</a></li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear' href="#">cookie policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-white border"></div>
                <p className='py-4 text-white font-family-primary text-center text-base px-2'>Ⓒ 2025 CarDeal India Pvt Ltd. All rights reserved</p>
            </div>
        </>
    )
}

export default Footer