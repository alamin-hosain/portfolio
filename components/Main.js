import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const Main = () => {
    return (
        <main className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div className=' space-y-4'>
                    <p className='uppercase tracking-wider text-sm'>Let's Build Something Together</p>
                    <h1>HI, I'm <span className='text-orange-400'>Alamin</span></h1>
                    <h1>A MERN Stack Developer</h1>
                    <p className='text-gray-600 max-w-[95%] md:max-w-[70%] m-auto'>I am experience in creating web-based projects using React Js, Next Js, Express Js, MongoDB and Firebase. I am skilled at building things for the internet and enjoy bringing ideas to life on the web</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[89%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaTwitter />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main