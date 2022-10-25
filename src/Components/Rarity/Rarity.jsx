import React,{useState} from 'react'
import RarityCard from './RarityCard'



const Rarity = () => {
  
  return (

    <div name="Rarity" className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col items-center w-[78rem]">
    

      <h1 className="font-[600] text-[30px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-transparent bg-clip-text bg-gradient-to-r from-[#15c796] to-[#17DD8A]   ">

       RARITY
      </h1>
           <div className='relative right-3 top-24 flex xl:flex-row flex-col '>
                <RarityCard   
                keyimg=" bg-[url('/public/common.png')] "
                title="COMMON"
                color="bg-[#1CF7A01A]"
                benefit={<h2 className='absolute bottom-[0rem] font-[700] text-white xl:text-[2-px] text-[18px]'>10% Discount</h2>}
                />
                    <RarityCard   

                   keyimg="  bg-[url('/public/epic.png')]"

             
                title="UNCOMMON"
                color="bg-[#4EA2D1]"
                benefit={<h2 className='absolute bottom-[0rem] font-[700] text-white xl:text-[2-px] text-[18px]'>20% Discount</h2>}/>
                    <RarityCard   
                  keyimg=" bg-[url('/public/rare.png')] "
                title="RARE"
                color="bg-[#8D72D9]"
                benefit={<h2 className='absolute bottom-[0rem] font-[700] text-white xl:text-[2-px] text-[18px]'>30% Discount</h2>}/>
                    <RarityCard   

                   keyimg=" bg-[url('/public/uncommon.png')]"

            
                title="EPIC"
                color="bg-white"
                benefit={<h2 className='absolute bottom-[0rem] font-[700] text-white xl:text-[2-px] text-[18px]'>40% Discount</h2>}/>
                    <RarityCard   
                  keyimg=" bg-[url('/public/legendary.png')] "
                title="LEGENDARY"
                color="bg-[#FAFF00]"
                benefit={<h2 className='absolute bottom-[0rem]  font-[700] text-white xl:text-[2-px] text-[18px]'>50% Discount</h2>}/>
                    <RarityCard   
                   keyimg=" bg-[url('/public/mythic.png')] "
                title="MITHIC"
                color="bg-[#00FF9A]"
                benefit={<h2 className='absolute bottom-[-5rem] xl:bottom-[-4.5rem] text-center font-[700] text-white xl:text-[2-px] text-[18px]'>5 days free accommodation <br/>+<br/>50% Discount</h2>}/>
                 
           </div>
      </div>
      </div>
  )
}

export default Rarity