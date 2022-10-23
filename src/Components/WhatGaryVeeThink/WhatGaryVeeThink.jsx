import React from 'react'

import video1 from './GaryVee.mp4'
const WhatGaryVeeThink = () => {
  return (
    <div name="WhatGaryVeeThink" className="relative flex flex-col items-center bg-black w-full h-[90rem] ">
      <div className="flex flex-col items-start w-[23rem] xl:w-[78rem]">
      <h1 className="font-[600] text-[30px] 2xl:text-[76px]  leading-[40px] xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          WHAT GARY VEE <span className="text-transparent"> THINK</span>
        </h1>
        <h3 className='text-white font-[400] text-[26px] xl:text-[32px]'>ABOUT REAL ESTATE</h3>
        <div className='relative top-[5rem] w-full flex justify-center'>
        <video src={video1} width="400" height="200" controls="controls" autoplay="true" />
        </div>


        </div>
      </div>
  )
}

export default WhatGaryVeeThink