import React,{useState,useEffect} from 'react'
import { CgDanger } from 'react-icons/cg'
import {AiFillCheckCircle} from 'react-icons/ai'
const NotificationCard = ({message,logo,colorbg,size,messagebg,messagesize}) => {
    const [showNotification,setShowNotification]=useState(true)

  return (
    <div className={`${size} bg-white text-white  z-50  rounded-[16px] bg-black round-xl  ${colorbg} flex items-center justify-center`}>
    
           {logo}
            <div className={  ` ${size}  px-[10px] py-[4px] ${messagebg} flex justify-center items-center ${messagesize}  rounded-[16px] `}>{message}
            
            </div>
    </div>
  )
}

export default NotificationCard
