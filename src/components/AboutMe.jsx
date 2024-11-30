import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MyResume from "../assets/MariangelRondan-resume.pdf";
import resume from "../assets/MyResume.svg";

import "../App.css";
const AboutMe = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "di8wv9xue" } });

  const myImage = cld.image("Mariangel-Foto");

  return (
    <div
      id="about"
      className="bg-[url('assets/-water.png')] pb-10 mt-24 max-h-98 sm:pb-24 xl:pb-0"
    >
      <div className="grid md:grid-cols-3">
        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
          <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <div className="hero-container">
              <h1 className="hero-text">ABOUT ME</h1>
            </div>
          </blockquote>
        </div>

        <div className=" bg-[var(--blanquito)] text-[var(--main-color)] h-98 flex items-center xl:flex-none">
          <div className="max-w-lg mx-auto px-4 py-6">
            <p>
              I am a software developer with a keen eye for creative solutions
              and a strong belief in giving my best in everything I do.
            </p>
            <p>
              Currently, I work as a Frontend Developer at TCS Uruguay and
              create personal projects to keep my mind inspired and innovative.
            </p>
            <p> I feel fortunate to work in a field I truly enjoy.</p>
          </div>
        </div>
        <div className="flex items-center justify-around   xl:flex-none">
          <div className="flex gap-4 flex-col md:flex-row md:gap-10 pt-6 ">
            <a
              href="https://www.linkedin.com/in/mariangel-rondan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 ease-in duration-300"
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
              className="hover:scale-110 ease-in duration-300"
            >
              <FaGithub color="white" size={45} style={{ cursor: "pointer" }} />
            </a>

            <a
              href={MyResume}
              download="MariangelRondan-resume.pdf"
              className="hover:scale-110 ease-in duration-300"
            >
              <img src={resume} alt="contact Logo" className="w-12  px-0 " />
            </a>
          </div>
          <AdvancedImage
            className="rounded-2xl w-40 md:w-56"
            cldImg={myImage}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
