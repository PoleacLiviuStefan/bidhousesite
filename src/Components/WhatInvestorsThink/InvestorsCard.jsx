import React from 'react'

const InvestorsCard = ({photo,rolemember,namemember,discord,telegram,twitter}) => {
  return (
    <div className='flex xl:flex-row flex-col items-center  xl:justify-center'>
    <div className="bg-cover bg-[url('/public/memberphoto.png')]    w-[200px] h-[200px] xl:w-[299px] xl:h-[299px] xl:mr-[8rem] " />
    <div className='flex flex-col mt-6 xl:mt-0 items-start'>
    <h2 className='font-[700] text-[26px] xl:text-[32px] ml-4 text-white '>{namemember}  </h2>
    <h3 className='font-[300] text-[18px] xl:text-[20px] ml-4 text-white' >
    {rolemember}</h3>
    <p className='relative mt-4 xl:mt-10 text-white w-[250px] xl:w-[35rem] font-[300] text-[16px] left-4 text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio accusantium totam, nobis perferendis quia molestiae quasi, nam illo quis voluptate modi quas dolorum nostrum repudiandae corrupti quod soluta sequi molestias deleniti dolores quae ad. Numquam alias, illo iste veritatis nesciunt perferendis harum similique reprehenderit eveniet corporis labore odio quos. Architecto!</p>
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