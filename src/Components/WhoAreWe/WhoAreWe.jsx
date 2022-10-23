import React from "react";

const WhoAreWe = () => {
  return (

    <div name="WhoAreWe" className=" bg-black h-[70rem] w-full">
      <div className="absolute rounded-[20px] z-40 bg-[url('/public/phase1.jpeg')]   bg-cover w-[300px] h-[400px] xl:w-[600px] xl:h-[610px] 2xl:w-[721px] 2xl:h-[733px]" />
      <div className="absolute bg-[url('/public/bg2.png')]  top-[80px] w-[95%] h-[1160px] xl:h-[934px]  left-0 bg-cover">
        <div className="absolute right-[-25rem] z-30 bg-opacity-70 top-[-25rem] bg-[url('/public/glowsecond.png')] bg-cover w-[1304px] h-[1282px]" />
        <div className="absolute  z-40 right-[40px] top-[350px] xl:top-[130px] ">
          <h2 className="relative font-[600]  text-[30px]  leading-[40px] xl:leading-[72px] 2xl:xl:leading-[112px] xl:text-[52px] 2xl:text-[76px]   text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
            THE BENEFITS OF <br />
            HOLDING <span className="text-transparent">OUR NFT</span>
          </h2>
          <p className="absolute top-[100px]  w-[300px] xl:w-[450px] 2xl:w-[600px] leading-[30px]  xl:top-[180px] 2xl:top-[270px] font-[300] xl:text-[16px] xl:text-[16px] 2xl:text-[20px] leading-[24px] flex align-center left-0 text-white">
          The apartments to be purchased under the project will be offered for rent for three periods of time depending on demand and area: long, medium and short term rental.<br />

Long-term, apartments will be rented to families for a minimum of 1-2 years to ensure financial security for investors and NFT buyers.<br/>

Medium term. They will be rented for 2-7 days through companies like Airbnb, Booking, etc. Here the value of profits and gains for the landlords will be higher and the profit is to be determined.<br />

Short term rental will be available to video chatters and podcasters. In designing the apartment we will be using an interior designer to ensure professionalism. <br />

The apartments will be rented 24 hours a day, the rest of the time they will be undergoing cleaning and maintenance. The rental price for this period of the apartments will start from $100 per day. We will also make available photographers, video editors and sound engineers to create the necessary content at a higher quality, this will all be available at at an extra cost. The  profits of these services will be shared amongst the NFT holders.

    </p>
    </div>
    </div>
    </div>
  );
};

export default WhoAreWe;
