import React from 'react'

const Cardtxt = ({color,discount}) => {
  return (
    <div className={` ${color} absolute bottom-[-7.3rem] bg-opacity-10    flex justify-center items-center   rounded-[20px]  h-[120px] w-[185px] backdrop-blur-[8px]`}>
       <div className='absolute backdrop-blur-[8px] w-full h-full z-10 hover:z-30  w-full h-full cursor-pointer'/> {discount}
        </div>
  )
}

export default Cardtxt