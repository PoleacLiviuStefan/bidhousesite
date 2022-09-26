import React from "react";

const WhatWeWantToDo = () => {
  return (
    <div className=" bg-black h-[70rem] w-full">
      <div className="absolute right-0 z-50 bg-[url('/public/whatwewantodoimg.png')] bg-cover w-[815px] h-[826px]" />
      <div className="absolute bg-[url('/public/whatwewanttodobg.png')] top-[40px] w-[90%] h-[676px] right-0 bg-cover">
        <div className="absolute left-[15rem] top-[-15rem] bg-[url('/public/whatwewantodoglow.png')] bg-cover w-[1304px] h-[1282px]" />
        <div className="absolute z-50 left-[40px] top-[60px] ">
          <div className="bg-[url('/public/whatwewanttodotitle.png')] bg-cover w-[629px] h-[183px]" />
          <p className="absolute w-[600px]  top-[270px] font-[300] text-[20px] leading-[24px] flex align-center left-0 text-white">
            We want to bring Solana Chain in the real world by buying apartments
            in Bucharest - Romania , rent them and get profits for our
            community.
            <br /> <br />
            100% Profits to our community: 75% of profits will be used to
            airdrop solana, NFTs raffles and giveaways. 25% will be added in the
            community wallet. <br /> <br /> Check " Benefits Holder " section
            to discover the utility of our NFTs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeWantToDo;
