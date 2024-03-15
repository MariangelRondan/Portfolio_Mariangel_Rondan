import React from "react";


const SkillsItem = ({img}) => {
  const handleImageMouseOver = (event, altText) => {
    event.currentTarget.title = altText;
  };
    return (
      
      <div className="relative  h-auto w-100 shadow-xl justify-center  shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-transparent to-[#111827] hover:scale-110 ease-in duration-300">
          <h1 className="text text-center text-xl font-bold text-[var(--main-text)]">{img.title}</h1>
          <div className="grid grid-cols-3 " >
          {img.logo.map((item, index) => (
  <img
  className='p-6'
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