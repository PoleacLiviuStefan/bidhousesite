import React from 'react'
import MemberCard from './MemberCard';

const Team = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col items-center w-[78rem]">
      <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white   ">
    TEAM
      </h1>
      <div  className='relative flex justify-center w-full h-[50rem] top-[10rem] w-full '>
      <MemberCard rolemember="Founder" namemember="CRISTIAN " />
      </div>
      </div>
      </div>
  )
}

export default Team;