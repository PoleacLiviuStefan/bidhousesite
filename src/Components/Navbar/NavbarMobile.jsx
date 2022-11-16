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
import DiscountForm from "../HelpUsToGrow/DiscountForm";
import SignUp from "../SignUp/SignUp";
import Fade from 'react-reveal/Fade'
import useBodyScrollLock from "../Functions/useBodyScrollLock";
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../DataBase/firebase-config'
import {AiOutlineClose} from 'react-icons/ai'
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
 
    if(username=="Sign Up" || username==undefined)
   { 
    setLoginMenu(false)
  }
    else
    {
        setLoginMenu(true)
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
    <div className="fixed z-50  w-[23rem] flex justify-start">
      <div
        onClick={menuHandler}
        className="absolute px-4 py-4  flex top-6 flex-col"
      >
        <div className="absolute left-[.5rem] top-[.5rem] bg-black rounded-[50%] w-[40px] h-[40px]" />
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
            openMenu ? "rotate-45 top-[-3.8px]" : "top-[10px]"}  relative  w-[1.5rem] border-[1px] z-30 border-black h-[4px] bg-white`}
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
          to="about"
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
        ><button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[4rem] `}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[5rem]`}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[6rem]`}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[7rem]`}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[8rem]`}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[9rem] `}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[10rem] `}>
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
          
      
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[11rem] `}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[12rem] `}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[13rem] `}>
            Social
          </button>
          </Link>
          </li>
          <li>
          <button onClick={()=>handlelogin(1)} className={`relative ${(username!="Sign Up" && username!=undefined) &&"hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} bg-gradient-to-r z-30 from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[96px] h-[44px] left-[8rem] top-[14rem]`}>
           Sign Up
          </button></li>
          <li className="flex ">
          <button onClick={()=>handlelogin(2)} className={`relative ${(username=="Sign Up" || username==undefined) &&"hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""}bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[126px] h-[44px] left-[7rem] top-[14rem] `}>
           {username}
          </button>
      
          </li>
          <li>
          <button  onClick={logout} className={`relative ${(username=="Sign Up" || username==undefined) &&"hidden"}  ${openMenu ?"animate-[appear_1s_linear_forwards]":""}   bg-gradient-to-r z-30 from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[126px] h-[44px] left-[2rem] top-[15rem]`}>
          Logout
          </button>
          <button onClick={handleForm} className={`relative  ${(username=="Sign Up" || username==undefined) &&"hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""}bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[126px] h-[44px] left-[3.3rem] top-[15rem]`}>Form</button>
   
          </li>
              <li>
              <button className={`relative ${openMenu ?"animate-[appear_1s_linear_forwards]":""} bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px]  w-[126px] h-[44px] left-[2rem] top-[16rem]`}>My NFT</button>
              <button className={`relative  ${(username=="Sign Up" || username==undefined) &&"hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[126px] h-[44px] left-[3.3rem] top-[16rem]`}>Staking</button>
              </li>
          </ul>
          
     
      </div>
      
      </div>
      <div className={`absolute  ${!showLogin  && "hidden"} flex justify-center   top-0 z-30 w-screen h-screen bg-black bg-opacity-90`}>
            <SignUp />
            <div onClick={handlelogin} className="w-full h-full z-20 "/>
           
      </div>
      <div className={`absolute ${!loginForm && "hidden"}   w-screen overflow-y-scroll    h-[88rem] flex justify-center bg-black bg-opacity-90 z-30`}>
          <DiscountForm showDiscountForm={true} afterLogin={true} />
          <div onClick={handleForm} className="w-full h-[100rem] z-20 "/>
          <div className={`absolute  text-white z-40 right-[2rem] cursor-pointer w-[30px] h-[30px] top-[2rem] text-[32px]`} onClick={handleForm}><AiOutlineClose /></div>
          </div>
    </div>
  );
};

export default NavbarMobile;
