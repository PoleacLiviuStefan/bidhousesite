import React from "react";

const RoadmapCard = ({ background, number, description }) => {
  return (
    <div className={`${background} w-[380px] h-[222px]`}>
      <div className="px-6 py-2">
        <h1 className="text-[52px] text-white     font-[900]">
          {number}{" "}
          <span className="text-[24px] font-[900] tracking-[.2em]">Phase</span>
        </h1>
        {description}
      </div>
    </div>
  );
};

export default RoadmapCard;
