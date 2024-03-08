import React from 'react'
import neuron1 from '../assets/neuron1.jpg'
import me from '../assets/Mariangel-Foto.png'

import { TypeAnimation } from 'react-type-animation'
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

function FirstView() {

    return(
        <div id='main'>
            <img className='w-full h-screen object-cover  ' src={neuron1} />
            <div className='w-full  h-screen  top-0 left-0 absolute bg-[#00000048]'>
            <img src={me} className='w-[200px] rounded-[600px] ml-[80%] mt-[5%] absolute'/>    
<div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
   <h1 className='sm:text-5xl text-4xl font-bold text-[#ecfcf2]'>I'm Mariangel Rondan</h1> 
   <h2 className='flex sm:text-3xl text-2xl pt-4 text-[#ecfcf2]'> <TypeAnimation  sequence={[
    'FullStack Developer',
    1000,
    'Nature Lover',
    2000,
    'Tech Enthusiactic',
    2000
    
   ]}
   wrapper='div'
   cursor={true}
   repeat={Infinity}
   style={{fontSize: '1em', paddingLeft:'5px'}} />
       </h2>
       <div className='flex justify-between pt-6 max-w-[200px] w-full' >
        <FaLinkedin  color='white' size={30}/>
<FaGithub color='white' size={30}/>
<FaInstagram color='white' size={30}/>
 
       </div>
</div>

            </div>
        </div>
    )
}

export default FirstView