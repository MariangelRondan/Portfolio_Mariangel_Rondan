import React, { useState } from "react";
import sidebarLogo from "../assets/sidebar.png";

const SideBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  function scrollToElement(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (nav) {
      handleNav();
    }
  }

  return (
    <div>
      <img
        onClick={handleNav}
        src={sidebarLogo}
        alt="sidebar Logo"
        className="absolute top-4 right-4 z-[99] box-border h-15 w-12  md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen pt-20 bg-white/90 flex flex-col justify-center items-center z-20">
          <div
            onClick={() => {
              scrollToElement("about");
            }}
            className="w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span className="pl-4  px-0">About</span>
          </div>
          <div
            onClick={() => {
              scrollToElement("work");
            }}
            className="w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span className="pl-4  px-0">Work</span>
          </div>
          <div
            onClick={() => {
              scrollToElement("projects");
            }}
            className="w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span className="pl-4  px-0">Projects</span>
          </div>

          <div
            onClick={() => {
              scrollToElement("skills");
            }}
            className="w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span className="pl-4  px-0">Skills</span>
          </div>

          <div
            onClick={() => {
              scrollToElement("contact");
            }}
            className="w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span className="pl-4  px-0">Contact me</span>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className=" md:block  fixed top-[25%] z-10 text-white ">
        <div className="flex flex-col">
          <div
            onClick={() => {
              scrollToElement("about");
            }}
            className="grid grid-cols-2 group/item   rounded-full ml-4 m-2 p-2 cursor-pointer  scale-110 ease-in duration-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 100 100"
            >
              <path
                d="M50 10C50 10 20 40 20 60C20 75 32 90 50 90C68 90 80 75 80 60C80 40 50 10 50 10Z"
                fill="#A3DCE4"
              />
            </svg>
          </div>

          <div
            onClick={() => {
              scrollToElement("work");
            }}
            className="grid grid-cols-2 group/item rounded-full ml-4  m-2 p-2 cursor-pointer scale-110 ease-in duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 100 100"
            >
              <path
                d="M50 10C50 10 20 40 20 60C20 75 32 90 50 90C68 90 80 75 80 60C80 40 50 10 50 10Z"
                fill="#A3DCE4"
              />
            </svg>{" "}
          </div>
          <div
            onClick={() => {
              scrollToElement("projects");
            }}
            className="grid grid-cols-2 group/item rounded-full ml-4 m-2 p-2 cursor-pointer scale-110 ease-in duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 100 100"
            >
              <path
                d="M50 10C50 10 20 40 20 60C20 75 32 90 50 90C68 90 80 75 80 60C80 40 50 10 50 10Z"
                fill="#A3DCE4"
              />
            </svg>
          </div>
          <div
            onClick={() => {
              scrollToElement("skills");
            }}
            className="grid grid-cols-2 group/item rounded-full ml-4  m-2 p-2 cursor-pointer scale-110 ease-in duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 100 100"
            >
              <path
                d="M50 10C50 10 20 40 20 60C20 75 32 90 50 90C68 90 80 75 80 60C80 40 50 10 50 10Z"
                fill="#A3DCE4"
              />
            </svg>
          </div>
          <div
            onClick={() => {
              scrollToElement("contact");
            }}
            className="grid grid-cols-2 group/item rounded-full ml-4  m-2 p-2 cursor-pointer scale-110 ease-in duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 100 100"
            >
              <path
                d="M50 10C50 10 20 40 20 60C20 75 32 90 50 90C68 90 80 75 80 60C80 40 50 10 50 10Z"
                fill="#A3DCE4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
