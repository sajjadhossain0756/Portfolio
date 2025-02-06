import React from 'react'

import logoImg from '../assets/images/S.png'

const Navbar = () => {

    const listItem = <>
        <li><a className='text-white'>Home</a></li>
        <li><a className='text-white'>About</a></li>
        <li><a className='text-white'>Skills</a></li>
        <li><a className='text-white'>Education</a></li>
        <li><a className='text-white'>Project</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {listItem}
                        </ul>
                    </div>
                    <img src={logoImg} alt="logo" className='w-44 h-12 rounded-xl' />
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {listItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-indigo-500 text-white to-pink-500">Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar