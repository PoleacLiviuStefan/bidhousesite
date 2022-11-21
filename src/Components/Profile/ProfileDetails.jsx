import React,{useState} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../DataBase/firebase-config'

const ProfileDetails = () => {
    const [user] = useAuthState(auth);
           let username="";
           let emailuser="";
           if(!localStorage.getItem("avatarimg"))
           localStorage.setItem("avatarimg", require('./logotxt.png'))
          const [avatar,setAvatar] =useState(localStorage.getItem("avatarimg"))
           if(user)
    {
      let usernamen=user.email.split('@')
      localStorage.setItem("username",usernamen[0])
      localStorage.setItem("useremail",user.email)
     emailuser=user.email
    }
    function handleChange(e) {
      console.log(e.target.files);
      localStorage.setItem("avatarimg",(URL.createObjectURL(e.target.files[0])));
      setAvatar(localStorage.getItem("avatarimg"))
  }
    
  return (
    <div className={`absolute z-30 text-white flex flex-col   w-[31rem] items-center`}>
      <div className='flex flex-col items-center justify-center'>
      <div className='w-[320px] flex flex-col items-center wrap justify-center mt-4 h-[320px] bg-black border-[1px] border-[#7B48ED] rounded-[50%]'>
    <img src={avatar} width="250px" className='relative ' />
    </div>
    <div className='relative flex mt-6 justify-center items-center left-[1rem] border-[1px] h-[40px] rounded-[16px] border-[#a98be4]'>
    <h3 className='relative ml-[3rem] text-[20px] text-white mr-2'>Change Avatar</h3>
    <input type="file"  className='relative left-[2.5rem] w-[200px] mr-[5rem]' onChange={handleChange}  /> 
    </div>
    
    </div>
    <div className='relative grid grid-cols-2 left-[-15rem]'>
        <div className='relative flex flex-col top-[1rem]'>
        <h3 className='text-[20px] xl:text-[24px]'>Username</h3>
        <input className={`relative caret-transparent outline-none  px-8 mt-4 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`} value={localStorage.getItem("username")}></input>
        </div>
        <div className='relative mt-[1rem] left-[17rem]  flex flex-col '>
        <h3 className='text-[20px] xl:text-[24px]'>Email</h3>
        <input className={`relative caret-transparent outline-none  px-8 mt-4 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`} value={localStorage.getItem("useremail")}></input>
       </div>
     
       </div>
    </div>
  )
}

export default ProfileDetails