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
import ProfileDetails from "../Profile/ProfileDetails";
const NavbarMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLocked,setLock]=useBodyScrollLock(true);
  const [showLogin,setShowLogin]=useState(false);
  const [user] = useAuthState(auth);
  const [username,setUsername]=useState("Sign Up")
  const [loginMenu,setLoginMenu]=useState(false)
  const [loginForm,setLoginForm]=useState(false)
  const [profileDetails,setProfileDetails]=useState(false)
  const [retratAnimation,setRetractAnimation]=useState(false)
  const menuHandler = () => {
    if(openMenu)
    {
      setRetractAnimation(true)
      setTimeout(()=>{
        setOpenMenu(false)
          setRetractAnimation(false)
      },500)
    }
    else
    setOpenMenu((prev) => !prev);
  };
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
        handleProfile()
    }
  }
  const logout=()=>{
    signOut(auth);
    setLoginMenu(false)
    console.log(username)
    localStorage.setItem("twitter","")
    localStorage.setItem("discord","")
    localStorage.setItem("useremail","")
    localStorage.setItem("walletAdress","")
    localStorage.setItem("country","")
    localStorage.setItem("avatarimg", require('../logotxt.png'))
    localStorage.setItem("surname","");
    localStorage.setItem("forename","");
    localStorage.setItem("birthdate","")
  }
  const handleForm=()=>{
      setLoginForm(prev=>!prev)
    
  }
  const handleProfile=()=>{
    setProfileDetails(prev=>!prev)
   
}
  return (
    <div className={`fixed z-50 ${openMenu ?"w-[23rem]": " w-0"} mb-4 h-screen  w-[23rem] flex justify-start`}>
      <div
        onClick={menuHandler}
        className="absolute px-4 py-4  flex top-6 flex-col"
          >
        <div className="absolute left-[.5rem] top-[.5rem] bg-black rounded-[50%] w-[40px] h-[40px]" />
        <div
          className={`w-[1.5rem] ${
            openMenu && "animate-[linetop_.2s_linear_forwards]"
          } ${retratAnimation && "animate-[retracttop_.2s_linear_forwards]"} h-[4px] border-[1px] z-30 border-black bg-white`}
        />
        <div
          className={`relative ${
            openMenu ? "hidden" :"animate-[middleappear_.2s_linear_forwards]"
          } 
          top-[5px]
            w-[1.2rem] border-[1px]  z-30 border-black h-[4px] bg-white`}
        />
        <div
          className={` ${ 
            openMenu ? "animate-[linebottom_.2s_linear_forwards] top-[-3.8px]":"animate-[slidedown_.2s_linear_forwards]" }  ${retratAnimation && " animate-[retractbottom_.2s_linear_forwards]"} relative  w-[1.5rem] border-[1px] z-30 border-black h-[4px] bg-white`}
        />
        
        <div className={` fixed left-[-1rem]  ${!openMenu ? "hidden" : "animate-[extendmenu_.5s_linear_forwards]"} ${retratAnimation && "animate-[retractmenu_.5s_linear_forwards]"} top-[0rem]   h-screen  bg-black`}>
          <ul className="text-white">
            <li> <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          delay={200}
        >

         <Fade delay={500}> <div onClick={menuHandler} className={`relative ${retratAnimation && "hidden"} top-4 w-[140px] h-[32px] cursor-pointer left-[100px] xl:top-[35px] 2xl:top-[30px] bg-[url('/public/logo.svg')] bg-cover`} />

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
        ><button onClick={menuHandler} className={`relative whitespace-nowrap ${retratAnimation && "hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[2rem] `}>
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
        ><button onClick={menuHandler} className={`relative whitespace-nowrap ${retratAnimation && "hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[3rem] `}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${retratAnimation && "hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[4rem]`}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${retratAnimation && "hidden"}  ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[5rem]`}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${retratAnimation && "hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[6rem]`}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${retratAnimation && "hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[7rem]`}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${retratAnimation && "hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[8rem] `}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${retratAnimation && "hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[9rem] `}>
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
          
      
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${retratAnimation && "hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[10rem] `}>
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
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${retratAnimation && "hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center text-left h-full left-4 top-[11rem] `}>
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
          offset={100}
          delay={200}>
          <button onClick={menuHandler} className={`relative whitespace-nowrap ${retratAnimation && "hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} w-full text-center h-full left-4 top-[12rem] `}>
            Social
          </button>
          </Link>
          </li>
          <li>
          <button onClick={()=>handlelogin(1)} className={`relative ${retratAnimation && "hidden"} ${(username!="Sign Up" && username!=undefined) &&"hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} bg-gradient-to-r z-30 from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[96px] h-[44px] left-[8rem] top-[12.5rem]`}>
           Sign Up
          </button></li>
          <li className="flex ">
          <button onClick={()=>handlelogin(2)}  className={`relative ${retratAnimation && "hidden"} ${(username=="Sign Up" || username==undefined) &&"hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""}bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[126px] h-[44px] left-[7rem] top-[12.5rem] `}>
           {username}
          </button>
      
          </li>
          <li>
          <button  onClick={logout} className={`relative ${retratAnimation && "hidden"} ${(username=="Sign Up"  || username==undefined) &&"hidden"}  ${openMenu ?"animate-[appear_1s_linear_forwards]":""}   bg-gradient-to-r z-30 from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[126px] h-[44px] left-[2rem] top-[13.5rem]`}>
          Logout
          </button>
          <button onClick={handleForm} className={`relative ${retratAnimation && "hidden"}  ${(username=="Sign Up" || username==undefined) &&"hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""}bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[126px] h-[44px] left-[3.3rem] top-[13.5rem]`}>Form</button>
   
          </li>
              <li>
              <button className={`relative ${retratAnimation && "hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} ${(username=="Sign Up" || username==undefined) &&"hidden"} bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px]  w-[126px] h-[44px] left-[2rem] top-[14.5rem]`}><div className="absolute bg-black opacity-50 top-0 rounded-[16px] h-full w-full z-30" />My NFT</button>
              <button className={`relative ${retratAnimation && "hidden"}  ${(username=="Sign Up" || username==undefined) &&"hidden"} ${openMenu ?"animate-[appear_1s_linear_forwards]":""} bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[126px] h-[44px] left-[3.3rem] top-[14.5rem]`}><div className="absolute bg-black opacity-50 top-0 rounded-[16px] h-full w-full z-30" />Staking</button>
              </li>
          </ul>
          
     
      </div>
      
      </div>
      <div className={`absolute ${retratAnimation && "hidden"}  ${!showLogin  && "hidden"} flex justify-center   top-0 z-30 w-screen h-screen bg-black bg-opacity-90`}>
            <SignUp />
            <div onClick={handlelogin} className="w-full h-full z-20 "/>
            <div className={`absolute xl:hidden  text-white z-40 right-[2rem] cursor-pointer w-[30px] h-[30px] top-[1rem] text-[32px]`} onClick={handlelogin}><AiOutlineClose /></div>
      </div>
      <div className={`absolute ${retratAnimation && "hidden"} ${!loginForm && "hidden"}   w-screen overflow-y-scroll    h-[88rem] flex justify-center bg-black bg-opacity-90 z-30`}>
          <DiscountForm showDiscountForm={true} afterLogin={true} />
          <div onClick={handleForm} className="w-full h-[100rem] z-20 "/>
          <div className={`absolute  text-white z-40 right-[2rem] cursor-pointer w-[30px] h-[30px] top-[2rem] text-[32px]`} onClick={handleForm}><AiOutlineClose /></div>
         
          </div>
          <div className={`absolute ${retratAnimation && "hidden"} ${!profileDetails && "hidden"}  w-screen overflow-y-scroll    h-screen flex justify-center bg-black bg-opacity-90 z-30`}>
          <ProfileDetails />
          <div className={`absolute   text-white z-40 right-[2rem] cursor-pointer w-[30px] h-[30px] top-[2rem] text-[32px]`} onClick={handleProfile}><AiOutlineClose /></div>
          </div>
    </div>
  );
};

export default NavbarMobile;
