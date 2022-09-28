import React from "react";

const ApartamentsBucharest = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[70rem] bg-black">
      <div className="flex flex-col items-start w-[78rem]">
        <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          APARTMENTS{" "}
          <span className="text-transparent">
            BUCHAREST - <br /> ROMANIA
          </span>
        </h1>
        <div className="relative top-10 w-[55rem] grid grid-cols-3">
          <div className="absolute left-[-15rem] top-[3rem] opacity-80 bg-cover w-[1920px] h-[1650px] bg-[url('/public/apartmentsglow.png')]" />
          <div className="bg-cover w-[265px] h-[259px] bg-[url('/public/1ap.png')]" />
          <div className="relative left-0 bg-cover  w-[339px] h-[538px] bg-[url('/public/2ap.png')]" />
          <div className="relative left-[4.65rem] flex flex-col w-[700px]">
            <div className="flex">
              <div className="relative bg-cover w-[267px] h-[259px] bg-[url('/public/3ap.png')]" />
              <div className="relative left-5 bg-cover w-[265px] h-[259px] bg-[url('/public/8ap.png')]" />
            </div>
            <div className="relative top-[1.7rem]  bg-cover w-[554px] h-[259px] bg-[url('/public/4ap.png')]" />
          </div>
          <div className="relative left-0  top-[-15.85rem] bg-cover w-[265px] h-[677px] bg-[url('/public/5ap.png')]" />
          <div className="relative left-0  top-8 bg-cover w-[626px] h-[398px] bg-[url('/public/6ap.png')]" />
          <div className="relative left-[22.55rem]  top-8 bg-cover w-[265px] h-[398px] bg-[url('/public/7ap.png')]" />
        </div>
      </div>
    </div>
  );
};

export default ApartamentsBucharest;
