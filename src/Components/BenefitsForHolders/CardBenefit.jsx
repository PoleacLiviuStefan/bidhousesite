import React from "react";

const CardBenefit = ({ title, keyimg, description }) => {
  return (
    <div className="relative mt-9 flex px-4 py-7 flex-col bg-white bg-opacity-10  w-[372px] h-[354px] rounded-[20px]">
      <div className="flex z-30">
        {title}
        {keyimg}
      </div>
      {description}
      <div className="absolute top-0 left-0  z-[-1] w-full h-full"/>
    </div>
  );
};

export default CardBenefit;
