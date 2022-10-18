<<<<<<< HEAD
<<<<<<< HEAD
import React ,{useState} from 'react'
import DiscountForm from '../HelpUsToGrow/DiscountForm';
import MintForm from '../HelpUsToGrow/MintForm';
import RecruitmentForm from '../HelpUsToGrow/RecruitmentForm';
import FormCard from './FormCard'

const FormsStart = () => {
  const [showForm,setShowForm]=useState(-1);
  const handleForm=(index)=>{
        setShowForm(index);
        console.log(showForm);
  }
  return (
    <div name="Forms" className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex justify-between w-[74.5rem]">
          <div><FormCard index={0} title={        <h1 className='relative w-[222px] z-20 left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>HOW DO YOU <br />PREFER TO <br /> MINT ?</h1>} subtitle="MINTING PREFERENCE" geometricForm="bg-[url('/public/hexagonform.png')] top-[-7.6rem]  left-[2.7rem] bg-cover w-[270px] h-[305px]" />
          <button onClick={()=>handleForm(0)} className='absolute z-40 cursor-pointer top-[28.5rem] z-40 bg-gradient-to-r from-[#2F2175] to-[#7B48ED] font-[700] w-[350px] h-[88px] rounded-[20px]  text-white text-[32px]'>START</button>
          </div>
        <div><FormCard index={1} title={        <h1 className='relative z-20 w-[222px] left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>BET ON US <br />EARLY AND<br /> GET MORE BENEFITS !</h1>} subtitle="DISCOUNT FOR EARLY INVESTORS" geometricForm="bg-[url('/public/pentagonform.png')] left-[1.7rem]   top-[-10.5rem] bg-cover w-[295px] h-[280px]" />
        <button onClick={()=>handleForm(1)} className='absolute z-20 top-[28.5rem] z-40 bg-gradient-to-r from-[#2F2175] to-[#7B48ED] font-[700] w-[350px] h-[88px] rounded-[20px]  text-white text-[32px]'>START</button>
         </div>
          <div><FormCard index={2} title={        <h1 className='relative z-20 w-[222px] left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>WE ARE <br />HIRING, JOIN<br /> OUR TEAM !</h1>} subtitle="COMUNITY RECRUITMENT" geometricForm="bg-[url('/public/triangleform.png')] left-[3rem]   top-[-7rem] bg-cover w-[250px] h-[220px]" />
               <button onClick={()=>handleForm(2)} className='absolute cursor-pointer z-50 top-[28.5rem] z-40 bg-gradient-to-r from-[#2F2175] to-[#7B48ED] font-[700] w-[350px] h-[88px] rounded-[20px]  text-white text-[32px]'>START</button>
          </div>
          <MintForm showFormMint={showForm==0} />
          <DiscountForm showDiscountForm={showForm==1} />
          <RecruitmentForm showRecruitmentForm={showForm==2} />
          <div className={`absolute ${showForm<0 && "hidden" } z-30 w-full h-[100rem] bg-black bg-opacity-30`} />
=======
=======
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
import React from 'react'
import FormCard from './FormCard'

const FormsStart = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex justify-between w-[74.5rem]">
          <FormCard  title={        <h1 className='relative w-[222px] z-20 left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>HOW DO YOU <br />PREFER TO <br /> MINT ?</h1>} subtitle="MINTING PREFERENCE" geometricForm="bg-[url('/public/hexagonform.png')] top-[-7.6rem]  left-[2.7rem] bg-cover w-[270px] h-[305px]" />
          <FormCard  title={        <h1 className='relative z-20 w-[222px] left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>BET ON US <br />EARLY AND<br /> GET MORE BENEFITS !</h1>} subtitle="DISCOUNT FOR EARLY INVESTORS" geometricForm="bg-[url('/public/pentagonform.png')] left-[1.7rem]   top-[-10.5rem] bg-cover w-[295px] h-[280px]" />
          <FormCard  title={        <h1 className='relative z-20 w-[222px] left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>WE ARE <br />HIRING, JOIN<br /> OUR TEAM !</h1>} subtitle="COMUNITY RECRUITMENT" geometricForm="bg-[url('/public/triangleform.png')] left-[3rem]   top-[-7rem] bg-cover w-[250px] h-[220px]" />
<<<<<<< HEAD
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
=======
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
          </div>
    </div>
  )
}

export default FormsStart