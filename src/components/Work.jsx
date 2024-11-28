import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "MEAN Stack Developer - TATA Consultancy Service",
    details:
      "I collaborate closely with multidisciplinary teams to design and develop innovative solutions using MEAN technologies (MongoDB, Express.js, AngularJS/Angular, Node.js) that meet client requirements and exceed their expectations. Additionally, I contribute to the entire software development lifecycle.",
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
    duration: "April 2021- Present",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="max-w-[1040px] mx-auto text-[var(--main-color)]  mt-10 justify-center  py-16"
    >
      <h1 className="text-4xl font-bold  text-center text-[var(--dark)] mb-8">
        {" "}
        Work{" "}
      </h1>
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
  );
};

export default Work;
