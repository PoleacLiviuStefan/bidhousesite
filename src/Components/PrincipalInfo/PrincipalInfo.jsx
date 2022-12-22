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
import WhatInvestorsThink from "../WhatInvestorsThink/WhatInvestorsThink";

import WhatWeWantToDo from "../WhatWeWantToDo/WhatWeWantToDo";
import WhenTheMintStart from "../WhenTheMintStart/WhenTheMintStart";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import WhyTheProjectWillBeSuccessful from "../WhyTheProjectWillBeSuccessful/WhyTheProjectWillBeSuccessful";
import CardInfo from "./CardInfo";
import Fade from 'react-reveal/Fade'
import styles from "./PrincipalInfo.module.css";
const PrincipalInfo = () => {
  return (

    <div className="relative  bg-black w-full  h-[1750rem] xl:h-[1250rem]">



      <div className="absolute   w-full h-[70rem]">
        <div className="absolute right-0  bg-[url('/public/purpleglow.png')] bottom-[0rem] bg-cover w-[1137px] h-[1234px] " />
        <div className="absolute bg-[url('/public/yellowglow.png')] bg-cover bottom-[23rem]  w-[1224px] h-[1132px]" />
        <div className="absolute bg-[url('/public/greenglow.png')] right-0  bottom-[23rem] bg-cover w-[782px] h-[1137px]" />
      </div>
      
      <div className="absolute top-[200px] w-full h-full flex flex-col items-center">
      <Fade >
        <h2 className={styles.ourproject}>
          Our project will buy real apartments around the world in order to
          benefit from them as a owner of our
          <span className="font-bold"> NFTs</span>.
        </h2>
        <div className="relative text-opacity-70 font-[200] text-white leading-[28px] w-[22rem] xl:w-[70rem] top-12 left-0 text-[20px]">
          The NFT phenomenon has revolutionised the Blockchain space and digital
          ownership. We will walk you   through the meaning behind a picture, what
          makes an NFT valuable and its use cases.
        </div>
        </Fade>
      </div>
      
      <div className="absolute top-[52rem] xl:top-[37rem] 2xl:top-[45rem] w-full">
        <WhatWeWantToDo />
      </div>
      <div className="absolute top-[137rem] xl:top-[117rem] 2xl:top-[130rem] w-full">
      <WhoAreWe />
      </div>
      <div className="absolute top-[227rem] xl:top-[192rem] 2xl:top-[212rem] w-full">
         <Phase2 />
      </div>
      <div className="absolute top-[319rem] xl:top-[270rem] 2xl:top-[295rem] w-full">
        <WhenTheMintStart />
      </div>
      <div className="absolute top-[339rem] xl:top-[297rem] 2xl:top-[335rem] w-full">
        <Roadmap />
      </div>
      <div className="absolute top-[443rem] xl:top-[350rem] 2xl:top-[380rem] w-full">
        <ApartamentsGoal />
      </div>
      <div className="absolute top-[462rem] xl:top-[380rem] 2xl:top-[415rem] w-full">
        <ApartamentsBucharest />
      </div>
      <div className="absolute top-[497rem] xl:top-[470rem] 2xl:top-[515rem] w-full">
      <ReleaseSoon />
      </div>
      <div className="absolute top-[519rem] xl:top-[523rem] 2xl:top-[575rem] w-full">
       <BenefitsForHolders />
      </div>
      <div className="absolute top-[1088rem] xl:top-[815rem] 2xl:top-[875rem] w-full">
      <Rarity />
        
      </div>
      <div className="absolute top-[1205rem] xl:top-[867rem] 2xl:top-[932rem] w-full">
      <Team /> 
      </div>
      <div className="absolute top-[1481rem] xl:top-[1065rem] 2xl:top-[1135rem] w-full">
      <Forms />
      </div>
      <div className="absolute top-[1603rem] xl:top-[1123rem] 2xl:top-[1192rem] w-full">
      <WhatInvestorsThink /> 
      </div>
   
      <div className="absolute top-[1694rem] xl:top-[1190rem] 2xl:top-[1265rem] w-full">
      <FAQ />
      </div>
      <div className="absolute top-[1774rem] xl:top-[1279rem] 2xl:top-[1360rem] w-full">
      <ContactUs />
      </div>
      <div className="absolute top-[1823rem] xl:top-[1328rem] 2xl:top-[1413rem] w-full">
      <JoinOurCommunity />
        
      </div>
      <div className="absolute flex justify-center items-center top-[1874rem] xl:top-[1357rem] 2xl:top-[1442rem] w-full"><h2 className="text-white text-[14px] xl:text-[18px] ">Copyright ©2022 Bidhouse</h2> </div>
      </div>
  
  );
};

export default PrincipalInfo;