import React from 'react'

const MemberCard = ({photo,rolemember,namemember,discord,telegram,twitter}) => {
  return (

    <div className='flex flex-col mt-20 items-center'>
        {photo}
        <h2 className='font-[700] text-[32px] text-center w-[150px]  text-white mt-6'>{namemember} </h2>
        <h3 className='font-[300] text-[20px] text-white' >{rolemember} </h3>


        <div className='relative mt-8 flex'>
            <a><div className="bg-cover bg-[url('/public/discord.svg')] mr-4 w-[42px] h-[48px]" /></a>
            <a><div className="bg-cover bg-[url('/public/telegram.svg')] w-[48px] h-[48px]" /></a>
            <a><div className="bg-cover bg-[url('/public/twitter.svg')] ml-4 w-[48px] h-[48px]" /></a>
        </div>
      
    </div>
   
  )
}

export default MemberCard