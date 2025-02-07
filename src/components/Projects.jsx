import React from 'react'

import projectImg1 from '../assets/images/project1.jpg'

const Projects = () => {
  return (
    <div id='projects' className='my-8 bg-pink-300 py-6 lg:px-16'>
        <h2 className='text-4xl font-bold mb-6 text-center'>My Projects</h2>
        <div className='grid grid-cols-12 gap-4 bg-green-400 px-4 py-8 items-center'>
            <div className='col-span-5'>
                 <p className='text-lg font-bold mb-2'>Fundrising Site</p>
                 <h3 className='text-purple-700 text-3xl font-bold'>Crowdfunding Website</h3>
                 <p className='py-4'>This crowdfunding website is a digital platform that enables individuals, 
                    businesses, and nonprofits to raise funds for their projects, ideas, or causes. It connects fundraisers with a 
                    global community of backers who contribute small amounts to help bring visions to life</p>
                 <button className='btn mt-4 bg-gradient-to-r from-indigo-500 text-white to-pink-500 
                hover:from-teal-500 hover:to-red-500'><a href="https://crowdfunding-348db.web.app/" target='_blank'>See Live Site</a></button>   
            </div>
            <div className='col-span-7'>
                 <figure>
                    <img src={projectImg1} alt="projectImage" className='w-full h-full' />
                 </figure>
            </div>
        </div>
    </div>
  )
}

export default Projects