import React,{useState} from 'react'
import InvestorsCard from './InvestorsCard'
import video1 from './GaryVee.mp4'
import video2 from './videoinv2.mp4'
import Thumbnail from './ThumbnailGaryVee.jpg'
import Thumbnail2 from './Thumbnail2.jpg'
const WhatInvestorsThink = () => {
  const [slider,changeSlider] =useState(0);

  const handleSlider= (index)=>{
    changeSlider(index);
  }
  return (
    <div name="Supporters" className="relative flex flex-col bg-black   items-center w-full h-[120rem] ">
         <div className="absolute z-10 top-[2rem] right-[-5rem] bg-[url('/public/investorsglow.png')] w-[1053px] h-[1003px]"/>

    <div className="flex z-20 flex-col items-start w-[23rem] xl:w-[78rem]">
    <h1 className="font-[600] text-[30px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">

        WHAT INVESTORS <span className="text-transparent"> THINK</span>
      </h1>
      <h3 className='text-white font-[400] text-[22px] xl:text-[32px]'>ABOUT CRYPTO AND REAL ESTATE</h3>
     
    <div className='relative flex xl:flex-row flex-col top-[5rem] justify-center w-full'>
      <div className='relative  w-full flex justify-center'>
        <video src={video1} width="300" height="200" controls="controls" poster={Thumbnail} />
        </div>

        <div className='relative XL:ml-[-15rem] mt-[4rem] xl:mt-0 w-full flex justify-center'>
        <video src={video2} width="300" height="200" controls="controls"  poster={Thumbnail2}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default WhatInvestorsThink