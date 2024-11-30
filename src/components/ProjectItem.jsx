import React from "react";

import { AdvancedImage } from "@cloudinary/react";

const ProjectItem = ({ img, title, details, link, credentials }) => {
  return (
    <div className="flex max-h-screen items-center rounded-xl justify-center ">
      <div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-xl hover:shadow-2xl hover:shadow-black transition-shadow ">
        <div className="h-[500px]  w-auto">
          <img
            className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
            src={img}
            alt={title}
          />
          {/* <AdvancedImage className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"  cldImg={img} alt={title}/> */}
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[70%] group-hover:translate-y-0 transition-all">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <p className="text-lg  text-white mt-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {details}
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="rounded-full  py-2 px-3.5 text-sm text-white">
                Link
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="fixed bottom-16"></div>
    </div>
  );
};

export default ProjectItem;
