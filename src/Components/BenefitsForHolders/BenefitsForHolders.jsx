import React from "react";
import CardBenefit from "./CardBenefit";

const BenefitsForHolders = () => {
  return (

    <div name="Benefits" className="relative xl:left-5 2xl:left-0  flex flex-col items-center w-full h-[70rem] bg-black">
  <div className="absolute top-[-32rem] left-0 bg-[url('/public/glowleftbenefit.png')] w-[896px] h-[1101px]"/>
  <div className="absolute top-[-52rem] right-0 bg-[url('/public/glowbenefitright.png')] w-[1176px] h-[1385px]"/>
      <div className="flex flex-col items-start w-[23rem] xl:w-[78rem]">
      
        {" "}
        <h1 className="font-[600] z-30 text-[30px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">

          BENEFITS FOR<span className="text-transparent"> HOLDERS</span>
        </h1>
        <div className="relative top-[4.5rem] flex flex-col xl:grid xl:grid-cols-3 w-full">
          <CardBenefit
            title={
              <h1 className="relative w-[211px] left-3 top-[40px] text-[26px] xl:text-[27px] text-white font-[700] leading-[29px]">
                FLOOR PRICE <span className="text-[24px]">SECURED</span>
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/floorkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
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
              <h1 className="relative w-[211px] left-3 top-[40px] text-[26px] xl:text-[27px] text-white font-[700] leading-[29px]">
                PASSIVE
                <span className="text-[24px]">
                  <br />
                  INCOME
                </span>
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/freekey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
                You will own a share in the company that <br/>
will generate Passive Income.

              </p>
            }
          />
      
          <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[50px] text-[26px] xl:text-[27px] text-white font-[700] leading-[29px]">
                STAKING
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/stakingkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
                We will develop the staking platform with <br />
                monthly profits.
                <br /> Stake your NFTs & Earn passive income.
              </p>
            }
          />
        
          <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[50px] text-[26px] xl:text-[27px] text-white font-[700] leading-[29px]">
                WHITELIST
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/whitelistkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
                Every nft owner from Previous collections will be automatically
                whitelisted for the future <br /> collections.
              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[50px] text-[26px] xl:text-[27px] text-white font-[700] leading-[29px]">
                DISCOUNTS
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/raffleskey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
               Discounts on renting apartments owned<br /> by the
Bidhouse community. Discounts <br />are calculated
based on the rarities of<br /> the NFT owned.
              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative w-[211px] left-3 top-[40px] text-[26px] xl:text-[27px] text-white font-[700] leading-[29px]">
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
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
                Every 2 Sundays our holders have a<br /> chance to win up to 10
                Solana.
              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[50px] text-[26px] xl:text-[27px] text-white font-[700] leading-[29px]">
                GIVEAWAY
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/giveawaykey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
                Every month a member of our community
                <br /> will get a free NFT from our collections.
              </p>
            }
          />
             <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[40px] text-[26px] xl:text-[27px]  text-white font-[700] leading-[29px]">
                CRYPTO <span className="text-[24px]">
                  <br />
                  FOREST
                </span>
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/whitelistkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
               Exclusive and Free Access to CryptoForest. <br/>Passive Income
opportunity and the <br />renting  process of the Headquarter<br />
will also be detailed on Discord<br /> and in our FAQ
section on <br />the Website.
              </p>
            }
          />
            <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[50px] text-[26px] xl:text-[27px]  text-white font-[700] leading-[29px]">
                MOBILE APP 
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/raffleskey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 w-[280px] font-[400] text-white text-[14px] leading-[17px]">
              Access to the App to view the apartments in 3D and the
