import React from 'react'
import {BsDiscord,BsTelegram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const JoinOurCommunity = () => {
  return (
    <div name="Social" className="relative flex flex-col items-center w-full h-[70rem] bg-black">
    <div className="flex flex-col items-center w-[78rem]">
      <h1 className="font-[600] text-[45px] 2xl:text-[76px]  leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#231998] via-[#9945FF] to-[#17DD8A] ">
        JOIN OUR<span className="text-transparent"> COMMUNITY</span>
      </h1>
      <div className='flex relative  left-[-7em] top-16 text-white text-[24px]'>
        <div className='flex items-center'>
            <div className=' text-[110px]'><BsDiscord /></div>
            <h3 className='relative  left-[4rem]'>COMMUNITY</h3>
        </div>
        <div className='relative left-[9rem] flex items-center'>
            <div className='text-[130px]'> <AiFillTwitterCircle/> </div>
            <h3 className='relative left-[4rem]'>NEWS</h3>
        </div>
        <div className='relative left-[18rem] flex items-center'>
            <div className='text-[110px]'><BsTelegram/> </div>
            <h3 className='relative left-[4rem]'>CONTACTS</h3>
        </div>
      </div>
      </div></div>
  )
}

export default JoinOurCommunity