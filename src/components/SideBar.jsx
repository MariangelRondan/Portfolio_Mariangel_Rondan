import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const SideBar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const svgRefs = useRef([]);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToElement = (elementId) => {
    let element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (nav) {
      handleNav();
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    ["about", "work", "projects", "contact"].forEach((id, index) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <img
        onClick={handleNav}
        src={nav ? "/path-to-close-icon.png" : "/path-to-menu-icon.png"}
        alt="sidebar Logo"
        className={`absolute right-0 box-border h-16 w-16 md:hidden z-[100] ${
          nav ? "text-white" : ""
        }`}
      />

      {/* Mobile */}
      {nav && (
        <div className="fixed w-full h-screen bg-[#148a81] space-y-4 bg-opacity-90 flex flex-col justify-center items-center z-20 text-[var(--dark)]">
          {["about", "work", "projects", "contact"].map((item, index) => (
            <div
              key={index}
              onClick={() => scrollToElement(item.toLowerCase())}
              className="w-[75%] h-14 flex justify-center items-center rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <span className="pl-4 px-0">{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* Web */}
      <div className="md:block fixed mt-6 md:mt-0 md:top-[25%] z-10 ">
        <div className="flex md:flex-col md:space-y-4 space-y-0 space-x-4 md:space-x-0 ml-0">
          {["about", "work", "projects", "contact"].map((item, index) => (
            <div
              onClick={() => scrollToElement(item.toLowerCase())}
              key={index}
              className={`rounded-full p-2 cursor-pointer scale-110 ease-in duration-300 flex items-center justify-center w-10 
                h-10 ${activeSection === item ? "animate-explode" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 100 100"
                ref={(el) => (svgRefs.current[index] = el)}
              >
                <path
                  d="M50 10C50 10 20 40 20 60C20 75 32 90 50 90C68 90 80 75 80 60C80 40 50 10 50 10Z"
                  fill={activeSection === item ? "#148a81" : "#cccc"}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
