import React, { useState } from "react";
import sidebarLogo from "../assets/olas-blancas.png";

import cruz from "../assets/cruz-blanca-1.png";
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
        src={nav ? cruz : sidebarLogo}
        alt="sidebar Logo"
        className={`absolute  right-0 box-border h-16 w-16 md:hidden z-[100] ${
          nav ? "text-white" : ""
        }`}
      />

      {/* Mobile  */}
      {nav && (
        <div className="fixed w-full h-screen bg-[#148a81] space-y-4 bg-opacity-90 flex flex-col justify-center items-center z-20 text-[var(--dark)]">
          {["About", "Work", "Projects", "Skills", "Contact"].map(
            (item, index) => (
              <div
                key={index}
                onClick={() => scrollToElement(item)}
                className="w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg bg-[url(assets/water.png)] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <span className="pl-4 px-0">{item}</span>
              </div>
            )
          )}
        </div>
      )}
      {/* Web */}
      <div className="md:block fixed mt-6 md:mt-0 md:top-[25%] z-10 text-white">
        <div className="flex md:flex-col md:space-y-4 space-y-0 space-x-4 md:space-x-0 ml-0">
          {["about", "work", "projects", "skills", "contact"].map(
            (item, index) => (
              <div
                key={index}
                onClick={() => scrollToElement(item)}
                className="rounded-full p-2 cursor-pointer scale-110 ease-in duration-300 flex items-center justify-center w-10 h-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M50 10C50 10 20 40 20 60C20 75 32 90 50 90C68 90 80 75 80 60C80 40 50 10 50 10Z"
                    fill="#eaf4dc"
                  />
                </svg>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
