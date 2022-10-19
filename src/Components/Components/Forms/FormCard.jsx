import React,{useState} from 'react'
import DiscountForm from '../HelpUsToGrow/DiscountForm';
import MintForm from '../HelpUsToGrow/MintForm';

const FormCard = ({ subtitle,title,geometricForm,index }) => {
  const [showForm,setShowForm]= useState(-1);
  const handleForm=()=>{
    setShowForm(index);
  }

  return (
    <div className='flex flex-col items-center   py-14 px-6 rounded-[20px] bg-[#EDE4FF] w-[350px] h-[420px]'>
        <h3 className='relative z-20 text-[#2F2175] left-[-1rem] w-[222px] text-[20px] font-[700]'>{subtitle}</h3>
 {title}

   
            <div className='relative w-full h-full '>
            <div className={`absolute    ${geometricForm} `}/>
            </div>

            <button className='absolute z-20 top-[28.5rem] z-40 bg-gradient-to-r from-[#2F2175] to-[#7B48ED] font-[700] w-[350px] h-[88px] rounded-[20px]  text-white text-[32px]'>START</button>
            <div className='relative w-full h-full '>
            <div className={`absolute    ${geometricForm} `}/>
            </div>

    </div>
  )
}

export default FormCard