import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FaCss3, FaHtml5, FaNode, FaReact } from 'react-icons/fa'
import { IoLogoFirebase } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiJavascript, SiMongodb } from 'react-icons/si'

const Skills = () => {
    return (
        <div className='my-8 bg-green-400 p-4 lg:px-16 rounded-lg'>
            <h2 className='text-4xl font-bold text-center mb-4'>My Skills</h2>

            <div className='grid gap-4 grid-cols-2 lg:grid-cols-4'>
                <Fade direction='down'>
                    <div className='flex flex-col gap-2 items-center bg-gradient-to-r from-indigo-400 text-white to-pink-400 
                    hover:from-teal-300 hover:to-red-500 p-6 rounded'>
                        <FaHtml5 className='text-6xl text-orange-500 '></FaHtml5>
                        <p className='text-3xl font-bold text-white'>HTML</p>
                    </div>
                </Fade>
                <Fade direction='down'>
                    <div className='flex flex-col gap-2 items-center bg-gradient-to-r from-teal-400 text-white to-red-400 
                    hover:from-indigo-400 hover:to-pink-300 rounded p-6'>
                        <FaCss3 className='text-6xl text-blue-500 '></FaCss3>
                        <p className='text-3xl font-bold text-white'>CSS</p>
                    </div>
                </Fade>
                <Fade direction='down'>
                    <div className='flex flex-col gap-2 items-center bg-gradient-to-r from-indigo-400 text-white to-pink-400 
                    hover:from-teal-300 hover:to-red-500 p-6 rounded'>
                        <SiJavascript className='text-6xl bg-black text-orange-500 '></SiJavascript>
                        <p className='text-3xl font-bold text-white'>Java Script</p>
                    </div>
                </Fade>
                <Fade direction='down'>
                    <div className='flex flex-col gap-2 items-center bg-gradient-to-r from-teal-400 text-white to-red-400 
                    hover:from-indigo-400 hover:to-pink-300 rounded p-6'>
                        <FaReact className='text-6xl text-blue-500 bg-black/90 p-1'></FaReact>
                        <p className='text-3xl font-bold text-white'>React</p>
                    </div>
                </Fade>
                <Fade direction='up'>
                    <div className='flex flex-col gap-2 items-center bg-gradient-to-r from-teal-400 text-white to-red-400 
                    hover:from-indigo-400 hover:to-pink-300 rounded p-6'>
                        <RiTailwindCssFill className='text-6xl bg-black text-teal-500 p-1'></RiTailwindCssFill>
                        <p className='text-3xl font-bold text-white'>Tailwind</p>
                    </div>
                </Fade>
                <Fade direction='up'>
                    <div className='flex flex-col gap-2 items-center bg-gradient-to-r from-indigo-400 text-white to-pink-400 
                    hover:from-teal-300 hover:to-red-500 p-6 rounded'>
                        <IoLogoFirebase className='text-6xl bg-black text-orange-500 p-1'></IoLogoFirebase>
                        <p className='text-3xl font-bold text-white'>Firebase</p>
                    </div>
                </Fade>
                <Fade direction='up'>
                    <div className='flex flex-col gap-2 items-center bg-gradient-to-r from-teal-400 text-white to-red-400 
                    hover:from-indigo-400 hover:to-pink-300 rounded p-6'>
                        <FaNode className='text-6xl bg-black text-teal-500 p-2'></FaNode>
                        <p className='text-3xl font-bold text-white'>Node Js</p>
                    </div>
                </Fade>
                <Fade direction='up'>
                    <div className='flex flex-col gap-2 items-center bg-gradient-to-r from-indigo-400 text-white to-pink-400 
                    hover:from-teal-300 hover:to-red-500 p-6 rounded'>
                        <SiMongodb className='text-6xl bg-black text-green-500 p-1'></SiMongodb>
                        <p className='text-3xl font-bold text-white'>MongoDB</p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Skills