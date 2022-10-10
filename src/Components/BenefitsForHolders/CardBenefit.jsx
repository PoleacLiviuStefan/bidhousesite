import React from "react";

const CardBenefit = ({ title, keyimg, description }) => {
  return (
    <div className="relative mt-8 flex px-4 py-7 flex-col bg-white bg-opacity-10 backdrop-blur-[8px] w-[372px] h-[344px] rounded-[20px]">
      <div className="flex">
        {title}
        {keyimg}
      </div>
      {description}
    </div>
  );
};

export default CardBenefit;
