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

    </div>
  )
}

export default FormCard