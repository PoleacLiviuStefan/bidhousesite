import React from "react";
import RoadmapCard from "./RoadmapCard";

const Roadmap = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[70rem] bg-black">
      <div className="flex flex-col items-start w-[78rem]">
        <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#b172ff] to-[#9e4fff] ">
          ROAD<span className="text-transparent">MAP</span>
        </h1>
        <div className="relative top-[6rem] grid grid-cols-3 w-full h-[40rem]">
          <div className="absolute opacity-50 z-10 left-0 top-[-10rem] bg-[url('/public/whatwewantodoglow.png')] bg-cover w-[1304px] h-[1282px]" />
          <RoadmapCard
            number="1"
            background="bg-gradient-to-r  rounded-[20px] from-[#bb9bff] via-[#a880ff] to-[#9260ff]"
            description={
              <ul className="text-white font-[400] text-[16px] leading-[16px]">
                <li>Website deployment.</li>
                <li>Twitter deployment.</li>
                <li>Discord channel deployment.</li>
                <li>Creation of community vault.Creation of Discord roles.</li>
              </ul>
            }
          />
          <RoadmapCard
            number="2"
            background="bg-gradient-to-b   rounded-[20px] from-[#2F217580] via-[#3c2b9380] to-[#5d4bb680]"
            description={
              <ul className="text-white font-[400] text-[16px] leading-[16px]">
                <li>Design NFT collection.</li>
                <li>Hiring from available.</li>
                <li>Discount investors from.</li>
                <li>Whitepaper deployment.</li>
              </ul>
            }
          />
          <RoadmapCard
            number="3"
            background="bg-gradient-to-l  rounded-[20px] from-[#171B2280] via-[#0b82563f] to-[#0B825780]"
            description={
              <ul className="text-white font-[400] text-[16px] leading-[16px]">
                <li>Contact influencers.</li>
                <li>Organic growth.</li>
                <li>Smart contract deployment.</li>Pre launch Marketing
                campaigns.
                <li>Pre mint phase trought form.</li>
                <li>VVL competitions.</li>
              </ul>
            }
          />
          <RoadmapCard
            number="4"
            background="bg-gradient-to-l  rounded-[20px] from-[#171B2280] via-[#0b82563f] to-[#0B825780]"
            description={
              <ul className="text-white font-[400] text-[16px] leading-[16px]">
                <li>Launch Collection.</li>
                <li>Rarity available in 24 Hours.</li>
                <li>Verified Holder DAD by Solaland</li>
              </ul>
            }
          />
          <RoadmapCard
            number="5"
            background="bg-gradient-to-r  rounded-[20px] from-[#bb9bff] via-[#a880ff] to-[#9260ff]"
            description={
              <ul className="text-white font-[400] text-[14px] leading-[16px]">
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
            background="bg-gradient-to-b  rounded-[20px] from-[#2F217580] via-[#3c2b9380] to-[#5d4bb680]"
            description={
              <ul className="text-white font-[400] text-[16px] leading-[16px]">
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
