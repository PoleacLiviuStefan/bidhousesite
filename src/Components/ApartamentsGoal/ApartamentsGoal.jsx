import React from "react";

const ApartamentsGoal = () => {
  return (
    <div name="ApartamentsGoal" className="relative ml-2 xl:ml-0 flex flex-col items-center w-full h-[70rem] bg-black">
      <div className="flex flex-col items-start w-[23rem] xl:w-[70rem] 2xl:w-[78rem] 2xl:mr-[0] xl:mr-[3rem]">
        <h1 className="font-[600] text-[35px] leading-[40px] 2xl:text-[76px]  xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          APARTMENTS <span className="text-transparent">GOALS</span>
        </h1>
        <div className="relative top-6 2xl:top-14 bg-gradient-to-r from-[#ab84ff] to-[#9d70ff] w-[20rem] xl:w-[73rem] h-[.7rem] rounded-xl ">
          <div className="absolute top-[-.45rem] left-[2rem] xl:left-[5.5rem] bg-[url('/public/point.png')] w-[24.74px] h-[24.74px] bg-cover">
            <div className="absolute left-[-9.5px] top-[-.60rem] bg-[url('/public/pointcircle.png')] w-[44px] h-[44px] bg-cover" />
          </div>
          <div className="absolute top-[-.55rem] left-[8rem] xl:left-[27.3rem] bg-[url('/public/point.png')] w-[28.87px] h-[28.87px] bg-cover">
            <div className="absolute top-[-.7rem] left-[-11.1px] bg-[url('/public/pointcircle.png')] w-[51px] h-[51px] bg-cover" />
            <h1 className="absolute opacity-70 left-[-4.5rem] xl:left-[-15rem] top-[3.2rem] xl:top-[2.3rem] text-white text-[10px] xl:text-[14px] font-[300] leading-[15px] w-[236px]">
              5 apartaments
            </h1>
          </div>
          <div className="absolute top-[-.7rem] left-[14rem] xl:left-[53rem] bg-[url('/public/point.png')] w-[33px] h-[33px] bg-cover">
            <div className="absolute left-[-12.4px] top-[-12.8px] bg-[url('/public/pointcircle.png')] w-[58px] h-[58px] bg-cover" />
            <h1 className="absolute left-[-5rem] xl:left-[-15rem]  top-[3.3rem] xl:top-[2.5rem] text-white text-[12px] xl:text-[16px] font-[400] leading-[15px] w-[236px]">
              10 apartments
            </h1>
          </div>

          <div className="absolute top-[-1rem] left-[18.5rem] xl:left-[72rem] bg-[url('/public/point.png')] w-[41.24px] h-[41.24px] bg-cover">
            <div className="absolute left-[-15.5px] top-[-16px] bg-[url('/public/pointcircle.png')] w-[74px] h-[74px] bg-cover" />
            <h1 className="absolute left-[-4rem] xl:left-[-12.5rem] top-[3.5rem] xl:top-[2.8rem] text-white text-[16px] xl:text-[20px] font-[700] leading-[15px] w-[236px]">
             15 apartments
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartamentsGoal;
