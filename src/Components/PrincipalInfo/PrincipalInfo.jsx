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

    <div className="relative top-[25rem] bg-black w-full h-[1600rem]">



      <div className="absolute w-full h-[70rem]">
        <div className="absolute right-0  bg-[url('/public/purpleglow.png')] bottom-[-20rem] bg-cover w-[1137px] h-[1234px] " />
        <div className="absolute bg-[url('/public/yellowglow.png')] bg-cover  w-[1224px] h-[1132px]" />
        <div className="absolute bg-[url('/public/greenglow.png')] right-0  bottom-[-40rem] bg-cover w-[782px] h-[1137px]" />
      </div>
      <div className="absolute top-[200px] w-full h-full flex flex-col items-center">
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
      <div className="absolute top-[190rem] xl:top-[70rem] w-full">
        <WhatWeWantToDo />
      </div>
      <div className="absolute top-[260rem] xl:top-[170rem] w-full">
      <WhoAreWe />
      </div>
      <div className="absolute top-[340rem] xl:top-[270rem] w-full">
         <Phase2 />
      </div>
      <div className="absolute top-[380rem] xl:top-[370rem] w-full">
        <WhenTheMintStart />
      </div>
      <div className="absolute top-[430rem] xl:top-[450rem] w-full">
        <Roadmap />
      </div>
      <div className="absolute top-[450rem] xl:top-[495rem] w-full">
        <ApartamentsGoal />
      </div>
      <div className="absolute top-[550rem] xl:top-[550rem] w-full">
        <ApartamentsBucharest />
      </div>
      <div className="absolute top-[620rem] xl:top-[660rem] w-full">
      <ReleaseSoon />
      </div>
      <div className="absolute top-[680rem] xl:top-[730rem] w-full">
       <BenefitsForHolders />
      </div>
      <div className="absolute top-[680rem] xl:top-[845rem] w-full">
      <Rarity />
        
      </div>
      <div className="absolute top-[680rem] xl:top-[915rem] w-full">
      <Team /> 
      </div>
      <div className="absolute top-[680rem] xl:top-[1250rem] w-full">
      <Forms />
      </div>
      <div className="absolute top-[680rem] xl:top-[1335rem] w-full">
      <WhatInvestorsThink /> 
      </div>
      <div className="absolute top-[680rem] xl:top-[1410rem] w-full">
      <WhatGaryVeeThink />
      </div>
      <div className="absolute top-[680rem] xl:top-[1500rem] w-full">
      <FAQ />
      </div>
      <div className="absolute top-[680rem] xl:top-[1610rem] w-full">
      <ContactUs />
      </div>
      <div className="absolute top-[680rem] xl:top-[1680rem] w-full">
      <JoinOurCommunity />
        
      </div>
      </div>
  
  );
};

export default PrincipalInfo;