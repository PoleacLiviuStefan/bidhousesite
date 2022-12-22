import React,{useState} from 'react'

const MemberCard = ({photo,rolemember,namemember,discord,telegram,twitter,linkedin}) => {

  const [show,setShow]=useState(false)
  const handleShow=()=>{
    setShow(prev=>!prev)
  }
  return (

    <div className='flex flex-col mt-10 items-center'>
        {photo}
        <h2 className='font-[700] text-[22px] xl:text-[24px] text-center w-[120px]  text-white mt-6'>{namemember} </h2>
        <h3 className='font-[300] text-center  w-[210px] text-[16px] xl:text-[18px] text-white' >{rolemember} </h3>

        <div  className={`absolute flex justify-center items-center ${!show && "hidden"} w-full h-full   bg-black bg-opacity-80`}>
      <h1 className='text-[22px] text-white text-center'>{discord}</h1>
    </div>
        <div className='relative mt-8 flex'>
            <div onClick={handleShow} className="bg-cover cursor-pointer bg-[url('/public/discord.svg')] mr-2 w-[30px] h-[36px]" />
            
            <a href={telegram}><div className="bg-cover cursor-pointer bg-[url('/public/telegram.svg')] w-[36px] h-[36px]" /></a>
            <a href={twitter}><div className="bg-cover cursor-pointer bg-[url('/public/twitter.svg')] ml-2 w-[36px] h-[36px]" /></a>
            <a href={linkedin}><div className="bg-cover cursor-pointer bg-[url('/public/linkedin.png')] ml-2 w-[37px] h-[37px]" /></a>
            
        </div>
      
    </div>
   
  )
}

export default MemberCard