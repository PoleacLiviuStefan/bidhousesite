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

    <div className="relative  bg-black w-full  h-[2850rem] xl:h-[1500rem]">



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
      <div className="absolute top-[320rem] xl:top-[297rem] 2xl:top-[370rem] w-full">
        <WhenTheMintStart />
      </div>
      <div className="absolute top-[373rem] xl:top-[360rem] 2xl:top-[450rem] w-full">
        <Roadmap />
      </div>
      <div className="absolute top-[476rem] xl:top-[403rem] 2xl:top-[495rem] w-full">
        <ApartamentsGoal />
      </div>
      <div className="absolute top-[500rem] xl:top-[440rem] 2xl:top-[550rem] w-full">
        <ApartamentsBucharest />
      </div>
      <div className="absolute top-[580rem] xl:top-[535rem] 2xl:top-[660rem] w-full">
      <ReleaseSoon />
      </div>
      <div className="absolute top-[680rem] xl:top-[595rem] 2xl:top-[730rem] w-full">
       <BenefitsForHolders />
      </div>
      <div className="absolute top-[1120rem] xl:top-[770rem] 2xl:top-[905rem] w-full">
      <Rarity />
        
      </div>
      <div className="absolute top-[1303rem] xl:top-[825rem] 2xl:top-[965rem] w-full">
      <Team /> 
      </div>
      <div className="absolute top-[2405rem] xl:top-[1155rem] 2xl:top-[1300rem] w-full">
      <Forms />
      </div>
      <div className="absolute top-[2530rem] xl:top-[1222rem] 2xl:top-[1360rem] w-full">
      <WhatInvestorsThink /> 
      </div>
      <div className="absolute top-[2610rem] xl:top-[1300rem] 2xl:top-[1450rem] w-full">
      <WhatGaryVeeThink />
      </div>
      <div className="absolute top-[2685rem] xl:top-[1400rem] 2xl:top-[1540rem] w-full">
      <FAQ />
      </div>
      <div className="absolute top-[2770rem] xl:top-[1500rem] 2xl:top-[1650rem] w-full">
      <ContactUs />
      </div>
      <div className="absolute top-[2825rem] xl:top-[1560rem] 2xl:top-[1710rem] w-full">
      <JoinOurCommunity />
        
      </div>
      </div>
  
  );
};

export default PrincipalInfo;