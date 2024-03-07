import React, {useState} from 'react'
import sidebarLogo from '../assets/sidebar.png'
import contact from '../assets/contact-logo.png'
import projects from '../assets/project-logo.png'
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'




const SideBar = () =>{
const [nav, setNav] =  useState(false)
const handleNav= ( ) => {
    setNav(!nav)
}
    return (
        <div>
        <img onClick={handleNav} src={sidebarLogo} alt='sidebar Logo' className='absolute top-4 right-4 z-[99] box-border h-15 w-12  md:hidden'/>
        {
    nav ? (
    <div className='fixed w-full h-screen pt-20 bg-white/90 flex flex-col justify-center items-center z-20'>

        <a href='#main' className='w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <img src={projects} alt='contact Logo' className='w-[18%]  px-0 ' />
        <span className='pl-4  px-0'>Projects</span>
        </a> 
        <a href='#main' className='w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <img src={projects} alt='contact Logo' className='w-[18%]  px-0 ' />
        <span className='pl-4  px-0'>Skills</span>
        </a> 
        <a href='#main' className='w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <img src={projects} alt='contact Logo' className='w-[18%]  px-0 ' />
        <span className='pl-4  px-0'>Resume</span>
        </a> 
       
        <a href='#main' className='w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <img src={contact} alt='contact Logo' className='w-[18%]  px-0 ' />
        <span className='pl-4  px-0'>Contact me</span>
        </a>  
    </div>
) : (
    ''
)}
<div className=' md:block hidden fixed top-[25%] z-10 '>
<div className='flex flex-col'>

    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300' >
    <img src={projects} alt='contact Logo' className='w-10  px-0 ' />
    
    </a>
    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300' >
    <img src={projects} alt='contact Logo' className='w-10  px-0 ' />
    </a>
    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300' >
    <img src={projects} alt='contact Logo' className='w-10  px-0 ' />
    </a>
    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300' >
    <img src={projects} alt='contact Logo' className='w-10  px-0 ' />
    </a>
    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300' >
    <img src={contact} alt='contact Logo' className='w-16  px-0 ' />
    </a>




</div>



</div>





</div> 
    )
}

export default SideBar