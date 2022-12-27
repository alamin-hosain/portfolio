import Link from 'next/link'
import React, { useState } from 'react'
import { Bars3BottomRightIcon, BeakerIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }


    const menuItem = <>
        <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:underline decoration-2 decoration-orange-400 hover:font-bold hover:scale-110 transition-transform duration-500 ease-out'>Home</li>
        </Link>
        <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:underline decoration-2 decoration-orange-400 hover:font-bold hover:scale-110 transition-transform duration-500 ease-out'>About</li>
        </Link>
        <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:underline decoration-2 decoration-orange-400 hover:font-bold hover:scale-110 transition-transform duration-500 ease-out'>Skills</li>
        </Link>
        <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:underline decoration-2 decoration-orange-400 hover:font-bold hover:scale-110 transition-transform duration-500 ease-out'>Projects</li>
        </Link>
        <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:underline decoration-2 decoration-orange-400 hover:font-bold hover:scale-110 transition-transform duration-500 ease-out'>Contact</li>
        </Link>
    </>
    return (
        <nav className='fixed w-full h-16 shadow-md z-[100]'>
            <div className='flex justify-between items-center w-full px-2 2xl:px-16'>
                <h1>Alamin</h1>
                <div>
                    <ul className='hidden md:flex'>
                        {menuItem}
                    </ul>
                    <div className='md:hidden' onClick={handleNav}>
                        <Bars3BottomRightIcon className='h-8 w-8 cursor-pointer' />
                    </div>
                </div>
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''} onClick={handleNav}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div className='w-full flex justify-between items-center'>
                        <h1>Alamin</h1>
                        <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300' onClick={handleNav}>
                            <XMarkIcon className='w-6 h-6 ' />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build something great together</p>
                    </div>

                    <div className=''>
                        <ul className='flex flex-col space-y-8 pt-10 -ml-10'>{menuItem}</ul>
                    </div>

                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[]'>Let's Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[89%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaTwitter />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar