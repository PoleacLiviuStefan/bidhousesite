import React from 'react'

const InvestorsCard = ({photo,rolemember,namemember,discord,telegram,twitter}) => {
  return (
    <div className='flex justify-center'>
    <div className="bg-cover bg-[url('/public/memberphoto.png')] w-[299px] h-[299px] mr-[8rem] " />
    <div className='flex flex-col items-start'>
    <h2 className='font-[700] text-[32px] ml-4 text-white '>{namemember}  </h2>
    <h3 className='font-[300] text-[20px] ml-4 text-white' >
    {rolemember}</h3>
    <p className='relative mt-10 text-white w-[35rem] font-[300] text-[16px] left-4 text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio accusantium totam, nobis perferendis quia molestiae quasi, nam illo quis voluptate modi quas dolorum nostrum repudiandae corrupti quod soluta sequi molestias deleniti dolores quae ad. Numquam alias, illo iste veritatis nesciunt perferendis harum similique reprehenderit eveniet corporis labore odio quos. Architecto!</p>
    <div className='relative mt-8 ml-4 flex'>
        <a><div className="bg-cover bg-[url('/public/discord.svg')] cursor-pointer mr-8 w-[42px] h-[48px]" /></a>
        <a><div className="bg-cover bg-[url('/public/telegram.svg')] cursor-pointer w-[48px] h-[48px]" /></a>
        <a><div className="bg-cover bg-[url('/public/twitter.svg')] cursor-pointer ml-8 w-[48px] h-[48px]" /></a>
    </div>
    </div>
</div>
  )
}

export default InvestorsCard