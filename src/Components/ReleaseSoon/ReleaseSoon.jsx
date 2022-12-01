import React from "react";
import downloadpdf from '../Hero/Whitepaper_Bidhouse_Project.pdf'
import Fade from 'react-reveal/Fade'
const ReleaseSoon = () => {
  return (

    <div name="ReleaseSoon" className="relative flex flex-col items-center w-full h-[70rem] ">
    <div className="relative flex flex-col items-center w-full h-[70rem] ">

      <div className="flex flex-col  z-30 items-start w-[22.5rem] xl:w-[78rem]">
       <Fade top> <h1 className="relative ml-1 xl:ml-0  font-[600] text-[35px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          RELEASE <span className="text-transparent">SOON</span>
        </h1>
        </Fade>
        <Fade bottom delay={300}>
        <div className="relative top-[-10rem] xl:top-[3rem] w-full h-[30rem] xl:h-[20rem] flex  items-center xl:item-start justify-between">
          <div className="flex justify-center xl:mt-[2.8rem] items-center  bg-[url('/public/tokenomics1.png')] bg-cover w-[130px] h-[130px] xl:w-[358px] xl:h-[358px] ">
            <h3 className=" text-center w-[100px] xl:w-[232px]  font-[700] text-[13px] xl:text-[26px] text-white">
              TOKENOMICS $BHC
            </h3>
          </div>
          
          <div className="relative flex justify-center items-center  xl:top-6 bg-[url('/public/mintpolygon.png')] bg-cover w-[95px] h-[107px]   xl:w-[270px] xl:h-[306px]  ">
            <h3 className="  font-[700] text-[13px] xl:text-[26px] text-white">
              MINT
            </h3>
          </div>
          <a  href={downloadpdf}  download>
          <div className="relative flex z-40 cursor-pointer justify-center items-center xl:top-6 bg-[url('/public/whitepaper1.png')] bg-cover w-[105px] h-[105px] xl:w-[308px] xl:h-[308px] rounded-[150px] ">
            <h3 className="relative font-[700] text-[13px] xl:text-[26px] text-white">
              WHITEPAPER
            </h3>
          </div>
          </a>
        </div>
        </Fade>
      </div>
    </div>
    </div>
  );
};

export default ReleaseSoon;
