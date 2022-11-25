import React,{useState} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth,db } from '../DataBase/firebase-config'
import { doc, setDoc,addDoc,updateDoc,collection,getDoc,snapshot,getDocs,query,where } from "firebase/firestore"; 
import {CgDanger} from 'react-icons/cg'
import NotificationCard from '../Notifications/NotificationCard';
import {AiFillCheckCircle} from 'react-icons/ai'
const ProfileDetails = () => {
    const [user] = useAuthState(auth);
    const [surname,setSurname]=useState()
    const [forename,setForename]=useState(localStorage.getItem("forename"))
    const [birthDate,setBirthDate]=useState("")

    const [errorNotification,setErrorNotification]=useState(false)
    const [animOn,setAnimOn]=useState(false)
    const [updateForename,setUpdateForename]=useState(false)
    const [updateSurname,setUpdateSurname]=useState(false)
    const [updateBirthDate,setUpdateBirth]=useState(false)
           let username="";
           let emailuser="";
           if(!localStorage.getItem("avatarimg"))
           localStorage.setItem("avatarimg", require('../logotxt.png'))
          const [avatar,setAvatar] =useState(localStorage.getItem("avatarimg"))
           if(user)
    {
      let usernamen=user.email.split('@')
      localStorage.setItem("username",usernamen[0])
      localStorage.setItem("useremail",user.email)
     emailuser=user.email
    }
    else{
      localStorage.setItem("username","")
      localStorage.setItem("useremail","")
    }
    function handleChange(e) {
      console.log(e.target.files);
      localStorage.setItem("avatarimg",(URL.createObjectURL(e.target.files[0])));
      setAvatar(localStorage.getItem("avatarimg"))
  }

  const updateData=()=>{
    ;(async ()=>{
      setUpdateForename(prev=>!prev);
      setUpdateSurname(prev=>!prev);
      setUpdateBirth(prev=>!prev)
      const docRef=doc(db,"usersinformation",localStorage.getItem("userid"))
      updateDoc(docRef,{
        surname:surname,
        forename:forename,
        birthDate:birthDate
      })
      localStorage.setItem("surname",surname)
      localStorage.setItem("forename",forename)
      localStorage.setItem("birthdate",birthDate)
      setErrorNotification(true);
      setTimeout(()=>{
        setAnimOn(false)
        
        setErrorNotification(false)
        
    },5000)
  })()
     }
     const updateInput = (nr)=>{
      switch(nr){
      case 0:
      setUpdateSurname(prev=>!prev);
      break;
      case 1:
        setUpdateForename(prev=>!prev);
        break;
      case 2:
        setUpdateBirth(prev=>!prev);
        break;
      }
     }
  return (
    <div className={`absolute z-30 text-white flex flex-col xl:h-screen h-[85rem]   w-[31rem] items-center`}>
      <div className='flex flex-col items-center justify-center'>
      <div className='w-[320px]  flex flex-col items-center wrap justify-center mt-4 h-[320px] bg-black border-[1px] border-[#7B48ED] rounded-[50%]'>
    <img src={avatar} width="250px" className='relative ' />
    </div>
    <div className='flex xl:flex-row flex-col'>
    <div className='relative flex mt-6 justify-center xl:w-[500px] items-center xl:left-[1rem] border-[1px] h-[40px] rounded-[16px] border-[#a98be4]'>
    <h3 className='relative ml-[4rem] xl:ml-[3rem] w-[100] text-[18px] xl:text-[20px] text-white mr-2'>Change Avatar</h3>
    <input type="file"  className='relative xl:left-[2.5rem] w-[100px] xl:w-[200px] xl:mr-[5rem] mr-[3rem]' onChange={handleChange}  /> 
   
    </div>
    <button onClick={updateData}  className="relative bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[138px] h-[44px] left-8 top-2 xl:top-5 ">
          
            Save Changes
          </button>
    
    </div>
    </div>
    <div className={`relative flex flex-col items-center w-full h-full xl:grid xl:grid-cols-3 left-[-21.3rem]`}>
        <div className='relative xl:left-0 left-[21.5rem] flex flex-col top-[1rem]'>
        <h3 className='text-[20px] xl:text-[24px]'>Username</h3>
        <input className={`relative caret-transparent outline-none  px-8 mt-1 text-[16px] xl:text-[18px]  rounded-[10px] w-[300px] xl:w-[368px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`} value={localStorage.getItem("username")}></input>
        </div>
        <div className='relative  mt-[.5rem] top-[1rem] left-[21.5rem] xl:left-[15rem]  flex flex-col '>
        <h3 className='text-[20px] xl:text-[24px]'>Email</h3>
        <input className={`relative caret-transparent outline-none  px-8 mt-1 text-[16px] xl:text-[18px]  rounded-[10px] w-[300px] xl:w-[368px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`} value={localStorage.getItem("useremail")}></input>
       </div>
       <div className='relative top-[1.5rem] xl:top-[1rem] left-[21.5rem] xl:left-[30rem]  flex flex-col '>
        <h3 className='text-[20px] xl:text-[24px]'>Discord</h3>
        <input className={`relative caret-transparent outline-none  px-8 mt-1 text-[16px] xl:text-[18px]  rounded-[10px] w-[300px] xl:w-[368px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`} value={localStorage.getItem("discord")}></input>
        
       </div>
       <div className='relative mt-[2rem] xl:mt-[1.rem] left-[21.5rem] xl:left-0   flex flex-col '>
        <h3 className='text-[20px] xl:text-[24px]'>Twitter</h3>
        <input className={`relative caret-transparent outline-none  px-8 mt-1 text-[16px] xl:text-[18px]  rounded-[10px] w-[300px] xl:w-[368px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`} value={localStorage.getItem("twitter")}></input>
       </div>
       <div className='relative mt-[.5rem] xl:mt-[1.5rem] left-[21.5rem] xl:left-[15rem]  flex flex-col '>
        <h3 className='text-[20px] xl:text-[24px]'>Country</h3>
        <input className={`relative caret-transparent outline-none  px-8 mt-1 text-[16px] xl:text-[18px]  rounded-[10px] w-[300px] xl:w-[368px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`} value={localStorage.getItem("country")}></input>
       </div>
       <div className='relative mt-[.5rem] xl:mt-[1.5rem] left-[21.5rem] xl:left-[30rem]  flex flex-col '>
        <h3 className='text-[20px] xl:text-[24px]'>Wallet Adress</h3>
        <input className={`relative caret-transparent outline-none  px-8 mt-1 text-[16px] xl:text-[18px]  rounded-[10px] w-[300px] xl:w-[368px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`} value={localStorage.getItem("walletAdress")}></input>
       </div>
       <div className='relative mt-[.5rem] xl:mt-[.5rem] left-[21.5rem] xl:left-0  flex flex-col '>
        <h3 className='text-[20px] xl:text-[24px]'>Surname(modifiable)</h3>
        <input onClick={()=>updateInput(0)} className={`relative caret-transparent outline-none  px-8 mt-1 text-[16px] xl:text-[18px]  rounded-[10px] w-[300px] xl:w-[368px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`}  onChange={(event)=>{
          setSurname(event.target.value);
        }} value={updateSurname ? surname : localStorage.getItem("surname")}></input>
       </div>
       <div className='relative mt-[.5rem] left-[21.5rem] xl:left-[15rem]  flex flex-col '>
        <h3 className='text-[20px] xl:text-[24px]'>Forename(modifiable)</h3>
        <input onClick={()=>updateInput(1)} className={`relative caret-transparent outline-none  px-8 mt-1 text-[16px] xl:text-[18px]  rounded-[10px] w-[300px] xl:w-[368px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`}  onChange={(event)=>{
          setForename(event.target.value);
        }} value={updateForename ? forename : localStorage.getItem("forename")}></input>
       </div>
       <div className='relative mt-[.5rem] left-[21.5rem] xl:left-[30rem]  flex flex-col '>
        <h3 className='text-[20px] xl:text-[24px]'>Birth date</h3>
        <input onClick={()=>updateInput(2)} type="date" onChange={(event)=>{
          setBirthDate(event.target.value);
        }} className={`relative caret-transparent outline-none  px-8 mt-1 text-[16px] xl:text-[18px]  rounded-[10px] w-[300px] xl:w-[368px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`} value={updateBirthDate ? forename : localStorage.getItem("birthDate")}></input>
       </div>
       </div>
       <div className={`fixed left-2 xl:left-[30rem] xl:absolute top-0 ${animOn && "animate-[errornotificationdisappear_.5s_linear_forwards]"} ${errorNotification ? "animate-[errornotificationappear_.5s_linear_forwards]":"hidden"}  right-[4.5rem] xl:right-[-24rem] `}>
     <NotificationCard logo={<div className='text-[40px] '><AiFillCheckCircle /> </div>} message="Changes saved" messagesize=" text-[20px] "  messagebg="bg-green-300" colorbg="bg-green-300" size= " w-[340px] xl:w-[380px] h-[100px]" />
     
     </div>
    </div>
  )
}

export default ProfileDetails