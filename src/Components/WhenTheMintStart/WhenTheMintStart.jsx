import React from "react";

const WhenTheMintStart = () => {
  return (
    <div name="MintStart" className="relative flex flex-col items-center w-full h-[70rem] bg-black">


    <div className="relative flex flex-col items-center w-full h-[70rem] bg-black">
      <div className="absolute z-30 left-[-35rem] top-[-30rem] bg-[url('/public/glowsecond.png')] bg-cover w-[1304px] h-[1450px]" />
      <div className="flex flex-col items-start  xl:left-0 w-[23rem] xl:w-[70rem] 2xl:w-[78rem]">
        <h1 className="font-[600] text-[30px] z-30 xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">

          WHEN MINT <span className="text-transparent">START?</span>
        </h1>
        <h3 className="relative top-4 z-40 font-[400] text-[20px] leading-[28px] text-white">
          To be announced on<span className="text-purple-400 cursor-pointer "> <a href="https://discord.gg/VQghzgJz">Discord </a></span> on{" "}
          <span className="text-blue-400"><a href="https://twitter.com/bidhouse_nft">Twitter</a></span>
        </h3>
        <div className="relative top-20 z-40 flex w-full h-[1.3rem]">
          <div className="bg-slate-600 flex items-center justify-center w-[22rem] xl:w-[10rem] rounded-xl h-full">
            <h3 className="text-white text-[12px] xl:text-[14px] font-[600]">Prototype</h3>
          </div>
          <div className="relative z-20  bg-[#957CD3] left-[-.35rem] w-[20rem] xl:w-[15rem]  h-full">
            <div className="absolute left-0 top-0 w-[1px] bg-white h-[2rem]" />
            <div className="absolute right-0 top-0 w-[1px] bg-white h-[2rem]" />
          
            <h3 className="absolute left-2 xl:left-12 text-white text-[14px] font-[600]">
              Premint
            </h3>
          </div>
          <div className="relative  bg-[#7B48EDCC] left-[-1rem] rounded-xl w-[80rem]  h-full">
            <h3 className="absolute left-8 text-white text-[12px] xl:text-[14px] font-[600]">
              Mint START
            </h3>
          </div>
        </div>
    
      </div>
    </div>
    </div>
    
  );
};

export default WhenTheMintStart;
