import React,{useState} from 'react'
import InvestorsCard from './InvestorsCard'

const WhatInvestorsThink = () => {
  const [slider,changeSlider] =useState(0);

  const handleSlider= (index)=>{
    changeSlider(index);
  }
  return (
    <div name="Supporters" className="relative flex flex-col items-center w-full h-[70rem] ">
    

    <div className="flex flex-col items-start w-[78rem]">
    <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">

        WHAT INVESTORS <span className="text-transparent"> THINK</span>
      </h1>
      <h3 className='text-white font-[400] text-[32px]'>ABOUT CRYPTO AND REAL ESTATE</h3>
      <div  className='relative flex justify-center items-center w-full bg-white bg-opacity-10 h-[40rem] top-[10rem] w-full '>
      <div className={`${slider!=0 && "hidden"}`}><InvestorsCard  rolemember="INVESTOR" namemember="STEVE WHITE" /></div>
      <div className={`${slider!=1 && "hidden"}`}><InvestorsCard  rolemember="INVESTOR" namemember="JOHN" /></div>
      <div className={`${slider!=2 && "hidden"}`}><InvestorsCard  rolemember="INVESTOR" namemember="ANDREW" /></div>
      <div className='absolute  bottom-8 flex '>
        <div  onClick={()=>handleSlider(0)} className={`rounded-xl ${slider==0 ?"bg-opacity-100":"bg-opacity-10"} cursor-pointer w-[12px] border-[1px]  border-black bg-white  h-[12px]`}/>
        <div onClick={()=>handleSlider(1)} className={`  rounded-xl cursor-pointer w-[12px] border-[1px] ml-2 border-black bg-white ${slider==1 ?"bg-opacity-100":"bg-opacity-10"} h-[12px]`}/>
        <div onClick={()=>handleSlider(2)}  className={`rounded-xl cursor-pointer w-[12px] border-[1px] ml-2 border-black bg-white ${slider==2 ?"bg-opacity-100":"bg-opacity-10"} h-[12px]`}/>
      </div>
      

      </div>
      </div>
    </div>
  )
}

export default WhatInvestorsThink