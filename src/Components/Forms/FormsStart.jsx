import React from 'react'
import FormCard from './FormCard'

const FormsStart = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex justify-between w-[74.5rem]">
          <FormCard  title={        <h1 className='relative w-[222px] z-20 left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>HOW DO YOU <br />PREFER TO <br /> MINT ?</h1>} subtitle="MINTING PREFERENCE" geometricForm="bg-[url('/public/hexagonform.png')] top-[-7.6rem]  left-[2.7rem] bg-cover w-[270px] h-[305px]" />
          <FormCard  title={        <h1 className='relative z-20 w-[222px] left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>BET ON US <br />EARLY AND<br /> GET MORE BENEFITS !</h1>} subtitle="DISCOUNT FOR EARLY INVESTORS" geometricForm="bg-[url('/public/pentagonform.png')] left-[1.7rem]   top-[-10.5rem] bg-cover w-[295px] h-[280px]" />
          <FormCard  title={        <h1 className='relative z-20 w-[222px] left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>WE ARE <br />HIRING, JOIN<br /> OUR TEAM !</h1>} subtitle="COMUNITY RECRUITMENT" geometricForm="bg-[url('/public/triangleform.png')] left-[3rem]   top-[-7rem] bg-cover w-[250px] h-[220px]" />
          </div>
    </div>
  )
}

export default FormsStart