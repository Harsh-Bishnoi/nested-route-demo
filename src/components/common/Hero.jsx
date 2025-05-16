import { useState, useEffect } from 'react';
import logo from '../../assets/images/svg/nav-logo.svg';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <>
            <nav className='px-4'>
                <div className="max-w-[1320px] mx-auto">
                    <div className="flex justify-between items-center py-[17px]">
                        <NavLink to="/" className="flex flex-col justify-center items-center">
                            <img src={logo} alt="nav-logo" />
                            <p className='text-white font-family-primary text-center font-bold text-[20px] tracking-[2px]'>Super Motors</p>
                        </NavLink>
                        <div onClick={toggleNavbar} className="z-50 md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer">
                            <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'rotate-45 translate-y-2'}`}></span>
                            <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'opacity-0'}`}></span>
                            <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && '-rotate-45 -translate-y-2'}`}></span>
                        </div>
                        <ul id='nav-name' className={`list-unstyled flex justify-center items-center nav-link gap-[50px] xl:gap-[60px] mb-0 ${menuOpen ? "show-navbar" : ""}`}>
                            <li><NavLink className='font-family-primary text-white text-xl leading-[100%] font-semibold' to="/" activeclassname="active" >HOME</NavLink></li>
                            <li><NavLink className='font-family-primary text-white text-xl leading-[100%] font-semibold' to="/about" activeclassname="active" >About</NavLink></li>
                            <li><NavLink className='font-family-primary text-white text-xl leading-[100%] font-semibold' to="/product" activeclassname="active" >Product</NavLink></li>
                            <li><NavLink className='font-family-primary text-white text-xl leading-[100%] font-semibold' to="/contact" activeclassname="active" >Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Hero