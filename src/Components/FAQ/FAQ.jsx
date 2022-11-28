import React,{useState} from 'react'
import { BsChevronRight } from "react-icons/bs";
import Fade from 'react-reveal/Fade'
const FAQ = () => {
    const [showQuestion,setShowQuestion]=useState(-1);
    const handleQuestion= (index)=>{
        if(showQuestion!=index)
        setShowQuestion(index);
        else
        setShowQuestion(-1);
    }
  return (
    <div name="faq" className="relative flex bg-black flex-col items-center w-full h-[130rem] ">
    <div className="flex z-30 ml-4 xl:ml-0 flex-col items-start w-[23rem] xl:w-[78rem]">
    <Fade top>
     <h1 className="font-[600] text-[35px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white   ">
        FAQ
      </h1>
      </Fade>
      <div className="relative top-[5rem] xl:top-[10rem] flex flex-col w-full  ">
       
        <div
          className={`w-full flex cursor-pointer  ${
            showQuestion==0
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          }  `}
        >
          <Fade bottom>
          <h3
            onClick={()=>handleQuestion(0)}
            className="relative text-white text-[18px] xl:text-[32px] font-[700] leading-[38.73px]"
          >
        WHY WE CHOOSE SOLANA ?
          </h3>
          </Fade>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight
            onClick={()=>handleQuestion(0)}
            className={`absolute right-2 xl:right-0 text-white text-[37px]  ${
              showQuestion==0
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`}
          />
          <p className={`absolute w-[20rem] xl:w-[70rem] ${showQuestion!=0 ? "animate-[disappear_.2s_linear_forwards]" :"opacity-0 animate-[appear_.5s_linear_forwards_.3s]"} top-[7rem] text-[15px] xl:text-[20px] text-left text-white`}>The benefits from Solana Blockchain are greater than Ethereum because it's extremely fast (TPS),<br /> gas fees almost inexistent and much higher token appreciation potential.
<br />That are some of the reasons why we choose Solana.
</p>
        </div>
   
    
        <div className={`relative top-[8rem] w-full flex ${
            showQuestion==2
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}> <Fade bottom>
          <h3 onClick={()=>handleQuestion(2)} className="relative cursor-pointer text-white text-[18px] xl:text-[32px] font-[700] leading-[38.73px]">
          DO YOU HAVE ANY RARITY CHART?
          </h3>
          </Fade>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(2)} className={`absolute right-2 xl:right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==2
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute w-[20rem] xl:w-[70rem] ${showQuestion!=2 ? "animate-[disappear_.2s_linear_forwards]" :"opacity-0 animate-[appear_.5s_linear_forwards_.3s]"} top-[7rem] text-[15px] xl:text-[20px] text-left text-white`}>Yes we will release rarity charts on our website shortly after <br/> 
sold out.There will be 6 rarities:<br/>
Common, Uncommon, Rare, Epic, Legendary, Mythic</p>
        </div>
        
         
        <div className={`relative top-[16rem] w-full flex ${
            showQuestion==3
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
            <Fade bottom>
          <h3 onClick={()=>handleQuestion(3)} className="relative cursor-pointer text-white text-[18px] xl:text-[32px] font-[700] leading-[38.73px]">
          HOW TO GET WHITELIST  ROLE ?
          </h3>
          </Fade>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(3)} className={`absolute right-2 xl:right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==3
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute w-[20rem] xl:w-[70rem] ${showQuestion!=3 ? "animate-[disappear_.2s_linear_forwards]" :"opacity-0 animate-[appear_.5s_linear_forwards_.3s]"} delay-500 top-[7rem] text-[15px] xl:text-[20px] text-left text-white`}>We have 3 options:
<br/>
1.Trought Twitter raids
<br />
2.By buying a special role for Discord as "business man"
<br />
3.Pre-mint phase with special discount.</p>
        </div>
        
         
        <div className={`relative top-[24rem] w-full flex ${
            showQuestion==4
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
            <Fade bottom>
          <h3 onClick={()=>handleQuestion(4)} className="relative cursor-pointer text-white text-[18px] xl:text-[32px] font-[700] leading-[38.73px]">
          HOW MUCH WILL COST ONE NFT ?
          </h3>
          </Fade>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(4)} className={`absolute right-2 xl:right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==4
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute w-[20rem] xl:w-[70rem] ${showQuestion!=4 ? "animate-[disappear_.2s_linear_forwards]" :" opacity-0 animate-[appear_.5s_linear_forwards_.3s]"} top-[7rem] text-[15px] xl:text-[20px] text-left text-white`}>1 NFT will cost around 250$, equivalent in Solana 24 Hours before Mint.<br />
However, during the building process of our community you can use our "Form" to get 20%<br/>
Discount as an early investor in our project.</p>
        </div>
        
         
        <div className={`relative top-[32rem] w-full flex ${
            showQuestion==5
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
           <Fade bottom>
          <h3 onClick={()=>handleQuestion(5)} className="relative cursor-pointer text-white text-[18px]  xl:text-[32px] font-[700] leading-[38.73px]">
          WHEN IS THE MINT DATE ?
          </h3>
          </Fade>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(5)} className={`absolute right-2 xl:right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==5
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute w-[20rem] xl:w-[70rem] ${showQuestion!=5 ? "animate-[disappear_.2s_linear_forwards]" :" opacity-0 animate-[appear_.5s_linear_forwards_.3s]"} top-[7rem] text-[15px]xl:text-[20px] text-left text-white`}>The mint will be announced on Community social platform. TBA</p>
            
        </div>
        
         
        <div className={`relative top-[40rem] w-full flex ${
            showQuestion==6
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
            <Fade bottom>
          <h3 onClick={()=>handleQuestion(6)} className="relative cursor-pointer text-white text-[18px] w-[300px] xl:w-full xl:text-[32px] font-[700] leading-[38.73px]">
          WHICH MARKETPLACE WILL YOU BE ON ?
          </h3>
          </Fade>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(6)} className={`absolute right-2 xl:right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==6
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute w-[20rem] xl:w-[70rem] ${showQuestion!=6 ? "animate-[disappear_.2s_linear_forwards]" :"opacity-0 animate-[appear_.5s_linear_forwards_.3s]"} top-[7rem] text-[15px] xl:text-[20px] text-left text-white`}>We  will be listing on Magic Eden directly after "Sell out".</p>
            
        </div>
        
         
        <div className={`relative top-[48rem] w-full flex ${
            showQuestion==7
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
            <Fade bottom>
          <h3 onClick={()=>handleQuestion(7)} className="relative cursor-pointer text-white text-[18px] w-[300px] xl:w-full xl:text-[32px] font-[700] leading-[38.73px]">
          HOW MANY PIECES HAVE OUR COLLECTION ?
          </h3>
          </Fade>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(7)} className={`absolute right-2 xl:right-0cursor-pointer text-white text-[37px] ${
              showQuestion==7
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute ${showQuestion!=7 ? "animate-[disappear_.2s_linear_forwards]" :"opacity-0 animate-[appear_.5s_linear_forwards_.3s]"} w-[20rem] xl:w-[70rem]  top-[7rem] text-[15px] xl:text-[20px] text-left text-white`}>Our collection have 11111 NFTs:<br/>
-Only 10000 pieces available for mint.<br />
-1111 pieces will be used in:marketing campaigns, raffles, giveaways, social<br/>
influencers, sell and raise community funds, as a reward for every person <br/>
involved in tihs project from the beginning.</p>
            
        </div>
        
         
        <div className={`relative top-[56rem] w-full flex ${
            showQuestion==8
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
             <Fade bottom>
          <h3 onClick={()=>handleQuestion(8)} className="relative cursor-pointer text-white text-[18px] xl:text-[32px] font-[700] leading-[38.73px]">
          HOW TO GET MORE INFO?
          </h3>
          </Fade>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(8)} className={`absolute right-2 xl:right-0  cursor-pointer text-white text-[37px] ${
              showQuestion==8
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute w-[20rem] xl:w-[70rem] ${showQuestion!=8 ? "animate-[disappear_.2s_linear_forwards]" :"opacity-0 animate-[appear_.5s_linear_forwards_.3s]"} top-[7rem] text-[15px] xl:text-[20px] text-left text-white`}>Check our Discord Channel, Twitter and Whitepaper.</p>
            
        </div>
        
      </div>

    </div>
  </div>
  )
}

export default FAQ