import React from "react";

const WhenTheMintStart = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[70rem] bg-black">
      <div className="absolute z-50 left-[-35rem] top-[-30rem] bg-[url('/public/glowsecond.png')] bg-cover w-[1304px] h-[1450px]" />
      <div className="flex flex-col items-start  xl:left-0 w-[24rem] xl:w-[78rem]">
        <h1 className="font-[600] text-[30px] 2xl:text-[80px] 3xl:text-[96px] xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          WHEN MINT <span className="text-transparent">START?</span>
        </h1>
        <h3 className="relative top-4 z-50 font-[400] text-[20px] leading-[28px] text-white">
          To be announced on<span className="text-purple-400 cursor-pointer "> <a href="https://discord.gg/VQghzgJz">Discord </a></span> on{" "}
          <span className="text-blue-400"><a href="https://twitter.com/bidhouse_nft">Twitter</a></span>
        </h3>
        <div className="relative top-20 flex w-full h-[1.3rem]">
          <div className="bg-slate-600 flex items-center justify-center w-[22rem] xl:w-[10rem] rounded-xl h-full">
            <h3 className="text-white text-[12px] xl:text-[14px] font-[600]">Prototype</h3>
          </div>
          <div className="relative z-20  bg-[#957CD3] left-[-.35rem] w-[20rem] xl:w-[15rem]  h-full">
            <div className="absolute left-0 top-0 w-[1px] bg-white h-[2rem]" />
            <div className="absolute right-0 top-0 w-[1px] bg-white h-[2rem]" />
            <h3 className="absolute xl:left-[-2rem] left-[-1.55rem] text-[12px] xl:text-[16px] top-8 opacity-80 w-[60px] w-[1px] text-white h-[2rem]">
              9 March
            </h3>
            <h3 className="absolute right-[-6rem]  xl:right-[-5.3rem]  text-[12px] xl:text-[16px] top-8 opacity-80 w-[130px] w-[1px] text-white h-[2rem]">
              1 Octomber
            </h3>
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
        <h3 className="relative top-[15rem] text-[14px]  xl:text-[20px] font-[200] opacity-70 text-justify text-white">
          " We are very sincere peoples and we know is unprofessional to say
          that, but we don't really like paperhands. <br />
          <br />
          This is a business model, business model takes time, so if you are not
          pacient and you can't wait 2-3 months to have a real plan, to solve
          all the problems we will encounter in the real world, please don't
          mint because we want to build a healthy community and to achieve this
          goal we secure our floor and we will buy with the comunity wallet all
          NFT's on Magic Eden below the mint price and then we will sell it at
          the fixed price. "
        </h3>
        <h1 className="absolute top-[40rem] tracking-[1px] font-[700] text-[24px]  text-transparent  bg-clip-text bg-gradient-to-r from-[#c291ff] to-[#a75fff] ">
          -Founders-
        </h1>
      </div>
    </div>
  );
};

export default WhenTheMintStart;
