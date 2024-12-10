import React from "react";
import WorkItem from "./WorkItem";
import { Cloudinary } from "@cloudinary/url-gen";

const data = [
  {
    year: 2024,
    title: "MEAN Stack Developer - TATA Consultancy Service",
    details:
      "Designed, developed, and optimized key features for one of the largest web applications of a globally recognized brand, leveraging Angular for scalable and high-performance solutions. Collaborated closely with designers, project managers, and cross-functional engineering teams to translate creative concepts into production-ready deliverables, delivering value to clients and stakeholders while ensuring alignment with business objectives and technical excellence.",
    duration: "April 2024- Present",
  },
  {
    year: 2023,
    title: "FullStack Teaching Assistant - Henry",
    details:
      "Coordinating students to seamlessly integrate into the study team, providing theoretical guidance in technologies like JavaScript, algorithms, CSS, HTML, React, Redux, Webpack, Node.js, SQL, Express, and more, while actively supporting exercise resolution and fostering group collaboration through Pair Programming",
    duration: "November 2023- Present",
  },
  {
    year: 2021,
    title: "Oil Refinery Operator - ANCAP",
    details:
      "I played a critical role in ensuring its seamless functionality by monitoring a vast array of intricate values and qualities. My primary responsibilities included maintaining a vigilant eye on various parameters to guarantee optimal performance and taking immediate action to address any deviations. This hands-on experience equipped me with valuable skills in problem-solving, fostering effective teamwork, and adeptly managing challenging situations, particularly those involving potential hazards. My role not only demanded technical expertise but also a keen attention to detail and a commitment to the highest standards of safety and efficiency.",
    duration: "April 2021- April 2023",
  },
];

const Work = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "di8wv9xue" } });
  const bg = cld.image("-water").toURL();
  return (
    <div id="work" className="mx-auto text-[var(--blanquito)]  mt-32">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-cover bg-center "
      >
        <h1 className="text-4xl text-center  md:text-6xl font-bold py-5">
          Work
        </h1>
      </div>

      <div className="max-w-[1040px] bg-white/10 backdrop-blur-lg shadow-outline mx-auto py-8 md:mt-12 ">
        {data.map((item, id) => (
          <WorkItem
            key={id}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
