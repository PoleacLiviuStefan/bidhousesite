import React,{useState} from 'react'
import Cardtxt from './Cardtxt';

const RarityCard = ({keyimg,title,color,benefit}) => {

  return (
    <div  className={`relative ml-6 mt-[15rem] xl:mt-0 rounded-[20px]  flex flex items-center justify-center w-[160px] xl:w-[180px] h-[300px] xl:h-[424px] `}>
      <Cardtxt color={color} discount={benefit}/>
      
        <div className={`relative  rounded-[20px] backdrop-blur-[8px] flex flex-col items-center w-[180px] hover:py-10 hover:animate-[rarityanim_.3s_linear_forwards] h-[344px] ${color} bg-opacity-10`}>
      
            <div className={`relative top-[4rem] xl:top-5    ${keyimg} flex  bg-cover w-[140px] h-[202px] xl:w-[180px] xl:h-[260px]`}/>
            <h2 className='relative top-[5rem] xl:top-9 text-[20px] text-white font-[700]'>{title}</h2>
            </div>
    </div>
  )
}

export default RarityCard