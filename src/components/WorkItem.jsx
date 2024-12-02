import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col  md:flex-row  mx-auto relative border-l border-[var(--main-color)]">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-[var(--main-color)] rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[var(--dark)] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[var(--dark)]">
            {title}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-[var(--main-text)]">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-[var(--dark)]">
          {details}
        </p>
      </li>
    </ol>
  );
};

export default WorkItem;
