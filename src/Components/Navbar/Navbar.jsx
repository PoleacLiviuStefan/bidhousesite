import React,{useEffect} from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {signOut} from 'firebase/auth'
import Fade from 'react-reveal/Fade'
import SignUp from "../SignUp/SignUp";
import { useState } from "react";
import useBodyScrollLock from "../Functions/useBodyScrollLock";
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../DataBase/firebase-config'
import DiscountForm from "../HelpUsToGrow/DiscountForm";
import NotificationCard from '../Notifications/NotificationCard';
const Navbar = () => {
  const [isLocked,setLock]=useBodyScrollLock(true);
  const [showLogin,setShowLogin]=useState(false);
  const [user] = useAuthState(auth);
  const [username,setUsername]=useState("Sign Up")
  const [loginMenu,setLoginMenu]=useState(false)
  const [loginForm,setLoginForm]=useState(false)
  const [showNotification,setShowNotification]=useState(false)
    useEffect(()=>{
      var name="";
      if(user?.email)
      name=user.email.split('@')
   
      setUsername(name[0])
    })
 
  const handlelogin=(btn)=>{
    console.log(username)
    setShowLogin(prev=>!prev);
   
    if(username=="Sign Up" || username==undefined)
   { 
    setLoginMenu(false)
  }
    else
    {
        setLoginMenu(prev=>!prev)
    }
  }
  const logout=()=>{
    signOut(auth);
    setLoginMenu(false)
    console.log(username)
  }
  const handleForm=()=>{
      setLoginForm(prev=>!prev)
     
  }
  return (  
    <Fade top>
    <div className="fixed z-50 flex justify-center gap-[20px] w-full h-[110px] left-0 top-0 bg-gradient-to-b from-black to-transparent ">
    
      <div className={`absolute ${(!showLogin || (username!="Sign Up" && username!=undefined)) && "hidden"} flex justify-center   top-0 z-30 w-full h-screen bg-black bg-opacity-90`}>
            <SignUp locked={isLocked}/>
            <div onClick={()=>handlelogin(0)} className="w-full h-full z-20 "/>
           
      </div>
     
      <div className="relative z-20   flex align-center justify-center  xl:gap-[135px]  2xl:gap-[200px] w-full h-[40px]">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          delay={200}
        >

          <div className="relative ml-[12rem] 2xl:w-[181px] 2xl:h-[41px] xl:w-[140px] xl:h-[32px] cursor-pointer left-[105px] xl:top-[35px] 2xl:top-[30px] bg-[url('/public/logo.png')] bg-cover" />

        </Link>
        <div className="relative mr-[19rem] flex justify-center align-end  xl:gap-[10px] 2xl:gap-[20px] font-[400] xl:text-[14px] 2xl:text-[16px] text-white top-[30px]  xl:w-[80%] h-full">
         
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          delay={200}
        ><button className="relative w-[46px] h-full left-0 top-0 ">
            About
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Roadmap"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        ><button className="relative w-[72px] h-full left-0 top-0 ">
            Roadmap
          </button>
          </Link>
          <Link
          activeClass="active"
          to="ApartmentsBucharest"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[89px] h-full left-0 top-0 ">
            Apartaments
          </button>
          </Link>
          <Link
          activeClass="active"
          to="ReleaseSoon"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[103px] h-full left-0 top-0 ">
            Release Soon
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Benefits"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[62px] h-full left-0 top-0 ">
            Benefits
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Rarity"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[44px] h-full left-0 top-0 ">
            Rarity
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Team"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[42px] h-full left-0 top-0 ">
            Team
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Forms"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[47px] h-full left-0 top-0 ">
            Forms
          </button>
          </Link>
         
        
       
        
          <Link
          activeClass="active"
          to="Supporters"
          spy={true}
          smooth={true}
          offset={-50}
          delay={200}
        >
          
      
          <button className="relative w-[85px] h-full left-0 top-0 ">
            Supporters
          </button>
          </Link>
          <Link
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={-200}
          delay={200}
        >
          <button className="relative w-[31px] h-full left-0 top-0 ">
            FAQ
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Social"
          spy={true}
          smooth={true}
          offset={-200}
          delay={200}>
          <button className="relative w-[46px] h-full left-0 top-0 ">
            Social
          </button>
          </Link>
          <button className="relative w-[62px] h-full left-0 top-0 ">
            Booking
          </button>
          <div className="relative left-0 top-4 w-[1px] h-[1rem] bg-white"/>
          <button className="relative bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[138px] h-[44px] left-0 top-0 ">
          <div className="absolute top-0 bg-black opacity-50 rounded-[16px] h-full w-full z-30" />
            Bookkeeping
          </button>
          <button onClick={()=>handlelogin(1)} className={`relative ${(username!="Sign Up" && username!=undefined) &&"hidden"} bg-gradient-to-r z-30 from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[96px] h-[44px] left-0 top-0 `}>
           Sign Up
          </button>
          <button onClick={()=>handlelogin(2)} className={`relative ${(username=="Sign Up" || username==undefined) &&"hidden"} bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[126px] h-[44px] left-0 top-0 `}>
           {username}
          </button>
          <div className={`absolute ${!loginMenu && "hidden"} flex justify-center right-[0rem] top-[4rem] rounded-[8px]      flex w-[450px] h-[40px]`}>
      <ul className="text-white  flex items-center z-20">
        <li className="relative cursor-pointer">  <button className="relative bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[80px] h-[30px] left-0 top-0">Profile</button></li>
        <li className="relative ml-2   cursor-no-drop"> <div className="absolute bg-black opacity-50 rounded-[16px] h-full w-full z-30" /><button className="relative bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[80px] h-[30px] left-0 top-0">My NFT</button></li>
        <li className="relative ml-2  cursor-no-drop"><div className="absolute bg-black opacity-50 rounded-[16px] h-full w-full z-30" /><button className="relative bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[80px] h-[30px] left-0 top-0">Staking</button></li>
        <li className="relative ml-2 cursor-pointer"><button onClick={handleForm} className="relative bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[80px] h-[30px] left-0 top-0">Form</button></li>
       
        <li className="relative ml-2 cursor-pointer"><button onClick={logout} className="relative bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[80px] h-[30px] left-0 top-0">Logout</button></li>
      </ul>
      <div className="absolute bg-black opacity-80 h-full w-full z-10 blur-xl"/>
          </div>
        </div>
      </div>
        <div className={`absolute ${!loginForm &&"hidden"}  w-full    h-screen flex justify-center bg-black bg-opacity-90 z-30`}>
          <DiscountForm showDiscountForm={true} afterLogin={true} />
          <div onClick={handleForm} className="w-full h-[100rem] z-20 "/>
          </div>
          <div className={`absolute ${!showNotification && "hidden"}  top-[6rem]   right-[1rem] `}>

<NotificationCard title="Welcome to Bidhouse" message={<p className='text-[15px] px-[25px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum tempora illum consectetur minima aliquid labore quia enim magnam totam.</p>}/>
</div>
    </div>
    </Fade>
  );
};

export default Navbar;
