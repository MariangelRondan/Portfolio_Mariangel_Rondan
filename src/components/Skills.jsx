import React from "react";
import SkillsItem from "./SkillsItem"
import css from "../assets/css.svg"
import figma from "../assets/figma.svg"
import Firebase from "../assets/firebase.svg"
import github from "../assets/github.svg"
import HTML from "../assets/html.svg"
import JavaScript from "../assets/javascript.svg"
import MariaDB from "../assets/mariadb.svg"
import MongoDB from "../assets/mongo.svg"
import Nodejs from "../assets/nodejs.svg"
import Reactjs from "../assets/react.svg"
import visualStudio from "../assets/visual-studio.svg"
import visualStudioCode from "../assets/visual-studioc.svg"
import cSharp from "../assets/c-sharp.svg"
import express from '../assets/express.svg'
import PostgreSQL from '../assets/postgresql.svg'
import dotnet from '../assets/dotnet.svg'
import Angular from '../assets/Angular.svg'
import Jira from '../assets/atlassian.svg'
import Tailwind from '../assets/tailwind.svg'

const Skills = () => {
const front ={logo:[css,figma,Reactjs, HTML,Tailwind],title:"FrontEnd"}
const back = {logo:[JavaScript,MariaDB,MongoDB,Nodejs,express,PostgreSQL],title:"BackEnd"}
const tools={logo:[Jira,github,visualStudio,visualStudioCode],title:"Tools"}
const learning ={logo:[Angular,Firebase, cSharp,dotnet],title:"Learnign"}

    return (
        <div id="skills" className="max-w-[1048px] m-auto md: p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[var(--main-text)] mb-12 ">Skills</h1>
      <div className="grid sm:grid-cols-2 gap-12 ">
        <SkillsItem   img={back} />
        <SkillsItem  img={front} />
        <SkillsItem  img={tools} />
        <SkillsItem  img={learning} />
      </div>
      
      
        </div>
        
    )
}

export default Skills