import React from "react";

const CardInfo = ({ description, title }) => {
  return (
    <div className="  h-[340px] xl:h-[260px]  w-[370px] xl:w-[550px]  rounded-[20px] bg-black bg-opacity-20">
      <div className="absolute mt-12 ml-12 mr-12 mb-12 w-full h-full">
        <div className={`absolute  left-0 top-0  ${title} bg-cover`} />

        {description}
      </div>
    </div>
  );
};

export default CardInfo;
