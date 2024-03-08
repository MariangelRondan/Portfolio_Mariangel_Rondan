import React from "react";
import BackEnd from "./BackEnd"
import css from "../assets/css.svg"
import figma from "../assets/figma.svg"
import firebase from "../assets/firebase.svg"
import github from "../assets/github.svg"
import html from "../assets/html.svg"
import JavaScript from "../assets/javascript.svg"
import mariadb from "../assets/mariadb.svg"
import mongo from "../assets/mongo.svg"
import nodejs from "../assets/nodejs.svg"
import react from "../assets/react.svg"
import visualStudio from "../assets/visual-studio.svg"
import visualStudioCode from "../assets/visual-studioc.svg"




const Skills = () => {

    return (
        <div id="projects" className="max-w-[1048px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[var(--main-text)] mb-8">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-12 ">
        <BackEnd   img={[hyperMegaRed,jap,]} title='hyperMegaRed'/>
        <ProjectItem  img={jap} title='jap'/>
        <ProjectItem  img={drivers} title='drivers'/>
        <ProjectItem  img={RickAndMorty} title='RickAndMorty'/>
      </div>
      
      
        </div>
        
    )
}

export default Skills