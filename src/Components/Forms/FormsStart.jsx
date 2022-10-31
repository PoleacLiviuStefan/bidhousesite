import React ,{useState} from 'react'
import DiscountForm from '../HelpUsToGrow/DiscountForm';
import MintForm from '../HelpUsToGrow/MintForm';
import RecruitmentForm from '../HelpUsToGrow/RecruitmentForm';
import FormCard from './FormCard'
import {AiOutlineClose} from 'react-icons/ai'
const FormsStart = () => {
  const [showForm,setShowForm]=useState(-1);
  const handleForm=(index)=>{
        setShowForm(index);
        console.log(showForm);
  }
  return (
    <div name="Forms" className="relative flex flex-col items-center w-full h-[130rem] ">
        <div className="absolute z-10 top-[-45rem] right-0 bg-[url('/public/glowformtopr.png')] w-[1028px] h-[1003px]"/>
        <div className="absolute z-10 top-[-23rem] left-0 bg-[url('/public/glowformleft.png')] w-[1116px] h-[1003px]"/>
    <div className="flex z-20 xl:flex-row flex-col items-between xl:justify-between w-[23rem] xl:w-[74.5rem]">
          <div className='relative left-2'><FormCard index={0} title={        <h1 className='relative w-[222px] z-20 left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>HOW DO YOU <br />PREFER TO <br /> MINT ?</h1>} subtitle="MINTING PREFERENCE" geometricForm="bg-[url('/public/hexagonform.png')] top-[-7.6rem]  left-[2.7rem] bg-cover w-[270px] h-[305px]" />
          <button onClick={()=>handleForm(0)} className={`absolute ${showForm<0 ?"z-40":"z-20"} cursor-pointer top-[28.5rem] z-40 bg-gradient-to-r from-[#2F2175] to-[#7B48ED] font-[700] w-[350px] h-[88px] rounded-[20px]  text-white text-[32px]`}>START</button>
          </div>
        <div className='mt-[12rem] xl:mt-0 relative left-2'><FormCard index={1} title={        <h1 className='relative z-20 w-[222px] left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>BET ON US <br />EARLY AND<br /> GET MORE BENEFITS !</h1>} subtitle="DISCOUNT FOR EARLY INVESTORS" geometricForm="bg-[url('/public/pentagonform.png')] left-[1.7rem]   top-[-10.5rem] bg-cover w-[295px] h-[280px]" />
        <button onClick={()=>handleForm(1)} className={`absolute ${showForm<0 ?"z-40":"z-20"} z-40 top-[28.9rem] xl:top-[28.5rem]  bg-gradient-to-r from-[#2F2175] to-[#7B48ED] font-[700] w-[350px] h-[88px] rounded-[20px]  text-white text-[32px]`}>START</button>
         </div>
          <div className='mt-[12rem] xl:mt-0 relative left-2'><FormCard index={2} title={        <h1 className='relative z-20 w-[222px] left-[-1.1rem] top-6 font-[700] text-[32px] leading-[39px] text-[#2F2175]'>WE ARE <br />HIRING, JOIN<br /> OUR TEAM !</h1>} subtitle="COMUNITY RECRUITMENT" geometricForm="bg-[url('/public/triangleform.png')] left-[3rem]   top-[-7rem] bg-cover w-[250px] h-[220px]" />
               <button onClick={()=>handleForm(2)} className={`absolute ${showForm<0 ?"z-40":"z-20"} top-[28.9rem] cursor-pointer z-40 xl:top-[28.5rem]  bg-gradient-to-r from-[#2F2175] to-[#7B48ED] font-[700] w-[350px] h-[88px] rounded-[20px]  text-white text-[32px]`}>START</button>
          </div>
      
          <div className={`absolute left-0 ${showForm<0 ? "animate-[disappear_1s_linear_forwards] z-0":"z-30" }  w-full h-[200rem] bg-black bg-opacity-90`} />
        <div className={`absolute top-[-12rem] w-[23rem] xl:w-[80rem] h-full flex justify-center items-center ${showForm<0 ?"z-20" :"z-30"}`}>
        <div className={`absolute ${showForm<0 && "hidden" } text-white z-40 right-[20rem] cursor-pointer w-[30px] h-[30px] top-[7rem] text-[32px]`} onClick={()=>handleForm(-1)}><AiOutlineClose /></div>
          <div className={`absolute w-[400px] top-0 ${showForm!=0 ? "hidden z-20" :"z-40" }`}><MintForm  showFormMint={showForm==0} /></div>
          <div className={`absolute w-[400px] top-0 ${showForm!=1 ? "hidden z-20" :"z-40" }`}><DiscountForm  showDiscountForm={showForm==1} /></div>
          <div className={`absolute w-[400px] top-0 ${showForm!=2 ? "hidden z-20" :"z-50" }`}><RecruitmentForm  showRecruitmentForm={showForm==2} /></div> 
          </div>
          </div>
    </div>
  )
}

export default FormsStart