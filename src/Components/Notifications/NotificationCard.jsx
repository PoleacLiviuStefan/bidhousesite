import React,{useState,useEffect} from 'react'
import { CgDanger } from 'react-icons/cg'
import {AiFillCheckCircle} from 'react-icons/ai'
const NotificationCard = ({message,logo,colorbg,size}) => {
    const [showNotification,setShowNotification]=useState(true)

  return (
    <div className={`${size} bg-white text-white    rounded-[16px] bg-black round-xl  ${colorbg} flex items-center justify-center`}>
    
           {logo}
            <div className={  ` ${size} bg-[#e03c3c] px-[10px] py-[4px] flex justify-center items-center   rounded-[16px] `}>{message}
            
            </div>
    </div>
  )
}

export default NotificationCard
