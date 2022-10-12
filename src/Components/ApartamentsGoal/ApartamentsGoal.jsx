import React from "react";

const ApartamentsGoal = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[70rem] bg-black">
      <div className="flex flex-col items-start w-[78rem]">
        <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          APARTMENTS <span className="text-transparent">GOALS</span>
        </h1>
        <div className="relative top-14 bg-gradient-to-r from-[#ab84ff] to-[#9d70ff] w-[73rem] h-[.7rem] rounded-xl ">
          <div className="absolute top-[-.45rem] left-[5.5rem] bg-[url('/public/point.png')] w-[24.74px] h-[24.74px] bg-cover">
            <div className="absolute left-[-9.5px] top-[-.60rem] bg-[url('/public/pointcircle.png')] w-[44px] h-[44px] bg-cover" />
          </div>
          <div className="absolute top-[-.55rem] left-[27.3rem] bg-[url('/public/point.png')] w-[28.87px] h-[28.87px] bg-cover">
            <div className="absolute top-[-.7rem] left-[-11.1px] bg-[url('/public/pointcircle.png')] w-[51px] h-[51px] bg-cover" />
            <h1 className="absolute opacity-70 left-[-15rem] top-[2.3rem] text-white text-[14px] font-[300] leading-[15px] w-[236px]">
              5 apartaments
            </h1>
          </div>
          <div className="absolute top-[-.7rem] left-[53rem] bg-[url('/public/point.png')] w-[33px] h-[33px] bg-cover">
            <div className="absolute left-[-12.4px] top-[-12.8px] bg-[url('/public/pointcircle.png')] w-[58px] h-[58px] bg-cover" />
            <h1 className="absolute left-[-15rem] top-[2.5rem] text-white text-[16px] font-[400] leading-[15px] w-[236px]">
              10 apartments
            </h1>
          </div>

          <div className="absolute top-[-1rem] left-[72rem] bg-[url('/public/point.png')] w-[41.24px] h-[41.24px] bg-cover">
            <div className="absolute left-[-15.5px] top-[-16px] bg-[url('/public/pointcircle.png')] w-[74px] h-[74px] bg-cover" />
            <h1 className="absolute left-[-12.5rem] top-[2.8rem] text-white text-[20px] font-[700] leading-[15px] w-[236px]">
             15 apartments
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartamentsGoal;
