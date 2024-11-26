import React, { useEffect } from "react";
import resume from "../assets/MyResume.svg";
import water from "../assets/water.png";

import MyResume from "../assets/MariangelRondan-resume.pdf";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function FirstView() {
  return (
    <div id="main">
      <img className="w-full h-screen object-cover  " src={water} />
      <div className="w-full  h-screen  top-0 left-0 absolute ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-[#ecfcf2]">
            Mariangel Rondan
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-[#ecfcf2]">
            {" "}
            <TypeAnimation
              sequence={[
                "FullStack Developer",
                1000,
                "Science Lover",
                2000,
                "Tech Enthusiactic",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.linkedin.com/in/mariangel-rondan"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:scale-110 ease-in duration-300"
            >
              <FaLinkedin
                color="white"
                size={45}
                style={{ cursor: "pointer" }}
              />
            </a>

            <a
              href="https://github.com/MariangelRondan"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:scale-110 ease-in duration-300"
            >
              <FaGithub color="white" size={45} style={{ cursor: "pointer" }} />
            </a>

            <a
              href={MyResume}
              download="MariangelRondan-resume.pdf"
              className=" hover:scale-110 ease-in duration-300"
            >
              <img src={resume} alt="contact Logo" className="w-12  px-0 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstView;
