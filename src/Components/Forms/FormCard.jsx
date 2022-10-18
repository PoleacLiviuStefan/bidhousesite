<<<<<<< HEAD
<<<<<<< HEAD
import React,{useState} from 'react'
import DiscountForm from '../HelpUsToGrow/DiscountForm';
import MintForm from '../HelpUsToGrow/MintForm';

const FormCard = ({ subtitle,title,geometricForm,index }) => {
  const [showForm,setShowForm]= useState(-1);
  const handleForm=()=>{
    setShowForm(index);
  }
=======
import React from 'react'

const FormCard = ({ subtitle,title,geometricForm }) => {
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
=======
import React from 'react'

const FormCard = ({ subtitle,title,geometricForm }) => {
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
  return (
    <div className='flex flex-col items-center   py-14 px-6 rounded-[20px] bg-[#EDE4FF] w-[350px] h-[420px]'>
        <h3 className='relative z-20 text-[#2F2175] left-[-1rem] w-[222px] text-[20px] font-[700]'>{subtitle}</h3>
 {title}
<<<<<<< HEAD
<<<<<<< HEAD
   
            <div className='relative w-full h-full '>
            <div className={`absolute    ${geometricForm} `}/>
            </div>
            
=======
=======
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
            <button className='absolute z-20 top-[28.5rem] z-40 bg-gradient-to-r from-[#2F2175] to-[#7B48ED] font-[700] w-[350px] h-[88px] rounded-[20px]  text-white text-[32px]'>START</button>
            <div className='relative w-full h-full '>
            <div className={`absolute    ${geometricForm} `}/>
            </div>
<<<<<<< HEAD
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
=======
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8

    </div>
  )
}

export default FormCard