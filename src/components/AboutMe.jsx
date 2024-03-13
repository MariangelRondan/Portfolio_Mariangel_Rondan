import React from "react";
import neuron1 from '../assets/neuron1.jpg'
import me from '../assets/Mariangel-Foto.png'
import resume from "../assets/MyResume.svg"
import MyResume from "../assets/MariangelRondan-resume.pdf"

import { TypeAnimation } from 'react-type-animation'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const AboutMe = () => {

    return (
      
        <div id="about" className='max-w-[700px]  h-screen  bg-[#e9a47a] mt-[10%] lg:mt-[5%]'>
                <h1 className="text-4xl  font-bold   text-center text-[var(--main-text)] lg:ml-[75%] pt-12">About Me</h1>
                <img src={me} className='w-[200px]  sm:ml-10 mt-24   rounded-[600px] md:ml-[60%] md:w-[200px]  lg:w-[300px] absolute'/>    
<div className='max-w-[700px] ml-52   flex mt-56 lg:items-start  '>

<p className='sm:text-lg sm:max-w-[800px] sm:mb-80  w-full text-stone-600 md:text-2xl '>
  Hi, I'm Mariangel, a Full Stack Developer from Uruguay with a background in chemistry studies. I thrive on challenges and enjoy tackling new opportunities in the world of development. In my free time I enjoy dancing and finding tranquility through meditation.
</p>

   
  
</div>

    </div>
     
    )
}

export default AboutMe