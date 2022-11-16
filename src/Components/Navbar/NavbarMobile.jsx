import { useState,useEffect } from "react";
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

import SignUp from "../SignUp/SignUp";
import Fade from 'react-reveal/Fade'
import useBodyScrollLock from "../Functions/useBodyScrollLock";
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../DataBase/firebase-config'
const NavbarMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuHandler = () => {
    setOpenMenu((prev) => !prev);
  };
  const [isLocked,setLock]=useBodyScrollLock(true);
  const [showLogin,setShowLogin]=useState(false);
  const [user] = useAuthState(auth);
  const [username,setUsername]=useState("Sign Up")
  const [loginMenu,setLoginMenu]=useState(false)
  const [loginForm,setLoginForm]=useState(false)
    useEffect(()=>{
      var name="";
      if(user?.email)
      name=user.email.split('@')
      if(name!="" && name!="Sign Up")
      setShowLogin(false);
     if(name=="")
      setUsername("Sign Up")
      else
      setUsername(name[0])
    })
  const handlelogin=(btn)=>{
    console.log(username)
    setShowLogin(prev=>!prev);
    if(btn===0)
    setLock(!isLocked)
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
      setLock(!isLocked)
  }
  return (
    <div className="fixed z-50  w-[23rem] flex justify-start">
      <div
        onClick={menuHandler}
        className="absolute left-4 flex top-6 flex-col"
      >
        <div className="absolute left-[-.5rem] top-[-.5rem] bg-black rounded-[50%] w-[40px] h-[40px]" />
        <div
          className={`w-[1.5rem] ${
            openMenu && "animate-[linetop_.2s_linear_forwards]"
          } h-[4px] border-[1px] z-30 border-black bg-white`}
        />
        <div
          className={`relative ${
            openMenu && "hidden"
          }
          top-[5px]
            w-[1.2rem] border-[1px]  z-30 border-black h-[4px] bg-white`}
        />
        <div
          className={` ${ 
            openMenu ? "rotate-45 top-[-4.5px]" : "top-[10px]"}  relative  w-[1.5rem] border-[1px] z-30 border-black h-[4px] bg-white`}
        />
        
        <div className={` absolute left-[-1rem] ${!openMenu ? "hidden" : "animate-[extendmenu_.5s_linear_forwards]"} top-[-1.5rem]  w-[20rem] h-screen  bg-black`}>
          <ul className="text-white">
            <li> <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          delay={200}
        >

         <Fade delay={500}> <div onClick={menuHandler} className="relative top-4 w-[140px] h-[32px] cursor-pointer left-[100px] xl:top-[35px] 2xl:top-[30px] bg-[url('/public/logo.svg')] bg-cover" />

</Fade>
        </Link></li>
        <li>
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          delay={200}
        ><button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[3rem] `}>
            About
          </button>
          </Link>
        </li>
        <li>   <Link
          activeClass="active"
          to="Roadmap"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        ><button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[4.5rem] `}>
            Roadmap
          </button>
          </Link></li>
          <li>
          <Link
          activeClass="active"
          to="ApartmentsBucharest"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[6rem]`}>
            Apartaments
          </button>
          </Link>
          </li>
          <li>
          <Link
          activeClass="active"
          to="ReleaseSoon"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[7.5rem]`}>
            Release Soon
          </button>
          </Link>
          </li>
          <li>
          <Link
          activeClass="active"
          to="Benefits"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[9rem]`}>
            Benefits
          </button>
          </Link>
          </li>
          <li><Link
          activeClass="active"
          to="Rarity"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[10.5rem]`}>
            Rarity
          </button>
          </Link></li>
          <li>
          <Link
          activeClass="active"
          to="Team"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[12rem] `}>
            Team
          </button>
          </Link>
          </li>
          <li>
          <Link
          activeClass="active"
          to="Forms"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[13.5rem] `}>
            Forms
          </button>
          </Link>
          </li>
          <li>
          <Link
          activeClass="active"
          to="Supporters"
          spy={true}
          smooth={true}
          offset={-50}
          delay={200}
        >
          
      
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[15rem] `}>
            Supporters
          </button>
          </Link>
          </li>
          <li>
          <Link
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[16.5rem] `}>
            FAQ
          </button>
          </Link>
          </li>
          <li>
           
          <Link
          activeClass="active"
          to="Social"
          spy={true}
          smooth={true}
          offset={-250}
          delay={200}>
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[18rem] `}>
            Social
          </button>
          </Link>
          </li>
          <li>
          <button onClick={()=>handlelogin(1)} className={`relative ${(username!="Sign Up" && username!=undefined) &&"hidden"} bg-gradient-to-r z-30 from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[96px] h-[44px] left-[8rem] top-[20rem]`}>
           Sign Up
          </button></li>
          <li>
          <button onClick={()=>handlelogin(2)} className={`relative ${(username=="Sign Up" || username==undefined) &&"hidden"} bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[126px] h-[44px] left-[7.3rem] top-[20rem] `}>
           {username}
          </button>
          </li>
          <li>
          <button  onClick={logout} className={`relative ${!loginMenu && "hidden"}  ${openMenu ?"animate-[appear_1s_linear_forwards]":""}   bg-gradient-to-r z-30 from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[96px] h-[44px] left-[8.3rem] top-[21rem]`}>
          Logout
          </button>
          </li>
          </ul>
          
     
      </div>
      
      </div>
      <div className={`absolute left-3 ${!showLogin  && "hidden"} flex justify-center   top-0 z-30 w-full h-screen bg-black bg-opacity-90`}>
            <SignUp />
            <div onClick={handlelogin} className="w-full h-full z-20 "/>
           
      </div>
    </div>
  );
};

export default NavbarMobile;