possibility to buy unique pieces of Art. (paintings, statues,
etc.) You will be able to scan the QR code of different
piece of art ( available in the apartments) throught the
same app in order to acces our Marketplace. If a holder
or Someone else decide to buy a piece of art from there,
75% of the payment will go directly to the artist
and 25% into de community wallet.

              </p>
            }
          />
             <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[40px] text-[26px] xl:text-[27px]  text-white font-[700] leading-[29px]">
                100% <span className="text-[24px]">
                  <br />
                 TRANSPARENCY
                </span>
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/stakingkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
            You will have access to the company financial  <br /> report.
Every quarter we will update the <br /> financial report
and you can access and <br /> see how much profit
each property <br /> brought to the company.

              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[50px] text-[26px] xl:text-[27px]  text-white font-[700] leading-[29px]">
               DAO
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/airdropkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
           Every Member will have the voting power <br /> and will be able
to get involved in the
<br /> decision making process
of the <br />Bidhouse Ecosystem.


              </p>
            }
          />
            <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[40px] text-[26px] xl:text-[27px]  text-white font-[700] leading-[29px]">
                  STABLE<span className="text-[24px]">
                  <br />
                  COIN #BHC
                </span>
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/floorkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
          We aim to stable this virtual coin through <br /> a simply
process because in the beginning <br />will exist only inside
our ecosystem. You<br /> can spend it by booking one of the<br />
appartment for several days, or by<br /> buying goods from
our marketplace,<br />in the future you will also be
able to <br /> convert in stable coin.


              </p>
            }
          />
            <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[50px] text-[26px] xl:text-[27px]  text-white font-[700] leading-[29px]">
                  MARKETPLACE
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/100key.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
      From here you will be able to buy with #BHC
different goods for you and your family.

              </p>
            }
          />
           <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[33px] text-[26px] xl:text-[27px]  text-white font-[700] leading-[29px]">
                  NEW 
                  
                  LOCATION
                  < br/>
                  
                  <span className="text-[24px]">
                  AROUND THE
                  <br />WORLD
                  </span>
                
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/giveawaykey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
   We aim to Conquest the world by<br/>
buying several assets worldwide!

              </p>
            }
          />
           <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[33px] text-[26px] xl:text-[27px]  text-white font-[700] leading-[29px]">
                 POT 
<span className="text-[24px]">
                <br/>
                (PROOF OF TRAVELING)
                  </span>
                
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/raritykey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
We are developing a new special system  <br /> for our
community members, more you  <br />travel the less you pay.
Everytime you  <br /> are renting one of our location, <br />
you earn #BHC.


              </p>
            }
          />
            <CardBenefit
            title={
              <h1 className="relative left-3 w-[211px] top-[40px] text-[26px] xl:text-[27px]  text-white font-[700] leading-[29px]">
                 PLAYGROUND

<span className="text-[24px]">
                <br/>
                IN THE FOREST
                  </span>
                
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/stakingkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
Behind the Headquarter, in the forest,<br/> we want to create
a Playground for<br/> adults and children. Every Holder of<br/>
our collection will have free Access<br/> for life.


              </p>
            }
          />
          <CardBenefit
            title={
              <h1 className="relative left-3  w-[211px] top-[50px] text-[26px] xl:text-[27px]  text-white font-[700] leading-[29px]">
                 2nd Collection

                
              </h1>
            }
            keyimg={
              <div className="relative bg-[url('/public/whitelistkey.png')] bg-cover right-[-2.5rem] w-[62px] h-[130px]" />
            }
            description={
              <p className="relative left-3 top-2 font-[400] text-white text-[14px] leading-[17px]">
As part of the Ecosystem development,<br/> Bidhouse will launch
a second collection.<br/> Details will be avilable in a separate<br/>
channel on Discord and in Version 2.0<br/> of the Whitepaper.

              </p>
            }
          />
           <div className="relative mt-9 flex justify-center items-center px-4 py-7  bg-white bg-opacity-10 backdrop-blur-[8px] w-[372px] h-[354px] rounded-[20px]">
      <div className="relative  bg-[url('/public/logotxt.png')] bg-cover w-[300px] h-[124px]" />
       
      
   
    </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsForHolders;
