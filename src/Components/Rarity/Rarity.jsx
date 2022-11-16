import React,{useState} from 'react'
import RarityCard from './RarityCard'
import Fade from 'react-reveal/Fade'


const Rarity = () => {
  
  return (

    <div name="Rarity" className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col items-center w-[78rem]">
    
    <div className="absolute top-[18rem] left-[-3rem]  bg-[url('/public/rarityglowl.png')] bg-cover w-[859px] h-[1003px]" />
    <div className="absolute top-[10rem] right-[-3rem] bg-[url('/public/rarityglowr.png')] bg-cover w-[702px] h-[1003px]" />
     <Fade top>
      <h1 className="font-[600] text-[35px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-transparent bg-clip-text bg-gradient-to-r from-[#15c796] to-[#17DD8A]   ">

       RARITY
      </h1>
      </Fade>
      <Fade bottom>
           <div className='relative mt-[-11rem] xl:mt-[-5rem] right-3 xl:top-24 xl:flex xl:flex-row  grid grid-cols-2 '>
                <RarityCard   
                keyimg=" bg-[url('/public/common.png')] "
                title="COMMON"
                color="bg-[#1CF7A01A]"
                benefit={<h2 className='relative z-10  font-[700] text-white  text-[18px]'>10% Discount</h2>}
                />
                    <RarityCard   

                   keyimg="  bg-[url('/public/epic.png')]"

             
                title="UNCOMMON"
                color="bg-[#4EA2D1]"
                benefit={<h2 className='relative z-10  font-[700] text-white  text-[18px]'>20% Discount</h2>}/>
                    <RarityCard   
                  keyimg=" bg-[url('/public/rare.png')] "
                title="RARE"
                color="bg-[#8D72D9]"
                benefit={<h2 className='relative z-10  font-[700] text-white  text-[18px]'>30% Discount</h2>}/>
                    <RarityCard   

                   keyimg=" bg-[url('/public/uncommon.png')]"

            
                title="EPIC"
                color="bg-white"
                benefit={<h2 className='relative z-10  font-[700] text-white  text-[18px]'>40% Discount</h2>}/>
                    <RarityCard   
                  keyimg=" bg-[url('/public/legendary.png')] "
                title="LEGENDARY"
                color="bg-[#FAFF00]"
                benefit={<h2 className='relative z-10  font-[700] text-white  text-[18px]'>50% Discount</h2>}/>
                    <RarityCard   
                   keyimg=" bg-[url('/public/mythic.png')] "
                title="MITHIC"
                color="bg-[#00FF9A]"
                benefit={<h2 className='relative cursor-pointer z-10  text-center  font-[700] text-white  text-[18px]'>5 days free accommodation <br/>+<br/>50% Discount</h2>}/>
                 
           </div>
           </Fade>
      </div>
      </div>
  )
}

export default Rarity