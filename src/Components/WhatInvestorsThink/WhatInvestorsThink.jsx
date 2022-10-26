import React,{useState} from 'react'
import InvestorsCard from './InvestorsCard'
import video1 from './GaryVee.mp4'
import video2 from './videoinv2.mp4'
const WhatInvestorsThink = () => {
  const [slider,changeSlider] =useState(0);

  const handleSlider= (index)=>{
    changeSlider(index);
  }
  return (
    <div name="Supporters" className="relative flex flex-col items-center w-full h-[70rem] ">
    

    <div className="flex flex-col items-start w-[23rem] xl:w-[78rem]">
    <h1 className="font-[600] text-[30px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">

        WHAT INVESTORS <span className="text-transparent"> THINK</span>
      </h1>
      <h3 className='text-white font-[400] text-[22px] xl:text-[32px]'>ABOUT CRYPTO AND REAL ESTATE</h3>
     
    <div className='relative flex xl:flex-row flex-col top-[5rem] justify-center w-full'>
      <div className='relative  w-full flex justify-center'>
        <video src={video1} width="300" height="200" controls="controls" autoplay="true" />
        </div>

        <div className='relative XL:ml-[-15rem] mt-[4rem] xl:mt-0 w-full flex justify-center'>
        <video src={video2} width="300" height="200" controls="controls" autoplay="true" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default WhatInvestorsThink