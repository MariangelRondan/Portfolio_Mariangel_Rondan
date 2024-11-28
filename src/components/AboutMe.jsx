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

        <div className=" bg-[var(--blanquito)] text-[var(--main-color)] h-98 flex items-center      xl:flex-none">
          <div className="max-w-lg mx-auto">
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
        <div className="flex items-center justify-center  mx-auto max-w-xs   xl:flex-none">
          <AdvancedImage className="   rounded-2xl  " cldImg={myImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
