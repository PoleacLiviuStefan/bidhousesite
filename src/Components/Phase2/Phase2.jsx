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
      <div className="absolute bg-[url('/public/bg.png')] top-[80px] w-[95%] h-[934px] right-0 bg-cover">
        <div className="absolute left-[-25rem] z-30 bg-opacity-70 top-[-25rem] bg-[url('/public/whatwewantodoglow.png')] bg-cover w-[1304px] h-[1282px]" />
        <div className="absolute z-40 xl:left-[40px] top-[250px] xl:top-[110px] ">
          <h2 className="font-[600]  text-[35px] leading-[40px]  xl:leading-[72px] 2xl:xl:leading-[112px] xl:text-[52px] 2xl:text-[76px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          HOW IS BIDHOUSE <br /> <span className="text-transparent">STRUCTURED?</span>
          </h2>
          <p className="absolute top-[100px] z-40 xl:w-[450px] leading-[30px] 2xl:w-[600px] xl:top-[180px] 2xl:top-[270px] font-[300] xl:text-[16px] xl:text-[16px] 2xl:text-[20px] leading-[24px] flex align-center left-0 text-white">
          The Bidhouse NFT project is an ecosystem structured in two phases which gives its investors access to a number of utilities such as educational content, real estate investment opportunities, exclusive discounts, Solana airdrops and much more.<br />

The blockchain chosen for the project is Solana which unlike the Ethereum Blockchain has much lower gas fees.<br />

Through the Solana Blockchain, we aim to bring Crypto into the real, tangible world. Our goal is to purchase apartments which will be made available to rent and share the profits within the community, which is a great method of earning passive income.<br/>

The collection will consist of 11,111 NFTs that will be classified according to rarity into five categories from common to mythical. Their price and benefits will differ depending on the rarity of the NFT.<br />

From the total collection of the project only 10,000 NFTs will be released for sale while 1,000 will be invested in marketing as a currency to promote our project with influencers and brand ambassadors.<br />

The remaining 111 NFTs will be shared amongst the team behind the project. With the funds raised from the sale of the NFTs we plan to purchase new apartments, to start with in Bucharest, Romania and later as the project develops, to expand nationally and internationally.

          </p>
        </div>
      </div>
    </div>
  )
}

export default Phase2