import React from "react";
import ApartamentsBucharest from "../ApartamentsBucharest/ApartamentsBucharest";

import ApartamentsGoal from "../ApartamentsGoal/ApartamentsGoal";
import BenefitsForHolders from "../BenefitsForHolders/BenefitsForHolders";
import HelpUsToGrow from "../HelpUsToGrow/HelpUsToGrow";
import ReleaseSoon from "../ReleaseSoon/ReleaseSoon";
import Roadmap from "../Roadmap/Roadmap";
import WhatWeWantToDo from "../WhatWeWantToDo/WhatWeWantToDo";
import WhenTheMintStart from "../WhenTheMintStart/WhenTheMintStart";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import WhyTheProjectWillBeSuccessful from "../WhyTheProjectWillBeSuccessful/WhyTheProjectWillBeSuccessful";
import CardInfo from "./CardInfo";
import styles from "./PrincipalInfo.module.css";
const PrincipalInfo = () => {
  return (
    <div className="relative bg-black w-full h-[1000rem]">
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
        <div className="relative flex xl:flex-row    left-[23.5rem] xl:left-[0rem] flex-col top-[10rem] w-[1137px] justify-between">
          <div className="relative xl:top-[0rem]">
            <CardInfo
              description={
                <p className="relative top-16 text-white w-[260px] xl:w-[463px] h-[106px]  font-[200] text-[16px] leading-[17px]">
                  <span className=" opacity-70">
                    We want to bring Solana Chain in the real world by buying
                    apartments in Bucharest - Romania , rent them and get
                    profits for our community.
                  </span>
                  <br />
                  <span className="opacity-100 text-white">
                    100% Profits to our community:
                  </span>{" "}
                  <br />
                  <span className=" opacity-70">
                    75% of profits will be used to airdrop solana, NFTs raffles
                    and giveaways. 25% will be added in the community wallet.{" "}
                    <br />
                    Check " Benefits Holder " section to discover the utility of
                    our NFTs.
                  </span>
                </p>
              }
              title=" w-[309px] h-[21px] bg-[url('/public/todocard.png')]"
            />
          </div>
          <div className="relative top-[12rem] left-0  xl:top-[0rem]">
            <CardInfo
              description={
                <p className="relative top-16 text-white w-[260px] xl:w-[463px] h-[106px]  font-[200] text-[16px] leading-[17px]">
                  <span className=" opacity-70">
                    We are a team with skills to moon this project such as
                    Accounting - Real Estate agent - Business management In
                    addition to that we have more than 10 people ready to help
                    us with minor tasks as moderate Discord, posting on Twitter,
                    etc.
                  </span>
                  <br />
                  <span className="opacity-100 text-white">
                    We are the real deal ! Watch us !
                  </span>{" "}
                  <br />
                </p>
              }
              title=" w-[181px] h-[21px] bg-[url('/public/whoarewecard.png')]"
            />
          </div>
        </div>
        <div className="relative flex xl:flex-row flex-col  left-[23.5rem] xl:left-[0rem] xl:top-[12rem] w-[1137px] justify-between">
          <div className="relative top-[30rem] xl:top-[0rem]">
            <CardInfo
              description={
                <p className="relative top-16 text-white w-[260px] xl:w-[463px] h-[106px]  font-[200] text-[16px] leading-[17px]">
                  <span className="opacity-100 text-white">
                    The project will be successful &nbsp;
                  </span>
                  <span className=" opacity-70">
                    because the NFTs have value in the Real World. Our community
                    own real flats and every holder will benefit from this.
                  </span>

                  <br />
                </p>
              }
              title=" w-[292px] h-[52px] bg-[url('/public/successfulcard.png')]"
            />
          </div>
          <div className="relative top-[40rem] xl:top-[0rem]">
            <CardInfo
              description={
                <p className="relative top-16 text-white w-[260px] xl:w-[463px] h-[106px]  font-[200] text-[16px] leading-[17px]">
                  <span className=" opacity-70">
                    In the metaverse the answer to " where " is on
                  </span>
                  <span className="opacity-100 text-white">
                    &nbsp;Solana Blockchain &nbsp;
                  </span>
                  <span className=" opacity-70">
                    In the real world all begins in Bucharest Romania and we
                    will expand our vision and our assets as a community all
                    over the world.
                  </span>
                  <br />
                </p>
              }
              title=" w-[291px] h-[21px] bg-[url('/public/beginscard.png')]"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[190rem] xl:top-[80rem] w-full">
        <WhatWeWantToDo />
      </div>
      <div className="absolute top-[260rem] xl:top-[150rem] w-full">
        <WhoAreWe />
      </div>
      <div className="absolute top-[340rem] xl:top-[220rem] w-full">
        <WhenTheMintStart />
      </div>
      <div className="absolute top-[380rem] xl:top-[275rem] w-full">
        <Roadmap />
      </div>
      <div className="absolute top-[430rem] xl:top-[320rem] w-full">
        <ApartamentsGoal />
      </div>
      <div className="absolute top-[450rem] xl:top-[355rem] w-full">
        <ApartamentsBucharest />
      </div>
      <div className="absolute top-[550rem] xl:top-[450rem] w-full">
        <ReleaseSoon />
      </div>
      <div className="absolute top-[620rem] xl:top-[525rem] w-full">
        <HelpUsToGrow />
      </div>
      <div className="absolute top-[680rem] xl:top-[605rem] w-full">
        <BenefitsForHolders />
      </div>
    </div>
  );
};

export default PrincipalInfo;
