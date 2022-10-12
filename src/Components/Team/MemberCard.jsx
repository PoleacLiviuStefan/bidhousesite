import React from 'react'

const MemberCard = ({photo,rolemember,namemember,discord,telegram,twitter}) => {
  return (
    <div className='flex flex-col items-center'>
        <div className="bg-cover bg-[url('/public/memberphoto.png')] w-[420px] h-[420px] " />
        <h2 className='font-[700] text-[32px] text-white mt-6'>{rolemember} </h2>
        <h3 className='font-[300] text-[20px] text-white' >{namemember} </h3>
        <p className='relative mt-4 text-white w-[35rem] left-4 text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio accusantium totam, nobis perferendis quia molestiae quasi, nam illo quis voluptate modi quas dolorum nostrum repudiandae corrupti quod soluta sequi molestias deleniti dolores quae ad. Numquam alias, illo iste veritatis nesciunt perferendis harum similique reprehenderit eveniet corporis labore odio quos. Architecto!</p>
        <div className='relative mt-8 flex'>
            <a><div className="bg-cover bg-[url('/public/discord.svg')] mr-4 w-[42px] h-[48px]" /></a>
            <a><div className="bg-cover bg-[url('/public/telegram.svg')] w-[48px] h-[48px]" /></a>
            <a><div className="bg-cover bg-[url('/public/twitter.svg')] ml-4 w-[48px] h-[48px]" /></a>
        </div>
      
    </div>
  )
}

export default MemberCard