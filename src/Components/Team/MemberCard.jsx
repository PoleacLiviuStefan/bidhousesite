import React from 'react'

const MemberCard = ({photo,rolemember,namemember,discord,telegram,twitter}) => {
  return (

    <div className='flex flex-col mt-20 items-center'>
        {photo}
        <h2 className='font-[700] text-[22px] xl:text-[24px] text-center w-[120px]  text-white mt-6'>{namemember} </h2>
        <h3 className='font-[300] text-center  w-[250px] text-[16px] xl:text-[18px] text-white' >{rolemember} </h3>


        <div className='relative mt-8 flex'>
            <a><div className="bg-cover bg-[url('/public/discord.svg')] mr-4 w-[30px] h-[36px]" /></a>
            <a><div className="bg-cover bg-[url('/public/telegram.svg')] w-[36px] h-[36px]" /></a>
            <a><div className="bg-cover bg-[url('/public/twitter.svg')] ml-4 w-[36px] h-[36px]" /></a>
        </div>
      
    </div>
   
  )
}

export default MemberCard