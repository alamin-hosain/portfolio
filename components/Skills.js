import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

const Skills = () => {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full space-y-4'>
                <p className='text-orange-400 tracking-widest uppercase font-bold'>Skills</p>
                <h2>What I can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
                        <div className='flex items-center justify-between w-full'>
                            <div className='text-5xl '>
                                <FaHtml5 className='text-orange-400' />
                            </div>
                            <h3 className='text-2xl'>HTML5</h3>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
                        <div className='flex items-center justify-between w-full'>
                            <div className='text-5xl '>
                                <FaCss3Alt className='text-[#379AD6]' />
                            </div>
                            <h3 className='text-2xl'>CSS3</h3>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
                        <div className='flex items-center justify-between w-full'>
                            <div className='text-5xl '>
                                <FaJsSquare className='text-[#F7DF1E]' />
                            </div>
                            <h3 className='text-2xl'>JAVASCRIPT</h3>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
                        <div className='flex items-center justify-between w-full'>
                            <div className='text-5xl '>
                                <FaReact className='text-[#379AD6]' />
                            </div>
                            <h3 className='text-2xl'>REACT JS</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills