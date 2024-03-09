import React from "react";


const SkillsItem = ({img}) => {
  const handleImageMouseOver = (event, altText) => {
    event.currentTarget.title = altText;
  };
    return (
      
      <div className="relative  h-auto w-full shadow-xl  shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[var(--main-text)] ">
          <h1 className="text text-center text-xl font-bold text-[var(--main-text)]">{img.title}</h1>
          <div className="grid grid-cols-3 " >
          {img.logo.map((item, index) => (
  <img
  className='p-4'
  key={index}
  src={item}
  alt={item.split('/').pop().split('.').shift()}
  onMouseOver={(e) => handleImageMouseOver(e, item.split('/').pop().split('.').shift())}
/>        ))}
        </div>
      
        </div>
    )
}

export default SkillsItem