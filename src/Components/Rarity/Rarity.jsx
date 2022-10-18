import React,{useState} from 'react'
import RarityCard from './RarityCard'



const Rarity = () => {
  
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div name="Rarity" className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col items-center w-[78rem]">
      <h1 className="font-[600] text-[45px] 2xl:text-[76px]  leading-[112px] text-transparent bg-clip-text bg-gradient-to-r from-[#15c796] to-[#17DD8A]   ">
=======
    <div className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col items-center w-[78rem]">
      <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-transparent bg-clip-text bg-gradient-to-r from-[#15c796] to-[#17DD8A]   ">
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
=======
    <div className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col items-center w-[78rem]">
      <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-transparent bg-clip-text bg-gradient-to-r from-[#15c796] to-[#17DD8A]   ">
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
    RARITY
      </h1>
           <div className='relative top-24 flex '>
                <RarityCard   
                keyimg=" bg-[url('/public/common.png')] "
                title="COMMON"
                color="bg-[#1CF7A01A]"
                />
                    <RarityCard   
<<<<<<< HEAD
<<<<<<< HEAD
                   keyimg="  bg-[url('/public/epic.png')]"
=======
                   keyimg=" bg-[url('/public/uncommon.png')] "
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
=======
                   keyimg=" bg-[url('/public/uncommon.png')] "
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
                title="UNCOMMON"
                color="bg-[#4EA2D1]"/>
                    <RarityCard   
                  keyimg=" bg-[url('/public/rare.png')] "
                title="RARE"
                color="bg-[#8D72D9]"/>
                    <RarityCard   
<<<<<<< HEAD
<<<<<<< HEAD
                   keyimg=" bg-[url('/public/uncommon.png')]"
=======
                   keyimg=" bg-[url('/public/epic.png')] "
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
=======
                   keyimg=" bg-[url('/public/epic.png')] "
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
                title="EPIC"
                color="bg-white"/>
                    <RarityCard   
                  keyimg=" bg-[url('/public/legendary.png')] "
                title="LEGENDARY"
                color="bg-[#FAFF00]"/>
                    <RarityCard   
                   keyimg=" bg-[url('/public/mythic.png')] "
                title="MITHIC"
                color="bg-[#00FF9A]"/>
                 
           </div>
      </div>
      </div>
  )
}

export default Rarity