import React from "react";
import CardBenefit from "./CardBenefit";

const BenefitsForHolders = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div name="Benefits" className="relative flex flex-col items-center w-full h-[70rem] bg-black">
      <div className="flex flex-col items-start w-[78rem]">
        {" "}
        <h1 className="font-[600] text-[45px] 2xl:text-[76px]  leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
=======
=======
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
    <div className="relative flex flex-col items-center w-full h-[70rem] bg-black">
      <div className="flex flex-col items-start w-[78rem]">
        {" "}
        <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
<<<<<<< HEAD
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
=======
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
          BENEFITS FOR<span className="text-transparent"> HOLDERS</span>
        </h1>
        <div className="relative top-[4.5rem] grid grid-cols-3 w-full">
          <CardBenefit
            title={
              <h1 className="relative w-[211px] left-3 top-[33px] text-[32px] text-white font-[700] leading-[29px]">
                FLOOR PRICE <span className="text-[24px]">SECURED</span>
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/floorkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-9 font-[400] text-white text-[14px] leading-[17px]">
                If paperhands list on marketplaces our NFTs
                <br /> below the mint price we will buy it in 48h with
                <br /> the Hot wallet and list it with a fixed price. Hold{" "}
                <br />
                to see the real power of the community !
              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative w-[211px] left-3 top-[33px] text-[32px] text-white font-[700] leading-[29px]">
                FREE
                <span className="text-[24px]">
                  <br />
                  ACCES
                </span>
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/freekey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-9 font-[400] text-white text-[14px] leading-[17px]">
                Legendary and Mythical NFT holders trought a<br /> booking
                system on our website will be able to
                <br /> get free acomodation in the community flats <br />
                around the world.
              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[33px] text-[32px] text-white font-[700] leading-[29px]">
                100%{" "}
                <span className="text-[24px]">
                  <br />
                  SECURED
                </span>
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/100key.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-9 font-[400] text-white text-[14px] leading-[17px]">
                Behind every action will be a REAL company
                <br /> that will allow us to buy real asset for our
                <br /> community and bring profits. Every wallet that
                <br /> have an nft from our collection will benefit from
                <br /> it and will be added in a special company
                <br /> paper as owner.
              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[33px] text-[32px] text-white font-[700] leading-[29px]">
                STAKING
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/stakingkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-9 font-[400] text-white text-[14px] leading-[17px]">
                We will develop the staking platform with <br />
                monthly profits.
                <br /> Stake your NFTs & Earn passive income.
              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[33px] text-[32px] text-white font-[700] leading-[29px]">
                RARITY
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/raritykey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-9 font-[400] text-white text-[14px] leading-[17px]">
                We strongly believe in equal opportunity for all <br /> members
                of the community, everyone will take
                <br /> profits accordingly to how many NFTs have in
                <br /> the wallet. 1 NFTs = 1 share
              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[33px] text-[32px] text-white font-[700] leading-[29px]">
                WHITELIST
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/whitelistkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-9 font-[400] text-white text-[14px] leading-[17px]">
                Every nft owner from Previous collections will be automatically
                whitelisted for the future <br /> collections.
              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[33px] text-[32px] text-white font-[700] leading-[29px]">
                RAFFLES
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/raffleskey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-9 font-[400] text-white text-[14px] leading-[17px]">
                Every 2 Sundays our holders have a chance to
                <br /> win NFTs from Solana Top Projects.
              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative w-[211px] left-3 top-[33px] text-[32px] text-white font-[700] leading-[29px]">
                SOLANA
                <span className="text-[24px]">
                  <br />
                  AIRDROPS
                </span>
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/airdropkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-9 font-[400] text-white text-[14px] leading-[17px]">
                Every 2 Sundays our holders have a<br /> chance to win up to 10
                Solana.
              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[33px] text-[32px] text-white font-[700] leading-[29px]">
                GIVEAWAY
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/giveawaykey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-9 font-[400] text-white text-[14px] leading-[17px]">
                Every month a member of our community
                <br /> will get a free NFT from our collections.
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsForHolders;
