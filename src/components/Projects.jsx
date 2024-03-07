import React from "react";
import ProjectItem from "./ProjectItem"
import RickAndMorty from '../assets/rickandMorty.png'
import hyperMegaRed from '../assets/hyper-mega-red.png'
import jap from "../assets/e-commerce.png"
import drivers from "../assets/drivers-photo.png"

const Projects = () => {

    return (
        <div id="projects" className="max-w-[1048px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#00044]">Projects</h1>
            <p className="text-center py-8">no se que poner aqui</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem   img={hyperMegaRed} title='hyperMegaRed'/>
        <ProjectItem  img={jap} title='jap'/>
        <ProjectItem  img={drivers} title='drivers'/>
        <ProjectItem  img={RickAndMorty} title='RickAndMorty'/>
      </div>
      
      
        </div>
        
    )
}

export default Projects