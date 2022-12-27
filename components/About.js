import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16 px-4'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2 space-y-4 text-gray-600 mb-20 md:mb-0'>
                    <p className='uppercase tracking-widest text-orange-400 font-bold'>About</p>
                    <h2>Who I am</h2>
                    <p>// I am not Your Normal Developer</p>
                    <p>I am a Front-End Web Developer located In Bangladesh. I am passionate about creating intuitive, user friendly, dynamic web applications.</p>
                    <p>I am well-organized person. I love outdoor activities. Specially passionate about Running and Hiking.</p>
                    <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
                    <p>Here are a few technologies I’ve been working with recently:
                        Javascript (ES6+)
                        React Js
                        Node Js
                        Express Js
                        Mongo DB
                        Firebase
                    </p>
                    <p className='underline cursor-pointer text-orange-400'>Check Out My Latest Projects</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-110 transition-transform duration-200 ease-in '>
                    <Image src='/../public/assets/alamin.png' width={400} height={400} className='rounded-xl ring ring-orange-400'></Image>
                </div>
            </div>
        </div>
    )
}

export default About