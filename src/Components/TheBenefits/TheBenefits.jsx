import React from "react";
import BenefitsCard from "./BenefitsCard";
import styles from "./TheBenefits.module.css";
const TheBenefits = () => {
  return (
    <div className="relative bg-black w-full h-[70rem]">
      <div className="bg-[url('/public/TheBenefitsbg.png')] flex justify-center w-full h-[770px] bg-cover">
        <div className="w-[80%] flex ">
          <div className="absolute bottom-[15.5rem] rotate-[15deg] bg-[url('/public/SolanaWithLogo.svg')] bg-cover w-[237px] h-[212px]" />
          <div className="relative flex">
            <div className="relative left-[3%] w-[495px] top-20">
              <h1 className="font-[600] leading-[90px] w-[460px] text-[76px] text-white">
                THE BENEFITS <br />
                OF HOLDING <span className={styles.title}>OUR NFT</span>
              </h1>
              <h3 className="relative  text-white opacity-80 w-[100%] top-6 text-[20px] font-[200] leading-[28px]">
                {" "}
                Our project will buy real apartments around the world in order
                to benefit from them as owner of our NFTs.
              </h3>
            </div>
            <div className="relative  top-[10rem] left-[6rem] 2xl:left-40 w-[90%] h-[44rem] grid grid-cols-3">
              <BenefitsCard
                icon="bg-[url('/public/secureicon.svg')] w-[82.81px] bg-cover"
                title="Floor Price Secured"
              />
              <BenefitsCard
                icon="bg-[url('/public/freeicon.svg')] w-[96px]  bg-cover"
                title="Free Access"
              />
              <BenefitsCard
                icon="bg-[url('/public/rarebenefit.svg')] w-[90px] bg-cover"
                title="Rarity"
              />
              <BenefitsCard
                icon="bg-[url('/public/rafflesicon.svg')] w-[90px] bg-cover"
                title="Raffles"
              />
              <BenefitsCard
                icon="bg-[url('/public/whitelisticon.svg')] w-[70px] bg-cover"
                title="Whitelist"
              />
              <BenefitsCard
                icon="bg-[url('/public/airdropicon.svg')] w-[90px] bg-cover"
                title="Solana Airdrops"
              />
              <BenefitsCard
                icon="bg-[url('/public/giveawaysicon.svg')] w-[94px] bg-cover"
                title="Giveaways"
              />
              <BenefitsCard
                icon="bg-[url('/public/transparencyicon.svg')] w-[95px] bg-cover"
                title="100% Transparency"
              />
              <BenefitsCard
                icon="bg-[url('/public/solicon.svg')] w-[127px] bg-cover"
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
