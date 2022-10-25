import React from "react";
import RoadmapCard from "./RoadmapCard";

const Roadmap = () => {
  return (
    <div name="Roadmap" className="relative flex flex-col items-center w-full h-[70rem] bg-black">
      <div className="flex flex-col items-start h-[70rem] xl:w-[70rem] 2xl:w-[78rem]">
        <h1 className="font-[600]  z-30 text-[45px] 2xl:text-[76px]  leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#b172ff] to-[#9e4fff] ">
          ROAD<span className="text-transparent">MAP</span>
        </h1>
        <div className="relative top-[20rem] xl:top-[6rem]  flex flex-col justify-center xl:grid xl:grid-cols-3 w-full  h-[55rem] xl:h-[40rem]">
          <div className="absolute opacity-50 z-10 left-0 top-[-10rem] bg-[url('/public/whatwewantodoglow.png')] bg-cover w-[300px] h-[1300px] xl:w-[1304px] xl:h-[1282px]" />
          <RoadmapCard
            number="1"
            background="bg-gradient-to-r   rounded-[20px] from-[#9f84ff] via-[#8f6dff] to-[#7c52ff]"
            description={
              <ul className="text-white font-[400] text-[14px] 2xl:text-[16px] leading-[16px]">
                <li>Website deployment.</li>
                <li>Twitter deployment.</li>
                <li>Discord channel deployment.</li>
                <li>Creation of community vault.Creation of Discord roles.</li>
              </ul>
            }
          />
          <RoadmapCard
            number="2"
            background="bg-gradient-to-b mt-10 xl:mt-0   rounded-[20px] from-[#2F217580] via-[#3c2b9380] to-[#5d4bb680]"
            description={
              <ul className="text-white font-[400] 2xl:text-[16px] leading-[16px]">
                <li>Design NFT collection.</li>
                <li>Hiring from available.</li>
                <li>Discount investors from.</li>
                <li>Whitepaper deployment.</li>
              </ul>
            }
          />
          <RoadmapCard
            number="3"
            background="bg-gradient-to-l mt-10 xl:mt-0 rounded-[20px] from-[#171B2280] via-[#0b82563f] to-[#0B825780]"
            description={
              <ul className="text-white font-[400] 2xl:text-[16px] leading-[16px]">
                <li>Contact influencers.</li>
                <li>Organic growth.</li>
                <li>Smart contract deployment.</li>Pre launch Marketing
                campaigns.
                <li>Pre mint phase trought form.</li>
                <li>WL competitions.</li>
              </ul>
            }
          />
          <RoadmapCard
            number="4"
            background="bg-gradient-to-l mt-10 xl:mt-0 relative xl:top-[-4rem] rounded-[20px] from-[#171B2280] via-[#0b82563f] to-[#0B825780]"
            description={
              <ul className="text-white font-[400] 2xl:text-[16px] leading-[16px]">
                <li>Launch Collection.</li>
                <li>Rarity available in 24 Hours.</li>
                <li>Verified Holder DAD by Solaland</li>
              </ul>
            }
          />
          <RoadmapCard
            number="5"
            background="bg-gradient-to-r mt-10 xl:mt-0  relative xl:top-[-4rem]  rounded-[20px] from-[#9f84ff] via-[#8f6dff] to-[#7c52ff]"
            description={
              <ul className="text-white font-[400] 2xl:text-[16px] leading-[16px]">
                <li>Upload video/photo apartments own by community.</li>
                <li>Announcements of new partners and their projects.</li>
                <li>Voting pool.</li>
                <li>Staking.</li>
                <li>Solana Airdrops.</li>
                <li>Giveaways.Raffles.</li>
              </ul>
            }
          />
          <RoadmapCard
            number="6"
            background="bg-gradient-to-b mt-10 xl:mt-0 relative xl:top-[-4rem] rounded-[20px] from-[#2F217580] via-[#3c2b9380] to-[#5d4bb680]"
            description={
              <ul className="text-white font-[400] 2xl:text-[16px] leading-[16px]">
                <li>
                  Booking system access for Holders in Bucharest (Romania).
                </li>
                <li>New location around the world.</li>
                <li>Create OBHC coin.</li>
                <li>Launch 2° Collection.</li>
                <li>Breeding.</li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
