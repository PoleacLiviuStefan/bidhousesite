import React from "react";
import BenefitsCard from "./BenefitsCard";
import styles from "./TheBenefits.module.css";
import Fade from 'react-reveal/Fade'
const TheBenefits = () => {
  return (

    <div name="TheBenefits" className="relative bg-black w-full py-[17rem]  h-[80rem] xl:h-[75rem]">
    

    

      <div className="relative bg-[url('/public/TheBenefitsbg.png')] flex  justify-center w-full h-[57rem] xl:h-[770px] bg-cover">
        <div className="w-[80%] flex justify-center ">
          <div className="relative flex xl:flex-row flex-col">
        
            <div className="relative left-0 w-[350px] top-20">
            <Fade bottom delay={500}>
              <div className="absolute xl:left-[-6.3rem] bottom-[-42.4rem] xl:bottom-[-1.3rem] rotate-[15deg] bg-[url('/public/SolanaWithLogo.svg')] bg-cover w-[100px] h-[87px] xl:w-[237px] xl:h-[212px]" />
              </Fade>
              <Fade left>
              <h1 className="relative  font-[600]  left-0 leading-[45px] xl:leading-[70px] w-[460px] text-[30px] xl:text-[52px] 2xl:text-[76px] text-white">
                THE BENEFITS <br />
                OF HOLDING <br /><span className={styles.title}>OUR NFT</span>
              </h1>
              </Fade>
              <Fade bottom delay={300}>
              <h3 className="relative  text-white opacity-80 w-[100%] top-6 text-[18px] 2xl:text-[20px] font-[200] leading-[28px]">
                {" "}
                Our project will buy real apartments around the world in order
                to benefit from them as owner of our NFTs.
              </h3>
              </Fade>
            </div>
            <Fade bottom>
            <div className="relative  top-[15rem] xl:top-[11rem] left-[.2rem] xl:left-[6rem] 2xl:left-40 w-full xl:w-[90%] h-[23rem] xl:h-[44rem] grid grid-cols-3">
            <div className="absolute  xl:right-[11rem] w-[317px] h-[72px]  top-[-7rem] bg-[url('/public/logo.png')] bg-cover" />
              <BenefitsCard
                icon="bg-[url('/public/secureicon.svg')] w-[43px] xl:w-[82.81px] bg-cover"
                title="Floor Price Secured"
              />
              <BenefitsCard
                icon="bg-[url('/public/freeicon.svg')] w-[49.5px] xl:w-[96px]  bg-cover"
                title="Free Access"
              />
              <BenefitsCard
                icon="bg-[url('/public/rarebenefit.svg')] w-[46.5px] xl:w-[90px] bg-cover"
                title="Rarity"
              />
              <BenefitsCard
                icon="bg-[url('/public/rafflesicon.svg')] w-[50px] xl:w-[96px] bg-cover"
                title="Raffles"
              />
              <BenefitsCard
                icon="bg-[url('/public/whitelistcircleicon.png')] relative  left-[5px] w-[52px] xl:w-[90px] bg-cover"
                title="Whitelist"
              />
              <BenefitsCard
                icon="bg-[url('/public/airdropicon.svg')] w-[50px] xl:w-[90px] bg-cover"
                title="Solana Airdrops"
              />
              <BenefitsCard
                icon="bg-[url('/public/giveawaysicon.svg')] w-[50px] xl:w-[94px] bg-cover"
                title="Giveaways"
              />
              <BenefitsCard
                icon="bg-[url('/public/transparencyicon.svg')] w-[50px] xl:w-[95px] bg-cover"
                title="100% Transparency"
              />
              <BenefitsCard
                icon="bg-[url('/public/solicon.svg')] w-[65px] xl:w-[127px] bg-cover"
                title="Staking"
              />
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
    
   
  );
};

export default TheBenefits;
