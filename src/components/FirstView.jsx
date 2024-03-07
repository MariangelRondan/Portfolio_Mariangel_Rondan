import React from 'react'
import me from '../assets/me.jpg'
import { TypeAnimation } from 'react-type-animation'
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

function FirstView() {

    return(
        <div id='main'>
            <img className='w-full h-screen object-cover  ' src={me} />
            <div className='w-full  h-screen absolute top-0 left-0 bg-white/50'>
<div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
   <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Mariangel Rondan</h1> 
   <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'> <TypeAnimation  sequence={[
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
        <FaLinkedin   size={30}/>
<FaGithub  size={30}/>
<FaInstagram  size={30}/>
 
       </div>
</div>

            </div>
        </div>
    )
}

export default FirstView