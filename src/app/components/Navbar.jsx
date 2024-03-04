"use client";
import Link from 'next/link';
import React,{ useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import {XmarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import NavLink from './NavLink';


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">H.S
                </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"><Bars3Icon className="h-5 w-5" /></button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"><XMarkIcon className="h-5 w-5"/></button>
                        )
                    }
                </div>
                <div className ="menu hidden md:block md:w-auto" id="navbar">
                    <ul className = "flex p-4 md:p-0 md:flex row md:space-x-8">
                        <li><Link href={"#about"} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">About
                            </Link>
                        </li>
                        <li><Link href={"#contact"} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Contact
                            </Link>
                        </li>
                        <li><Link href={"#projects"} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={NavLink} /> :null}
        </nav>
    );
};

export default Navbar;