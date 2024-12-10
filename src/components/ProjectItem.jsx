import React from "react";

import { AdvancedImage } from "@cloudinary/react";
import { useNavigate } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen/index";

const ProjectItem = ({ img, title, details, link, credentials }) => {
  const navigate = useNavigate();
  const cld = new Cloudinary({ cloud: { cloudName: "di8wv9xue" } });
  const handleClick = () => {
    navigate("/project-demo", {
      state: { img, title, details, link },
    });
  };
  const cldImg = cld.image(img);
  console.log("Public ID being sent:", img);

  return (
    <div
      className="flex max-h-screen items-center justify-center"
      onClick={handleClick}
    >
      <div className="group relative items-center rounded-md justify-center overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-black transition-shadow">
        <div className="w-full hover:bg-[#403d58] hover:bg-opacity-90">
          <AdvancedImage
            className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
            cldImg={cldImg}
            alt={title}
          />
        </div>
        <div className="absolute inset-0 hover:bg-[#403d58] hover:bg-opacity-70">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[70%] group-hover:translate-y-0 transition-all">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="rounded-full py-2 px-3.5 text-sm text-white">
                Link
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
