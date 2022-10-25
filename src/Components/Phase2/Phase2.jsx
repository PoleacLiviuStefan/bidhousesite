import React from 'react'
import herovideo from '../Hero/herovideo.mp4'
const Phase2 = () => {
  return (
    <div className=" bg-black  rounded-[20px] h-[70rem] w-full">
      <div className="absolute top-[2rem] xl:top-[15rem]  right-0   z-40 " >
      <video className='z-50 xl:w-[600px] xl:h-[400px] 2xl:w-[900px] 2xl:h-[600px]'    controls >
      <source src={herovideo} type="video/mp4"/>
</video>
</div>
      <div className="absolute bg-[url('/public/bg.png')] top-[80px] w-[95%] h-[1150px] xl:h-[934px] right-0 bg-cover">
        <div className="absolute left-[-25rem] z-30 bg-opacity-70 top-[-25rem] bg-[url('/public/whatwewantodoglow.png')] bg-cover w-[1304px] h-[1282px]" />
        <div className="absolute z-40 left-[22px] xl:left-[40px] top-[250px] xl:top-[110px] ">
          <h2 className="font-[600]   text-[35px] leading-[40px]  xl:leading-[72px] 2xl:xl:leading-[112px] xl:text-[52px] 2xl:text-[76px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          PHASE <span className="text-transparent">2</span>
          </h2>
          <p className="absolute top-[60px] w-[300px] z-40 xl:w-[450px] leading-[30px] 2xl:w-[510px] xl:top-[100px] 2xl:top-[150px] font-[300] xl:text-[16px] xl:text-[16px] 2xl:text-[20px] leading-[24px] flex align-center left-0 text-white">
          The second phase of the project will run simultaneously with the first phase. The second phase is based on the construction of the first Crypto Headquarters in Romania. Designers and architects in our team are already working on this project. This phase is in continuous development. In this Crypto Headquarters will take place conferences in hubs where people passionate about Crypto, business and not only will be able to meet, discuss and relax in a fairytale atmosphere, all this will happen closer to nature, in a forest, away from the urban agglomeration. See here how this venue will look like...(video)

    <br />
   


In addition, in each apartment owned by the community we plan to exhibit artwork that will also be sold through Crypto. 75% of the sale price will go back to the artist and 25% will add to our community profits.

Why should you be part of the community and get involved in our project? Here are a few reasons:
<br />


100% transparency. Behind every share will be a REAL company that will allow us to buy real assets for our community and bring in profits.

Each wallet that holds an nft from our collection will benefit from ownership and will be added to a special company document as owner.

<br />
Floor price secured. If an NFT is listed on the market place  below the mint price  we will buy it within 48h with the specially designed wallet and list it with a price at least equal to the initial sale price which means that you  can get your money back at any time.

Bidhouse is here to revolution the real estate using Blockchain technology.

          </p>
        </div>
      </div>
    </div>
  )
}

export default Phase2