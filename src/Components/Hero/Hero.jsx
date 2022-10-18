import React,{useRef} from "react";
import styles from "./Hero.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import { useState } from "react";
import herovideo from './herovideo.mp4'
import {AiOutlineClose} from 'react-icons/ai'
import lockScroll from "react-lock-scroll"
const Hero = () => {
  const [popupVideo,setPopupVideo] =useState(false)
  const [toggle, setToggle] = useState(false);
  lockScroll(toggle);
  const showVideo=()=>{
    setPopupVideo(prev=>!prev);
    setToggle(!toggle);
  }
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.pause(true);
    setPopupVideo(false);
    setToggle(!toggle);
  }

  return (
    <div name="hero" className=" w-screen h-screen  bg-black ">
      <div className="bg-[url('/public/hero.png')] flex  justify-center h-[120%] bg-cover w-full">
        <div className="relative ml-10  top-[15rem] xl:top-[22%]  flex w-[1351px] h-[451px] ">
          <div className="absolute top-[-150px] z-40 right-[-28rem]  w-[700px] h-[580px] bg-[url('/public/glowarea.png')] bg-cover" />
          <div className="w-[1132px] h-[244px]">
            <h1 className="relative left-[23rem] xl:left-0 w-[20rem] xl:w-[729px] text-[34px] xl:text-[96px] leading-[50px] xl:leading-[112px] font-[600]  text-white tracking-[-0.04em] h-[244px]">
              Real Estate NFT Project on{" "}
              <div className="absolute left-0 xl:left-[450px] left-[9.5rem] top-[4rem] xl:top-[127px] w-[195px] h-[28px] xl:w-[652.25px] xl:h-[96px] bg-[url('/public/SolanaWithLogo.svg')] bg-cover" />
            </h1>
          </div>
          <div className="absolute left-[23rem] w-[250px] xl:left-0 xl:w-[473px] h-[56px] top-[10rem] xl:top-[250px]">
            <h3 className="text-left text-[16px] xl:text-[20px] leading-[28px] text-white">
              Bidhouse | Real Estate <br />
              Acces to all properties owned by our community!
            </h3>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <button className={styles.accesbtn}><a href="/public/Whitepaper_Bidhouse_Project.pdf"  download>Whitepaper</a></button>
=======
          <button className={styles.accesbtn}><a href="/public/Whitepaper_Bidhouse_Project.pdf"  download>White Paper</a></button>
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
=======
          <button className={styles.accesbtn}><a href="/public/Whitepaper_Bidhouse_Project.pdf"  download>White Paper</a></button>
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
          <button className={styles.contactbtn}>Contact Us</button>
          <p className="absolute z-40 text-[16px] text-opacity-80  text-white w-[311px] h-[38px] left-[66%] top-[455px]">
            <span className="font-[700]">We start </span> to buy first{" "}
            <span className=" font-[700]">in Europe </span>
            and then we will conquer the world
          </p>
          <div className={styles.playbtn}>
            <div className={styles.aroundplay} />
            <div className={styles.animinterior} />
<<<<<<< HEAD
            <button onClick={showVideo} className={styles.playbg}>
              <BsFillPlayFill className="text-white z-40 rounded-[3px] text-5xl" />
             
=======
            <button className={styles.playbg}>
              <BsFillPlayFill className="text-white z-40 rounded-[3px] text-5xl" />
<<<<<<< HEAD
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
=======
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
            </button>
         
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        
        <div className={`absolute flex justify-center items-center ${!popupVideo && "hidden"} top-0 left-0 z-40 bg-black bg-opacity-70 w-full h-full `}>
        
        <div className='absolute z-50'>
        
    x x 

<div onClick={handlePlayVideo} className={`absolute cursor-pointer z-50 top-[-5rem] left-[-3rem] text-white w-full text-[30px]  `}><AiOutlineClose /></div>
  </div>

            </div>
            
=======
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
=======
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
        <div className="absolute flex z-40   items-center flex-col  bottom-[-10rem]  xl:bottom-[-5rem]">
          <div className="relative  w-[20px] h-[33.33px] bg-cover bg-[url('/public/mouse.svg')]" />
          <div className="relative top-2 w-[6px] h-[6px] rounded-[50px] bg-purple-500  " />
          <div className="relative top-4 w-[4px] h-[4px] rounded-[50px] bg-purple-500 opacity-40 " />
          <div className="relative top-6 w-[2px] h-[2px] rounded-[50px] bg-purple-500 opacity-20 " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
