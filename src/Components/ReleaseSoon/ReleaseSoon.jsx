import React from "react";

const ReleaseSoon = () => {
  return (

    <div name="ReleaseSoon" className="relative flex flex-col items-center w-full h-[70rem] ">
    <div className="relative flex flex-col items-center w-full h-[70rem] ">

      <div className="flex flex-col items-start w-[22.5rem] xl:w-[78rem]">
        <h1 className="relative  font-[600] text-[35px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          RELEASE <span className="text-transparent">SOON</span>
        </h1>
        <div className="relative top-[8rem] w-full h-[65em] xl:h-[20rem] flex xl:flex-row flex-col items-center xl:item-start justify-between">
          <div className="flex justify-center xl:mt-[2.8rem] items-center  bg-[url('/public/tokenomics1.png')] bg-cover w-[358px] h-[358px] ">
            <h3 className=" text-center w-[232px]  font-[700] text-[20px] xl:text-[26px] text-white">
              TOKENOMICS $BHC
            </h3>
          </div>
          
          <div className="relative flex justify-center items-center xl:top-6 bg-[url('/public/mintpolygon.png')] bg-cover   w-[270px] h-[306px]  ">
            <h3 className="  font-[700] text-[20px] xl:text-[26px] text-white">
              MINT
            </h3>
          </div>
          <a  href="/public/Whitepaper_Bidhouse_Project.pdf"  download>
          <div className="relative flex z-40 cursor-pointer justify-center items-center top-6 bg-[url('/public/whitepaper1.png')] bg-cover w-[308px] h-[308px] rounded-[150px] ">
            <h3 className="relative font-[700] text-[20px] xl:text-[26px] text-white">
              WHITEPAPER
            </h3>
          </div>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ReleaseSoon;
