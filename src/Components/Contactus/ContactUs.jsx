import React,{useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade'
import NotificationCard from '../Notifications/NotificationCard';
import {AiFillCheckCircle} from 'react-icons/ai'
const ContactUs = () => {

  const [roleOption,setRoleOption]=useState(0);
  const [notificationShow,setNotificationShow]=useState(false)
  const handleRole=(roleIndex)=>{
        setRoleOption(roleIndex);
        console.log(roleIndex);
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dd2l6et', 'template_ba8zpxq', e.target, 'bCFO-F4oUHOZzgTNO')
      .then((result) => {

          setNotificationShow(true)
          setTimeout(()=>{
              setNotificationShow(false)
          },7000)
      }, (error) => {
          console.log(error.text);
      });
     
  };
  const showNotification= ()=>{

  }
  return (
    <div name="Contact" className="relative flex flex-col items-center w-full h-[70rem] bg-black">
       <div className="absolute z-10 top-[-30rem] xl:top-[-23rem] left-0 bg-[url('/public/contactusglow.png')] w-[1249px] h-[1003px]"/>
    <div className="flex z-20 flex-col items-center w-[78rem]">
      <Fade top>
      <h1 className="font-[600] text-[30px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-b from-[#17DD8A] to-[#0d7abf] ">
        CONTACT<span className="text-transparent"> US</span>
      </h1>
      </Fade>
      <Fade bottom>
                  <form onSubmit={sendEmail}  ref={form}  className='relative  xl:left-0 top-[6rem] flex flex-col text-white text-[18px]'>
                    <label className='font-[400] text-[20px] xl:text-[24px]'>Contact us directly on e-mail</label>
                    <input
        className="relative outline-none  px-8 top-8 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]"
        name="user_name"
        placeholder="Name"
        required
      ></input>
      <select  className="relative  mt-7 outline-none  px-8 top-8   rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]" required>
        <option onClick={()=>handleRole(0)} className='text-black'  value="default">Select Role</option>
        <option onClick={()=>handleRole(1)} className='text-black'  value="visitor">Visitor</option>
        <option onClick={()=>handleRole(2)} className='text-black'  value="member">Member</option>
      </select>
      <input
        className="relative mt-7 outline-none  px-8 top-8 text-[16px] xl:text-[18px]   rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]"
        placeholder="Contact e-mail"
        name="user_email"
        required
      ></input>
      <label className='relative mt-[4rem] font-[400] text-[20px] xl:text-[24px]'>  Your opinion is very important to us!</label>
      <textarea
        placeholder="If you have something to say, we are listening...!"
        name="message"
        className="relative opacity-70 px-10 py-4 mt-[2rem]  rounded-[10px] font-[200] text-white text-[16px] xl:text-[20px] w-[350px] xl:w-[468px] h-[145px] outline-none  bg-transparent border-[1px] border-[#7B48ED]"
      ></textarea>
      <div className='hidden'>
      <input name="visitor" value={roleOption==1 ? "da" : "nu" } readOnly/>
      <input name="member" value={roleOption==2 ? "da" : "nu" } readOnly/> 
      </div>
         <button
         value="Send"
        type="submit"
        onClick={showNotification}
        className="relative bg-gradient-to-r from-[#FFFFFF00]/10 to-[#523F83]/10 mt-[2.5rem]  w-[350px] xl:w-[468px] h-[56px] text-[16px] font-[600] border-[1px] rounded-[16px] border-[#a98be4] "
      >
        Send
      </button>
                  </form></Fade>
      </div>
      <div className={`fixed  w-screen h-screen z-50  ${notificationShow? "animate-[errornotificationresetappearmobilecontact_.5s_linear_forwards] xl:animate-[errornotificationappearcontact_.5s_linear_forwards]":"hidden"} left-2 `}>
      <NotificationCard logo={<div className='text-[40px]'><AiFillCheckCircle /> </div>} message="Form Sent" messagesize=" text-[14px] "  messagebg="bg-green-300" colorbg="bg-green-300" size= " w-[340px] xl:w-[380px] h-[100px]" />
     
     </div> </div>
  )
}

export default ContactUs