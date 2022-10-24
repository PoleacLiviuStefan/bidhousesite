import React from "react";
import ApartamentsBucharest from "../ApartamentsBucharest/ApartamentsBucharest";

import ApartamentsGoal from "../ApartamentsGoal/ApartamentsGoal";
import BenefitsForHolders from "../BenefitsForHolders/BenefitsForHolders";

import ContactUs from "../Contactus/ContactUs";
import FAQ from "../FAQ/FAQ";

import Forms from "../Forms/FormsStart";


import HelpUsToGrow from "../HelpUsToGrow/HelpUsToGrow";

import JoinOurCommunity from "../JoinOurCommunity/JoinOurCommunity";
import Phase2 from "../Phase2/Phase2";
import Rarity from "../Rarity/Rarity";
import ReleaseSoon from "../ReleaseSoon/ReleaseSoon";
import Roadmap from "../Roadmap/Roadmap";
import Team from "../Team/Team";
import WhatGaryVeeThink from "../WhatGaryVeeThink/WhatGaryVeeThink";
import WhatInvestorsThink from "../WhatInvestorsThink/WhatInvestorsThink";

import WhatWeWantToDo from "../WhatWeWantToDo/WhatWeWantToDo";
import WhenTheMintStart from "../WhenTheMintStart/WhenTheMintStart";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import WhyTheProjectWillBeSuccessful from "../WhyTheProjectWillBeSuccessful/WhyTheProjectWillBeSuccessful";
import CardInfo from "./CardInfo";
import styles from "./PrincipalInfo.module.css";
const PrincipalInfo = () => {
  return (

    <div className="relative  bg-black w-full  h-[2800rem] xl:h-[1500rem]">



      <div className="absolute   w-full h-[70rem]">
        <div className="absolute right-0  bg-[url('/public/purpleglow.png')] bottom-[0rem] bg-cover w-[1137px] h-[1234px] " />
        <div className="absolute bg-[url('/public/yellowglow.png')] bg-cover bottom-[10rem]  w-[1224px] h-[1132px]" />
        <div className="absolute bg-[url('/public/greenglow.png')] right-0  bottom-[10rem] bg-cover w-[782px] h-[1137px]" />
      </div>
      <div className="absolute top-[300px] w-full h-full flex flex-col items-center">
        <h2 className={styles.ourproject}>
          Our project will buy real apartments around the world in order to
          benefit from them as a owner of our
          <span className="font-bold"> NFTs</span>.
        </h2>
        <div className="relative text-opacity-70 font-[200] text-white leading-[28px] w-[22rem] xl:w-[70rem] top-12 left-0 text-[20px]">
          The NFT phenomenon has revolutionised the Blockchain space and digital
          ownership. We will walk you through the meaning behind a picture, what
          makes an NFT valuable and its use cases.
        </div>
        
      </div>
      <div className="absolute top-[60rem] xl:top-[57rem] 2xl:top-[70rem] w-full">
        <WhatWeWantToDo />
      </div>
      <div className="absolute top-[140rem] xl:top-[137rem] 2xl:top-[157rem] w-full">
      <WhoAreWe />
      </div>
      <div className="absolute top-[230rem] xl:top-[217rem] 2xl:top-[270rem] w-full">
         <Phase2 />
      </div>
      <div className="absolute top-[320rem] xl:top-[297rem] 2xl:top-[360rem] w-full">
        <WhenTheMintStart />
      </div>
      <div className="absolute top-[353rem] xl:top-[335rem] 2xl:top-[410rem] w-full">
        <Roadmap />
      </div>
      <div className="absolute top-[456rem] xl:top-[378rem] 2xl:top-[455rem] w-full">
        <ApartamentsGoal />
      </div>
      <div className="absolute top-[480rem] xl:top-[415rem] 2xl:top-[505em] w-full">
        <ApartamentsBucharest />
      </div>
      <div className="absolute top-[520rem] xl:top-[510rem] 2xl:top-[610rem] w-full">
      <ReleaseSoon />
      </div>
      <div className="absolute top-[620rem] xl:top-[570rem] 2xl:top-[680rem] w-full">
       <BenefitsForHolders />
      </div>
      <div className="absolute top-[1060rem] xl:top-[745rem] 2xl:top-[868rem] w-full">
      <Rarity />
        
      </div>
      <div className="absolute top-[1243rem] xl:top-[800rem] 2xl:top-[940rem] w-full">
      <Team /> 
      </div>
      <div className="absolute top-[2320rem] xl:top-[1130rem] 2xl:top-[1270rem] w-full">
      <Forms />
      </div>
      <div className="absolute top-[2450rem] xl:top-[1197rem] 2xl:top-[1340rem] w-full">
      <WhatInvestorsThink /> 
      </div>
      <div className="absolute top-[2530rem] xl:top-[1275rem] 2xl:top-[1437rem] w-full">
      <WhatGaryVeeThink />
      </div>
      <div className="absolute top-[2605rem] xl:top-[1368rem] 2xl:top-[1535rem] w-full">
      <FAQ />
      </div>
      <div className="absolute top-[2710rem] xl:top-[1475rem] 2xl:top-[1650rem] w-full">
      <ContactUs />
      </div>
      <div className="absolute top-[2765rem] xl:top-[1535rem] 2xl:top-[1710rem] w-full">
      <JoinOurCommunity />
        
      </div>
      </div>
  
  );
};

export default PrincipalInfo;