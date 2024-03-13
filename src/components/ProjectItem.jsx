import React from "react";


const ProjectItem = ({img, title, details,link,credentials}) => {

    return (
        <div className="relative flex flex-col items-center justify-center h-auto w-full shadow-xl  shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#ff4719] ">
            <img  src={img} alt="/"  className="rounded-xl group-hover:opacity-10"/>
            <div className="hidden group-hover:block absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <h3 className="text-2xl m-2 font-bold text-white trancking-wider flex-start">
                    {title}
                </h3>
                <p className="text-center m-2">{credentials? credentials : "Click on the link to know more"}</p>
           <a href={link}  target='_blank' rel='noopener noreferrer' >
            <p className="text-center p-3 rounded-lg bg-white text-[var(--main-text)] font-bold cursor-pointer text-lg ">Link</p>
           </a>
            </div>
            <p className=" m-6 text-balance text-center  text-[var(--main-text)]  ">{details}</p>
        </div>
    )
}

export default ProjectItem