import React from "react";

const WhoAreWe = () => {
  return (
    <div className=" bg-black h-[70rem] w-full">
      <div className="absolute  z-50 bg-[url('/public/leftside.png')]  bg-cover w-[721px] h-[733px]" />
      <div className="absolute bg-[url('/public/bg.png')]  top-[80px] w-[95%] h-[734px] left-0 bg-cover">
        <div className="absolute right-[-25rem] z-50 bg-opacity-70 top-[-25rem] bg-[url('/public/glowsecond.png')] bg-cover w-[1304px] h-[1282px]" />
        <div className="absolute z-50 right-[40px] top-[200px] ">
          <h2 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
            THE BENEFITS OF <br />
            HOLDING <span className="text-transparent">OUR NFT</span>
          </h2>
          <p className="absolute xl:w-[500px] 2xl:w-[600px]  top-[270px] font-[300] xl:text-[16px] 2xl:text-[20px] leading-[24px] flex align-center left-0 text-white">
            Our project will buy real apartments around the world in order to
            benefit from them as owner of our NFTs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
