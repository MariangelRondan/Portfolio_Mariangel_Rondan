import React, { useEffect } from "react";
import resume from "../assets/MyResume.svg";
import MyResume from "../assets/MariangelRondan-resume.pdf";
import styles from "./FirstView.module.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function FirstView() {
  useEffect(() => {
    const interBubble = document.getElementById("interactive");
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="main">
      <div className={styles.card}>
        <svg
          viewBox="0 0 100% 100%"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.noise}
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="6"
              stitchTiles="stitch"
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            filter="url(#noiseFilter)"
          />
        </svg>
        <div className={styles.content}>
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
                <FaGithub
                  color="white"
                  size={45}
                  style={{ cursor: "pointer" }}
                />
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
      <div className={styles.gradientBg}>
        <svg
          viewBox="0 0 100vw 100vw"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.noiseBg}
        >
          <filter id="noiseFilterBg">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              stitchTiles="stitch"
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            filter="url(#noiseFilterBg)"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.svgBlur}>
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className={styles.gradientsContainer}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div id="interactive" className={styles.interactive}></div>
        </div>
      </div>
    </div>
  );
}

export default FirstView;
