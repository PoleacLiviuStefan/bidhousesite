import React from 'react'
import {BsDiscord,BsTelegram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import Fade from 'react-reveal/Fade'
const JoinOurCommunity = () => {
  return (
    <div name="Social" className="relative flex flex-col items-center w-full h-[55rem] xl:h-[32rem] bg-black">
    <div className="flex flex-col items-center w-[23rem] xl:w-[78rem]">
      <Fade bottom><h1 className="font-[600] text-[30px] xl:text-[52px] 2xl:text-[76px] leading-[40px]  xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#231998] via-[#9945FF] to-[#17DD8A] ">
        JOIN OUR<span className="text-transparent"> COMMUNITY</span>
      </h1>
      </Fade>
      <div className='flex xl:flex-row flex-col relative  xl:left-[-7em] top-16 text-white text-[24px]'>
      <Fade left>
        <div className='flex xl:flex-row flex-col items-center'>
           <a className='relative flex  xl:flex-row flex-col items-center' href="https://discord.gg/6NPV2nfe"> <div className=' text-[110px]'><BsDiscord /></div>
            <h3 className='relative mt-4 xl:mt-0 xl:left-[4rem]'>COMMUNITY</h3>
            </a>
        </div>
        </Fade>
        <Fade top>
        <div className='relative xl:left-[9rem] mt-10 xl:mt-0 flex  xl:flex-row flex-col items-center'>
        <a className='relative flex  xl:flex-row flex-col items-center' href="https://mobile.twitter.com/bidhouse_nft" ><div className='text-[130px]'> <AiFillTwitterCircle/> </div>
            <h3 className='relative mt-4 xl:mt-0 xl:left-[4rem]'>NEWS</h3>
            </a>
        </div>
        </Fade>
        <Fade right>
        <div className='relative xl:left-[18rem] mt-10 xl:mt-0 flex xl:flex-row flex-col items-center'>
        <a className='relative flex  xl:flex-row flex-col items-center' href="https://t.me/TheBidhouseEN" > <div className='text-[110px]'><BsTelegram/> </div>
            <h3 className='relative mt-4 xl:mt-0 xl:left-[4rem]'>CONTACTS</h3>
            </a>
        </div>
        </Fade>
      </div>
      </div></div>
  )
}

export default JoinOurCommunity