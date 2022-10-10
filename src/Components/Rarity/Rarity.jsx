import React from 'react'
import RarityCard from './RarityCard'



const Rarity = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col items-center w-[78rem]">
      <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-transparent bg-clip-text bg-gradient-to-r from-[#15c796] to-[#17DD8A]   ">
    RARITY
      </h1>
           <div className='relative top-32 flex '>
                <RarityCard   
                key=" bg-[url('/public/common.png')] "
                title="COMMON"
                color="bg-[#1CF7A01A]"
                />
                    <RarityCard   
                  key=" bg-[url('/public/uncommon.png')] "
                title="UNCOMMON"
                color="bg-[#4EA2D1]"/>
                    <RarityCard   
                 key=" bg-[url('/public/rare.png')] "
                title="RARE"
                color="bg-[#8D72D9]"/>
                    <RarityCard   
                  key=" bg-[url('/public/epic.png')] "
                title="EPIC"
                color="bg-white"/>
                    <RarityCard   
                 key=" bg-[url('/public/legendary.png')] "
                title="LEGENDARY"
                color="bg-[#FAFF00]"/>
                    <RarityCard   
                  key=" bg-[url('/public/mythic.png')] "
                title="MITHIC"
                color="bg-[#00FF9A]"/>
                 
           </div>
      </div>
      </div>
  )
}

export default Rarity