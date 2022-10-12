import React from 'react'
import InvestorsCard from './InvestorsCard'

const WhatInvestorsThink = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[70rem] ">
    <div className="flex flex-col items-start w-[78rem]">
    <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
        WHAT INVESTORS <span className="text-transparent"> THINK</span>
      </h1>
      <h3 className='text-white font-[400] text-[32px]'>ABOUT CRYPTO AND REAL ESTATE</h3>
      <div  className='relative flex justify-center items-center w-full bg-white bg-opacity-10 h-[40rem] top-[10rem] w-full '>
      <InvestorsCard rolemember="INVESTOR" namemember="STEVE WHITE" />
      </div>
      </div>
    </div>
  )
}

export default WhatInvestorsThink