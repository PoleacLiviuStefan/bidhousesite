import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const WeAreBidHouse = () => {
  return (
    <div className="relative w-full  h-[900px] bg-black">
      <Fade delay={400} left>
        <div className="absolute left-0  z-40 bg-[url('/public/weareleft.png')] bg-cover h-[633px] w-[378px]" />
      </Fade>
      <div className="absolute top-[200px] z-50 right-[2rem]  w-[800px] h-[680px] opacity-80 bg-[url('/public/glowarea.png')] bg-cover" />
      <div className="absolute top-[500px] z-50 left-[-9rem] opacity-70  w-[500px] h-[400px]  bg-[url('/public/glowarea.png')] bg-cover" />
      <Slide duration={2400} delay={400} right>
        <div className="absolute right-0  z-40 bg-[url('/public/weareright.png')] bg-cover h-[633px] w-[521px]" />
      </Slide>
      <div className="absolute right-0 top-[70px] bg-[url('/public/rightphotowearebg.png')] bg-cover h-[570px] w-[530px]" />

      <div className=" absolute left-0 top-[110px] bg-[url('/public/wearetextbg.png')] bg-cover  w-[60%] h-[75%]">
        <div className="absolute right-[1rem] top-0">
          <Fade delay={400} bottom>
            <div className="relative text-[96px] w-[463px] h-[184px] right-[4rem]  bg-[url('/public/wearetext.png')] bg-cover font-[600] text-white " />
          </Fade>
          <Fade delay={800} bottom>
            <p className="absolute right-0 top-[215px] text-opacity-70   text-white w-[522px] font-[200] text-[20px] leading-[28px] h-[55px]">
              Our project will buy real apartaments around the world in order to
              benefit from them as owner of our NFTs
            </p>
          </Fade>
          <Fade delay={1200} bottom>
            <h3 className="absolute right-[-.5rem] top-[330px]  text-white w-[530px] font-[400] text-[20px] leading-[28px] h-[109px]">
              The benefits of Holding our NFT are:
            </h3>
            <ul className="absolute grid grid-cols-2 text-white left-[-3rem] font-[400] w-[500px] text-[20px] leading-[45px] top-[385px]">
              <li className="flex">
                <div className="relative bg-[url('/public/secureicon.svg')] top-[8px] right-3 bg-cover w-[24px] h-[27.43px]" />
                Floor Price Secured
              </li>
              <li className="flex">
                <div className="relative bg-[url('/public/freeicon.svg')] top-[8px] right-3 bg-cover w-[24px] h-[24px]" />
                Solana Airdrops
              </li>
              <li className="flex">
                {" "}
                <div className="relative bg-[url('/public/freeicon.svg')] top-[12px] right-3 bg-cover w-[24px] h-[24px]" />
                Free Access
              </li>
              <li className="flex">
                {" "}
                <div className="relative bg-[url('/public/giveawaysicon.svg')] top-[8px] right-3 bg-cover w-[24px] h-[24px]" />
                Giveaways
              </li>
              <li className="flex">
                {" "}
                <div className="relative bg-[url('/public/rareicon.svg')] top-[10px] right-3 bg-cover w-[24px] h-[24px]" />
                Rarity
              </li>
              <li className="flex">
                {" "}
                <div className="relative bg-[url('/public/transparencyicon.svg')] top-[10px] right-2 bg-cover w-[24px] h-[24px]" />
                100% Transparency
              </li>
              <li className="flex">
                {" "}
                <div className="relative bg-[url('/public/rafflesicon.svg')] top-[8px] right-3 bg-cover w-[24px] h-[24px]" />
                Raffles
              </li>
              <li className="flex">
                {" "}
                <div className="relative bg-[url('/public/stakingicon.svg')] top-[14px] right-3 bg-cover w-[24px] h-[18px]" />
                Staking
              </li>
              <li className="flex">
                {" "}
                <div className="relative bg-[url('/public/whitelisticon.svg')] top-[8px] right-3 bg-cover w-[19.86px] h-[26.48px]" />
                <div className="relative bg-[url('/public/whitelistcircleicon.svg')] top-[8px] right-[17px] bg-cover w-[8.28px] h-[8.28px]" />
                Whitelist
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default WeAreBidHouse;
