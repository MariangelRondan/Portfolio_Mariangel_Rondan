import React from "react";


const Tools = ({img, title, name}) => {

    return (
      
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl  shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[var(--main-text)] ">
          <h1>${name}</h1>
          <img src={css} alt={title} />
        </div>
    )
}

export default Tools