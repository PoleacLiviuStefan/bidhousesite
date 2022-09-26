import React from "react";

const WhyTheProjectWillBeSuccessful = () => {
  return (
    <div className=" bg-black h-[70rem] w-full">
      <div className="absolute right-0 z-50 bg-[url('/public/whytheprojectwillbesuccessfulimg.png')] bg-cover w-[815px] h-[826px]" />
      <div className="absolute bg-[url('/public/whatwewanttodobg.png')] top-[40px] w-[90%] h-[676px]  bg-cover">
        <div className="absolute left-[15rem] top-[-10rem] bg-[url('/public/whatwewantodoglow.png')] bg-cover w-[1304px] h-[1282px]" />
        <div className="absolute z-50 left-[40px] top-[60px] ">
          <div className="relative mr-10 bg-[url('/public/whytheprojectwillbesuccessfultitle.png')] bg-cover  w-[786px] h-[296px]" />
          <p className="absolute w-[600px]  top-[380px] font-[300] text-[20px] leading-[24px] flex align-center left-0 text-white">
            The project will be successful because the NFTs have value in the
            Real World. Our community own real flats and every holder will
            benefit from this.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyTheProjectWillBeSuccessful;
