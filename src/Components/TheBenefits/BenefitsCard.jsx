import React from "react";

const BenefitsCard = ({ icon, title }) => {
  return (
    <div className="w-[212.95px] rounded-[20px] bg-white bg-opacity-10 h-[212.95px] flex flex-col justify-center items-center">
      <div className={` h-[96px] ${icon} `} />
      <h3 className="relative top-4 text-white font-[700] text-[18px]">
        {title}
      </h3>
    </div>
  );
};

export default BenefitsCard;
