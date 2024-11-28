import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import "../App.css";
const AboutMe = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "di8wv9xue" } });

  const myImage = cld.image("Mariangel-Foto");

  return (
    <div className="  bg-[url('assets/-water.png')] pb-20 sm:mt-24 max-h-98 sm:pb-24 xl:pb-0">
      <div className="grid md:grid-cols-3">
        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
          <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <div className="hero-container">
              <h1 className="hero-text">ABOUT ME</h1>
            </div>
          </blockquote>
        </div>

        <div className=" bg-[var(--blanquito)] text-[var(--main-color)] h-98 flex items-center   max-w-2xl   xl:flex-none">
          <p className="px-10">
            I'm a Full Stack Developer from Uruguay with a rich foundation in
            scientific exploration. I've always found fulfillment in discovering
            what lies beneath the surface and uncovering the "why" behind
            things. I bring this same spirit of inquiry and exploration
          </p>
        </div>
        <div className="   flex items-center justify-center  mx-auto max-w-xs   xl:flex-none">
          <AdvancedImage className="   rounded-2xl  " cldImg={myImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
