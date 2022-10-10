import React from 'react'

const RarityCard = ({key,title,color}) => {
  return (
    <div className={`relative ml-6 rounded-[20px] backdrop-blur-[8px] flex flex-col items-center w-[180px] h-[344px] ${color} bg-opacity-10`}>
            <div className={`relative z-50  ${key} flex  bg-cover w-[180px] h-[260px]`}/>
            <h2 className='relative text-[20px] text-white font-[700]'>{title}</h2>
    </div>
  )
}

export default RarityCard