import React from "react";

const WhoAreWe = () => {
  return (
    <div className=" bg-black h-[70rem] w-full">
      <div className="absolute z-50 bg-[url('/public/whoareweimg.png')] bg-cover w-[815px] h-[826px]" />
      <div className="absolute bg-[url('/public/whatwewanttodobg.png')] top-[40px] w-[90%] h-[676px] left-0 bg-cover">
        <div className="absolute left-[15rem] top-[-30rem] bg-[url('/public/whoweareglow.png')] bg-cover w-[1304px] h-[1282px]" />
        <div className="absolute  right-[40px] top-[110px] ">
          <div className="bg-[url('/public/whoarewetitle.png')] bg-cover w-[644px] h-[72px]" />
          <p className="absolute top-[155px] text-white font-[300] w-[649px] h-[120px] leading-[24px] text-[20px]">
            We are a team with skills to moon this project such as Accounting -
            Real Estate agent - Business management In addition to that we have
            more than 10 people ready to help us with minor tasks as moderate
            Discord, posting on Twitter, etc.
            <br /> We are the real deal ! Watch us !
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
