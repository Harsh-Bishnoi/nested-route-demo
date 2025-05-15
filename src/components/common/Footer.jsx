import React from 'react'
import { Facebook, Insta, Linkdin, Twitter } from '../../utils/icon'
import logo from '../../assets/images/svg/nav-logo.svg';

const Footer = () => {
    return (
        <>
            <div className="bg-black py-20">
                <div className="max-w-[1140px] px-4 mx-auto">
                    <div className="flex justify-between flex-wrap">
                        <div className="max-w-[550px] w-full mb-10">
                            <img src={logo} alt="logo" />
                            <p className='text-white font-family-primary text-lg pt-5 max-w-[500px]'>Precision-engineered for those who demand more than just performance — our vehicles embody art, innovation, and legacy. Every curve, every detail, is crafted to inspire. Experience a new era of driving built on passion, power, and prestige.</p>
                            <div className="flex gap-5 items-center mt-4">
                                <a href=""><Facebook /></a>
                                <a href=""><Insta /></a>
                                <a href=""><Linkdin /></a>
                                <a href=""><Twitter /></a>
                            </div>
                        </div>
                        <div className="max-w-[300px] w-full flex justify-between flex-wrap">
                            <ul>
                                <li className='text-white font-family-primary text-2xl font-semibold mb-4'>Links</li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white' href="#">About Us</a></li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white' href="#">Services</a></li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white' href="#">Locations</a></li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white' href="#">How it Works</a></li>
                            </ul>
                            <ul>
                                <li className='text-white font-family-primary text-2xl font-semibold mb-4'>Legel</li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white' href="#">terms of use</a></li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white' href="#">privacy policy</a></li>
                                <li className='mb-3'><a className='font-family-primary text-xl font-medium text-white' href="#">cookie policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer