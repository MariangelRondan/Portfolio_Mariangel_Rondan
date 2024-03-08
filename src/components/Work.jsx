import React from "react";
import WorkItem from "./WorkItem";


const data = [{year: 2024,
    title: "BackEnd Developer Trainee - Shop Online New York",
details: "Specializing in Node.js, Express, RESTful APIs, and SQL integration within the backend development team, I contribute to the creation of the corporate website, champion continuous improvement, and maintain a rigorous commitment to best practices for ensuring consistency across all backend services.",
duration: "February 2024- Present" },
    {
        year: 2023,
    title: "FullStack Teaching Assistant - Henry",
details: "Coordinating students to seamlessly integrate into the study team, providing theoretical guidance in technologies like JavaScript, algorithms, CSS, HTML, React, Redux, Webpack, Node.js, SQL, Express, and more, while actively supporting exercise resolution and fostering group collaboration through Pair Programming",
duration: "November 2023- Present"}
]

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px]  n-auto md:pl-[20%] p-4  py-16">
            <h1 className="text-4xl font-bold  text-center text-[var(--main-text)] mb-8"> Work    </h1> 
    {data.map((item, id )=> (
        <WorkItem key={id} year={item.year} title={item.title} duration={item.duration} details={item.details} />)
    )}
    
    </div>
    )
}

export default Work