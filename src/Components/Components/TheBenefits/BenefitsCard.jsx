import React from "react";

const BenefitsCard = ({ icon, title }) => {
  return (
    <div className="xl:w-[200px] backdrop-blur xl:h-[200px] xl:ml-4 w-[110px] h-[110px] rounded-[20px] bg-white bg-opacity-10  flex flex-col justify-center items-center">
      <div className={`  h-[50px] xl:h-[96px] ${icon} `} />
      <h3 className="relative top-4 text-white font-[700] text-[11px] xl:text-[18px]">
        {title}
      </h3>
    </div>
  );
};

export default BenefitsCard;
