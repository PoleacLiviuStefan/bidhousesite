import React,{useState} from 'react'

const RarityCard = ({keyimg,title,color,benefit}) => {
    const[expand,setExpand] =useState(false);
   const handleExpand=()=>{
        setExpand(true);
        }
        const handleExpandBack=()=>{
            setExpand(false);
            }
  return (
    <div onMouseLeave={handleExpandBack} onMouseEnter={handleExpand} className={`relative ml-6 rounded-[20px] backdrop-blur-[8px] flex flex items-center justify-center w-[180px] h-[424px] `}>
      {benefit}
        <div className={`relative  rounded-[20px] backdrop-blur-[8px] flex flex-col items-center w-[180px] ${expand ?'h-[424px] py-10':'h-[344px]'} ${color} bg-opacity-10`}>
            <div className={`relative top-5    ${keyimg} flex  bg-cover w-[180px] h-[260px]`}/>
            <h2 className='relative top-9 text-[20px] text-white font-[700]'>{title}</h2>
            </div>
    </div>
  )
}

export default RarityCard