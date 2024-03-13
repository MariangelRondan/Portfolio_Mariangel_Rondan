import React, {useState} from 'react'
import sidebarLogo from '../assets/sidebar.png'
// import contact from '../assets/contact-logo.png'
import projects from '../assets/project-logo.png'
import resume from "../assets/MyResume.svg"
import Work from "../assets/Work.svg"
import Projects from "../assets/Projects.svg"
import Contact from "../assets/ContactMe.svg"
import About from "../assets/About_Me.svg"
import skills from "../assets/skills.svg"



const SideBar = () =>{
const [nav, setNav] =  useState(false)
const handleNav= ( ) => {
    setNav(!nav)
}
function scrollToElement(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    if(nav){
        handleNav()
    }
}



    return (
        <div>
        <img onClick={handleNav} src={sidebarLogo} alt='sidebar Logo' className='fixed top-4 right-4 z-[99] box-border h-15 w-12 md:hidden cursor-pointer'/>
        {
    nav ? (
    <div className='fixed w-full h-screen pt-20 bg-white/90 flex flex-col justify-center items-center z-20'>

        <div onClick={()=>{scrollToElement("about")}} className='w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <img src={About} alt='contact Logo' className='w-10  px-0  ' />
        <span className='pl-4  px-0'>About</span>
        </div> 
        <div onClick={()=>{scrollToElement("work")}} className='w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <img src={Work} alt='contact Logo' className='w-10  px-0 ' />
        <span className='pl-4  px-0'>Work</span>
        </div> 
        <div onClick={()=>{scrollToElement("projects")}} className='w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <img src={Projects} alt='contact Logo' className='w-10  px-0 '/>
        <span className='pl-4  px-0'>Projects</span>
        </div> 
       
        
        <div onClick={()=>{scrollToElement("skills")}} className='w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <img src={skills} alt='contact Logo' className='w-10  px-0 '/>
        <span className='pl-4  px-0'>Skills</span>
        </div>  
       
        <div onClick={()=>{scrollToElement("contact")}} className='w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <img src={Contact} alt='contact Logo' className='w-10  px-0 '/>
        <span className='pl-4  px-0'>Contact me</span>
        </div>  

    </div>
) : (
    ''
)}
<div className=' md:block hidden fixed top-[25%] z-10 text-white '>
<div className='flex flex-col'>

    <div onClick={()=>{scrollToElement("about")}} className='grid grid-cols-2 group/item   rounded-full ml-4 m-2 p-2 cursor-pointer hover:bg-[#e9a47a] scale-110 ease-in duration-300 ' >
    <img src={About} alt='contact Logo' className='w-10  px-0  ' />
    <p className='group/edit invisible group-hover/item:visible mt-2'>About me</p>
    </div>

    <div  onClick={()=>{scrollToElement("work")}} className='grid grid-cols-2 group/item rounded-full ml-4  m-2 p-2 cursor-pointer hover:bg-[#e9a47a] scale-110 ease-in duration-300' >
    <img src={Work} alt='contact Logo' className='w-10  px-0 ' />
    <p className='group/edit invisible group-hover/item:visible mt-2'>Work</p>

    </div>
    <div  onClick={()=>{scrollToElement("projects")}} className='grid grid-cols-2 group/item rounded-full ml-4 m-2 p-2 cursor-pointer hover:bg-[#e9a47a] scale-110 ease-in duration-300' >
    <img src={Projects} alt='contact Logo' className='w-10  px-0 '/>
    <p className='group/edit invisible group-hover/item:visible mt-2'>Projects</p>

    </div>
    <div  onClick={()=>{scrollToElement("skills")}} className='grid grid-cols-2 group/item rounded-full ml-4  m-2 p-2 cursor-pointer hover:bg-[#e9a47a] scale-110 ease-in duration-300' >
    <img src={skills} alt='contact Logo' className='w-10  px-0 '/>
    <p className='group/edit invisible group-hover/item:visible mt-2 px-0 '>Skills</p>

    </div>
    <div  onClick={()=>{scrollToElement("contact")}} className='grid grid-cols-2 group/item rounded-full ml-4  m-2 p-2 cursor-pointer hover:bg-[#e9a47a] scale-110 ease-in duration-300' >
    <img src={Contact} alt='contact Logo' className='w-10  px-0 '/>
    <p className='group/edit invisible group-hover/item:visible mt-2 px-0 '>Contact me</p>

    </div>
    





</div>



</div>





</div> 
    )
}

export default SideBar