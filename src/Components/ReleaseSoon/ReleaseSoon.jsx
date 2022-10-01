import React from "react";

const ReleaseSoon = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[70rem] ">
      <div className="flex flex-col items-center w-[78rem]">
        <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          RELEASE <span className="text-transparent">SOON</span>
        </h1>
        <div className="relative top-[10rem] w-full flex justify-between">
          <div className="bg-opacity-25 bg-white  w-[300px] h-[300px] rounded-[150px] ">
            <h3 className="absolute bottom-[-3.5rem] left-[2rem] font-[700] text-[26px] text-white">
              TOKENOMICS $BHC
            </h3>
          </div>
          <div className="bg-opacity-25 bg-white    w-[300px] h-[300px] rounded-[150px] ">
            <h3 className="absolute bottom-[-3.5rem] left-[37rem] font-[700]  text-[26px] text-white">
              MINT
            </h3>
          </div>
          <div className="bg-opacity-25 bg-white  w-[300px] h-[300px] rounded-[150px] ">
            <h3 className="absolute bottom-[-3.5rem] left-[64rem] font-[700] text-[26px] text-white">
              WHITEPAPER
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseSoon;
