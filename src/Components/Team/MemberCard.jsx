import React from 'react'

const MemberCard = ({photo,rolemember,namemember,discord,telegram,twitter,linkedin}) => {
  return (

    <div className='flex flex-col mt-20 items-center'>
        {photo}
        <h2 className='font-[700] text-[22px] xl:text-[24px] text-center w-[120px]  text-white mt-6'>{namemember} </h2>
        <h3 className='font-[300] text-center  w-[250px] text-[16px] xl:text-[18px] text-white' >{rolemember} </h3>


        <div className='relative mt-8 flex'>
            <a href={discord}><div className="bg-cover cursor-pointer bg-[url('/public/discord.svg')] mr-2 w-[30px] h-[36px]" /></a>
            <a href={telegram}><div className="bg-cover cursor-pointer bg-[url('/public/telegram.svg')] w-[36px] h-[36px]" /></a>
            <a href={twitter}><div className="bg-cover cursor-pointer bg-[url('/public/twitter.svg')] ml-2 w-[36px] h-[36px]" /></a>
            <a href={linkedin}><div className="bg-cover cursor-pointer bg-[url('/public/linkedin.png')] ml-2 w-[37px] h-[37px]" /></a>
            
        </div>
      
    </div>
   
  )
}

export default MemberCard