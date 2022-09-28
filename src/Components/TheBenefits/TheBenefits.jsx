import React from "react";
import BenefitsCard from "./BenefitsCard";
import styles from "./TheBenefits.module.css";
const TheBenefits = () => {
  return (
    <div className="relative bg-black w-full xl:h-[60rem] h-[70rem]">
      <div className="bg-[url('/public/TheBenefitsbg.png')] flex justify-center w-full h-[57rem] xl:h-[770px] bg-cover">
        <div className="w-[80%] flex justify-center ">
          <div className="relative flex xl:flex-row flex-col">
            <div className="relative left-[3%] w-[350px] top-20">
              <div className="absolute xl:left-[-8rem] bottom-[-42.4rem] xl:bottom-[-1.3rem] rotate-[15deg] bg-[url('/public/SolanaWithLogo.svg')] bg-cover w-[100px] h-[87px] xl:w-[237px] xl:h-[212px]" />
              <h1 className=" font-[600]  left-0 leading-[20px] xl:leading-[90px] w-[460px] text-[30px] xl:text-[76px] text-white">
                THE BENEFITS <br />
                OF HOLDING <span className={styles.title}>OUR NFT</span>
              </h1>
              <h3 className="relative  text-white opacity-80 w-[100%] top-6 text-[20px] font-[200] leading-[28px]">
                {" "}
                Our project will buy real apartments around the world in order
                to benefit from them as owner of our NFTs.
              </h3>
            </div>
            <div className="relative  top-[10rem] left-[.2rem] xl:left-[6rem] 2xl:left-40 w-full xl:w-[90%] h-[30rem] xl:h-[44rem] grid grid-cols-3">
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
                icon="bg-[url('/public/rafflesicon.svg')] w-[50px] xl:w-[90px] bg-cover"
                title="Raffles"
              />
              <BenefitsCard
                icon="bg-[url('/public/whitelisticon.svg')] w-[36.8px] xl:w-[70px] bg-cover"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheBenefits;
