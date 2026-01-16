import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { logo } from "../assets/images";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header transition-all duration-300 ${scrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-transparent'}`}>
            <NavLink to='/' className="transform hover:scale-110 transition-transform duration-300">
                <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink
                    to='/about'
                    className={({ isActive }) =>
                        `transition-all duration-300 transform hover:scale-105 hover:shadow-lg px-4 py-2 rounded-lg ${isActive ? "text-white bg-blue-600 shadow-md" : "text-slate-800 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white"}`
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to='/projects'
                    className={({ isActive }) =>
                        `transition-all duration-300 transform hover:scale-105 hover:shadow-lg px-4 py-2 rounded-lg ${isActive ? "text-white bg-blue-600 shadow-md" : "text-slate-800 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white"}`
                    }
                >
                    Projects
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;