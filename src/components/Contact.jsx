import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='bg-pink-300  mb-6  dark:border-purple-300 dark:bg-gray-700  rounded-lg 
        shadow-lg w-full mx-auto overflow-hidden px-5 md:px-16 lg:max-w-6xl '>
            <Fade direction='down'>
                <div className='text-center pt-4 mb-4 lg:mb-0'>
                    <p className='text-lg  font-bold'>Contact Me</p>
                    <h1 className='text-4xl font-bold text-'>Let's Work Together!</h1>
                </div>
            </Fade>
            <div className='flex w-full lg:gap-14 flex-col lg:flex-row-reverse  items-center'>
                <div
                    className=' lg:w-1/2 space-y-6'
                >
                    <p className='text-lg'>I'm currently avaliable to take on new projects, so feel free
                        to send me a message about anything that you
                        want to run past me. You can contact anytime at 24/7.</p>
                    <p className='text-xl font-bold underline hover:text-purple-500'>Phone: 01813-410756</p>
                    <p className='text-xl font-bold underline hover:text-purple-500'>Email: sajjadhossain0756@gmail.com</p>
                    <p className='text-xl font-bold underline hover:text-purple-500'>Address: Chittagong,Bangladesh</p>
                    <div className="flex gap-4 pt-4">
                        <a href='https://www.linkedin.com/in/sajjad56/' target='_blank'>
                            <FaLinkedin className='text-3xl bg-green-800 text-white rounded'></FaLinkedin>
                        </a>
                        <a href='https://web.facebook.com/profile.php?id=100025394227619' target='_blank'>
                            <FaFacebook className='text-3xl bg-blue-500 text-white rounded-full'></FaFacebook>
                        </a>
                    </div>
                </div>
                <div className='w-full py-8  lg:w-1/2'>

                    <form >
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium dark:text-white text-gray-600 '
                                htmlFor='name'
                            >
                                Name
                            </label>
                            <input
                                id='name'
                                autoComplete='name'
                                name='name'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium dark:text-white text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium dark:text-white text-gray-600 '
                                htmlFor='message'
                            >
                                Message
                            </label>
                            <textarea className="w-full px-4 py-2 textarea textarea-bordered" placeholder="Bio"></textarea>
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white 
                                btn bg-gradient-to-r from-indigo-500 to-pink-500 
                              hover:from-teal-500 hover:to-red-500'
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact