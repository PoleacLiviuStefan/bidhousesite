import React from 'react'

const Description = ({descriptiontxt,namembr}) => {
  return (
    <div className='flex justify-center items-center'>
    <p className='text-white text-[20px] '>
            {descriptiontxt}
    </p>
    <h3 className='absolute xl:bottom-10 right-10 font-[700] text-[18px] text-slate-200'>- {namembr} -</h3>
    </div>
  )
}

export default Description