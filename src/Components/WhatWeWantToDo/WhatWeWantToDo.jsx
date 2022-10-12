import React from "react";

const WhatWeWantToDo = () => {
  return (
    <div className=" bg-black  rounded-[20px] h-[70rem] w-full">
      <div className="absolute  right-0   z-40 bg-[url('/public/weareright.png')] bg-cover w-[300px] h-[306px] xl:w-[721px] xl:h-[733px]" />
      <div className="absolute bg-[url('/public/bg.png')] top-[80px] w-[95%] h-[734px] right-0 bg-cover">
        <div className="absolute left-[-25rem] z-40 bg-opacity-70 top-[-25rem] bg-[url('/public/whatwewantodoglow.png')] bg-cover w-[1304px] h-[1282px]" />
        <div className="absolute z-40 left-[40px] top-[250px] xl:top-[110px] ">
          <h2 className="font-[600] text-[30px]  2xl:text-[80px] 3xl:text-[92px] xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
            THE BENEFITS OF <br />
            HOLDING <span className="text-transparent">OUR NFT</span>
          </h2>
          <p className="absolute xl:w-[500px] 2xl:w-[600px] top-[150px]  xl:top-[270px] font-[300] xl:text-[16px] 2xl:text-[20px] leading-[24px] flex align-center left-0 text-white">
            We want to bring Solana Chain in the real world by buying apartments
            in Bucharest - Romania , rent them and get profits for our
            community.
            <br /> <br />
            100% Profits to our community: 75% of profits will be used to
            airdrop solana, NFTs raffles and giveaways. 25% will be added in the
            community wallet. <br /> <br /> Check " Benefits Holder " section to
            discover the utility of our NFTs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeWantToDo;
