import React from "react";
import WhatWeWantToDo from "../WhatWeWantToDo/WhatWeWantToDo";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import WhyTheProjectWillBeSuccessful from "../WhyTheProjectWillBeSuccessful/WhyTheProjectWillBeSuccessful";

const TeachingAboutNFT = () => {
  return (
    <div className="relative bg-black w-full h-[290rem]">
      <div className="absolute w-full h-[70rem]">
        <div className="absolute right-0  bg-[url('/public/purpleglow.png')] bottom-[-20rem] bg-cover w-[1137px] h-[1234px] " />
        <div className="absolute bg-[url('/public/yellowglow.png')] bg-cover  w-[1224px] h-[1132px]" />
        <div className="absolute bg-[url('/public/greenglow.png')] right-0  bottom-[-40rem] bg-cover w-[782px] h-[1137px]" />
      </div>
      <div className="absolute top-[430px] w-full h-full flex flex-col items-center">
        <div className="bg-[url('/public/NFTtext.png')] bg-cover w-[1187px] h-[222px]" />
        <div className="relative text-opacity-70 font-[200] text-white leading-[28px] w-[1140px] top-12 left-[-1.8rem] text-[20px]">
          The NFT phenomenon has revolutionised the Blockchain space and digital
          ownership. We will walk you through the meaning behind a picture, what
          makes an NFT valuable and its use cases.
        </div>
      </div>
      <div className="absolute top-[80rem] w-full">
        <WhatWeWantToDo />
      </div>
      <div className="absolute top-[150rem] w-full">
        <WhoAreWe />
      </div>
      <div className="absolute top-[220rem] w-full">
        <WhyTheProjectWillBeSuccessful />
      </div>
    </div>
  );
};

export default TeachingAboutNFT;
