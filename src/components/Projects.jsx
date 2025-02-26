import React from 'react'

import projectImg1 from '../assets/images/project1.jpg'
import projectImg2 from '../assets/images/project2.png'
import projectImg3 from '../assets/images/project3.jpg'
import { Fade } from 'react-awesome-reveal'

const Projects = () => {
    return (
        <div id='projects' className='my-8 bg-pink-300 py-6 px-5 lg:px-16 rounded-lg'>
            <h2 className='text-4xl font-bold mb-6 text-center'>My Projects</h2>

            {/* project one start here */}
            <div className='grid grid-cols-12 gap-4 bg-green-400 px-4 py-8 items-center rounded-lg'>
                <Fade direction='down' className='col-span-12 lg:col-span-5'>
                    <div >
                        <p className='text-lg font-bold mb-2'>Fundrising Site</p>
                        <h3 className='text-purple-700 text-3xl font-bold'>Crowdfunding Website</h3>
                        <p className='py-4'>This crowdfunding website is a digital platform that enables individuals,
                            businesses, and nonprofits to raise funds for their projects, ideas, or causes. It connects fundraisers with a
                            global community of backers who contribute small amounts to help bring visions to life</p>
                        <button className='btn mt-4 bg-gradient-to-r from-indigo-500 text-white to-pink-500 
                              hover:from-teal-500 hover:to-red-500'>
                            <a href="https://crowdfunding-348db.web.app/" target='_blank'>See Live Site</a>
                        </button>
                        <button
                            onClick={() => document.getElementById('my_modal_5').showModal()}
                            className='btn mt-4 bg-gradient-to-r hover:from-indigo-500 text-white 
                        hover:to-pink-500 from-teal-500 to-red-500 w-[130px] ml-3'>
                            Details
                        </button>
                    </div>
                </Fade>
                <Fade direction='down' className='col-span-12 lg:col-span-7'>
                    <div >
                        <figure>
                            <img src={projectImg1} alt="projectImage1" className='w-full h-full rounded' />
                        </figure>
                    </div>
                </Fade>
            </div>
            {/* project two starts here */}
            <div className='grid grid-cols-12 gap-4 bg-green-400 px-4 py-8 items-center rounded-lg mt-6'>
                <Fade direction='left' className='col-span-12 lg:col-span-5'>
                    <div >
                        <p className='text-lg font-bold mb-2'>Business-managed Site</p>
                        <h3 className='text-purple-700 text-3xl font-bold'>Lost & Found Website</h3>
                        <p className='py-4'>This Lost and Found website is a digital platform that helps individuals
                            and organizations report, track, and recover lost items. It serves as a community-driven or business-managed hub where people can
                            post about missing or found belongings and connect with rightful owners.</p>
                        <button className='btn mt-4 bg-gradient-to-r from-indigo-500 text-white to-pink-500 
                hover:from-teal-500 hover:to-red-500'><a href="https://lost-and-found-db5b7.web.app/" target='_blank'>See Live Site</a></button>
                    </div>
                </Fade>
                <Fade direction='right' className='col-span-12 lg:col-span-7'>
                    <div >
                        <figure>
                            <img src={projectImg2} alt="projectImage2" className='w-full h-full rounded' />
                        </figure>
                    </div>
                </Fade>
            </div>
            {/* project three starts here */}
            <div className='grid grid-cols-12 gap-4 bg-green-400 px-4 py-8 items-center rounded-lg mt-6'>
                <Fade direction='up' className='col-span-12 lg:col-span-5'>
                    <div >
                        <p className='text-lg font-bold mb-2'>Articles Site</p>
                        <h3 className='text-purple-700 text-3xl font-bold'>Pulse Of The Nation</h3>
                        <p className='py-4'>This Pulse of the Nations is a dynamic article-based platform that brings you
                            insightful, thought-provoking, and engaging content from around the world. Our mission is
                            to inform, inspire, and connect readers with diverse
                            perspectives, covering a wide range of topics that shape societies and cultures.</p>
                        <button className='btn mt-4 bg-gradient-to-r from-indigo-500 text-white to-pink-500 
                hover:from-teal-500 hover:to-red-500'><a href="https://batch10-assignment12.web.app/" target='_blank'>See Live Site</a></button>
                    </div>
                </Fade>
                <Fade direction='up' className='col-span-12 lg:col-span-7'>
                    <div >
                        <figure>
                            <img src={projectImg3} alt="projectImage2" className='w-full h-full rounded' />
                        </figure>
                    </div>
                </Fade>
            </div>
            {/* modal one start here */}
            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box bg-gradient-to-r
                 from-indigo-500 text-white to-pink-500 hover:from-teal-500 hover:to-red-500 ">
                        <figure>
                            <img src={projectImg1} alt="project1" className='rounded' />
                        </figure>
                        <h3 className="font-bold text-2xl pt-3">Crowdfunding Website</h3>
                        <p className="py-3 font-bold text-black hover:text-white"><span className='text-xl'>Used Technology:</span> HTML,CSS,Java Script,React,Node JS,Express JS,MongoDB,Firebase</p>
                        <p className=' text-black'><span className='text-xl font-bold'>Live Link: </span> 
                            <a href="https://crowdfunding-348db.web.app/" target='_blank' className='underline text-lg'>
                             https://crowdfunding-348db.web.app/</a> </p>
                            <p className=' text-black pt-2'><span className='text-xl font-bold'>Github Link: </span> 
                            <a href="https://github.com/sajjadhossain0756/b10-a10-client-side-sajjadhossain0756" target='_blank' className='underline text-lg'> 
                             https://github.com/sajjadhossain0756</a> </p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default Projects