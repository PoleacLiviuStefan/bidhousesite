import React from "react";

const RoadmapCard = ({ background, number, description }) => {
  return (
    <div className={`${background} w-[250px] xl:w-[346px] 2xl:w-[380px]    xl:h-[222px] `}>
      <div className="px-6 py-2 h-[220px]">
        <h1 className="text-[42px] 2xl:text-[52px] text-white     font-[900]">
          {number}{" "}
          <span className="text-[24px] font-[900] tracking-[.2em]">Phase</span>
        </h1>
        {description}
      </div>
    </div>
  );
};

export default RoadmapCard;
