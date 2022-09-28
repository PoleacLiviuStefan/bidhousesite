import React from "react";
import styles from "./Hero.module.css";
import { BsFillPlayFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div name="hero" className=" w-screen h-[90rem] bg-black ">
      <div className="bg-[url('/public/hero.png')] flex  justify-center h-[90%] bg-cover w-full">
        <div className="relative ml-10  top-[15rem] xl:top-[200px]  flex w-[1351px] h-[451px] ">
          <div className="absolute top-[-150px] z-50 right-[-28rem]  w-[700px] h-[580px] bg-[url('/public/glowarea.png')] bg-cover" />
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
          <button className={styles.accesbtn}>Get Access</button>
          <button className={styles.contactbtn}>Contact Us</button>
          <p className="absolute z-50 text-[16px] text-opacity-80  text-white w-[311px] h-[38px] left-[70%] top-[418px]">
            <span className="font-[700]">We start </span> to buy first{" "}
            <span className=" font-[700]">in Europe </span>
            and then we will conquer the world
          </p>
          <div className={styles.playbtn}>
            <div className={styles.aroundplay} />
            <div className={styles.animinterior} />
            <button className={styles.playbg}>
              <BsFillPlayFill className="text-white z-50 rounded-[3px] text-5xl" />
            </button>
          </div>
        </div>
        <div className="absolute flex   items-center flex-col  bottom-[-10rem]  xl:bottom-10">
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
