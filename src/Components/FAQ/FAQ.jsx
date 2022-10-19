import React,{useState} from 'react'
import { BsChevronRight } from "react-icons/bs";
const FAQ = () => {
    const [showQuestion,setShowQuestion]=useState(-1);
    const handleQuestion= (index)=>{
        if(showQuestion!=index)
        setShowQuestion(index);
        else
        setShowQuestion(-1);
    }
  return (
    <div name="fAQ" className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col items-start w-[78rem]">
      
      <div className="relative top-[10rem] flex flex-col w-full  ">
        <div
          className={`w-full flex cursor-pointer  ${
            showQuestion==0
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          }  `}
        >
          <h3
            onClick={()=>handleQuestion(0)}
            className="relative text-white text-[32px] font-[700] leading-[38.73px]"
          >
        WHY WE CHOOSE SOLANA ?
          </h3>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight
            onClick={()=>handleQuestion(0)}
            className={`absolute right-0 text-white text-[37px]  ${
              showQuestion==0
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`}
          />
          <p className={`absolute ${showQuestion!=0 ? "animate-[disappear_.3s_linear_forwards]" :"animate-[appear_.3s_linear_forwards]"} top-[7rem] text-[20px] text-left text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quis? Omnis, quidem porro? Saepe pariatur illo beatae inventore debitis, ut totam? Esse pariatur, blanditiis ut expedita quod recusandae eum repudiandae sed accusamus? Iste assumenda ea officia doloremque? Unde mollitia fugit, aliquam voluptatibus laborum quaerat veniam quos praesentium atque nulla tempore!</p>
        </div>
        <div
          onClick={()=>handleQuestion(1)}
          className={`relative top-[6.5rem] w-full flex ${
            showQuestion==1
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          }`}
        >
          <h3 className="relative cursor-pointer text-white text-[32px] font-[700] leading-[38.73px]">
            DISCOUNT INVESTORS
          </h3>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight
            onClick={()=>handleQuestion(1)}
            className={`absolute right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==1
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`}
          />
          <p className={`absolute ${showQuestion!=1 ? "animate-[disappear_.3s_linear_forwards]" :"animate-[appear_.3s_linear_forwards]"} top-[7rem] text-[20px] text-left text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quis? Omnis, quidem porro? Saepe pariatur illo beatae inventore debitis, ut totam? Esse pariatur, blanditiis ut expedita quod recusandae eum repudiandae sed accusamus? Iste assumenda ea officia doloremque? Unde mollitia fugit, aliquam voluptatibus laborum quaerat veniam quos praesentium atque nulla tempore!</p>
                  </div>
        <div className={`relative top-[13rem] w-full flex ${
            showQuestion==2
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
          <h3 onClick={()=>handleQuestion(2)} className="relative cursor-pointer text-white text-[32px] font-[700] leading-[38.73px]">
          DO YOU HAVE ANY RARITY CHART?
          </h3>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(2)} className={`absolute right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==2
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute ${showQuestion!=2 ? "animate-[disappear_.3s_linear_forwards]" :"animate-[appear_.3s_linear_forwards]"} top-[7rem] text-[20px] text-left text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quis? Omnis, quidem porro? Saepe pariatur illo beatae inventore debitis, ut totam? Esse pariatur, blanditiis ut expedita quod recusandae eum repudiandae sed accusamus? Iste assumenda ea officia doloremque? Unde mollitia fugit, aliquam voluptatibus laborum quaerat veniam quos praesentium atque nulla tempore!</p>
        </div>
        <div className={`relative top-[21rem] w-full flex ${
            showQuestion==3
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
          <h3 onClick={()=>handleQuestion(3)} className="relative cursor-pointer text-white text-[32px] font-[700] leading-[38.73px]">
          HOW TO GET WHITELIST  ROLE ?
          </h3>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(3)} className={`absolute right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==3
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute ${showQuestion!=3 ? "animate-[disappear_.3s_linear_forwards]" :"animate-[appear_.3s_linear_forwards]"} top-[7rem] text-[20px] text-left text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quis? Omnis, quidem porro? Saepe pariatur illo beatae inventore debitis, ut totam? Esse pariatur, blanditiis ut expedita quod recusandae eum repudiandae sed accusamus? Iste assumenda ea officia doloremque? Unde mollitia fugit, aliquam voluptatibus laborum quaerat veniam quos praesentium atque nulla tempore!</p>
        </div>
        <div className={`relative top-[29rem] w-full flex ${
            showQuestion==4
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
          <h3 onClick={()=>handleQuestion(4)} className="relative cursor-pointer text-white text-[32px] font-[700] leading-[38.73px]">
          HOW MUCH WILL COST ONE NFT ?
          </h3>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(4)} className={`absolute right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==4
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute ${showQuestion!=4 ? "animate-[disappear_.3s_linear_forwards]" :"animate-[appear_.3s_linear_forwards]"} top-[7rem] text-[20px] text-left text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quis? Omnis, quidem porro? Saepe pariatur illo beatae inventore debitis, ut totam? Esse pariatur, blanditiis ut expedita quod recusandae eum repudiandae sed accusamus? Iste assumenda ea officia doloremque? Unde mollitia fugit, aliquam voluptatibus laborum quaerat veniam quos praesentium atque nulla tempore!</p>
        </div>
        <div className={`relative top-[37rem] w-full flex ${
            showQuestion==5
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
          <h3 onClick={()=>handleQuestion(5)} className="relative cursor-pointer text-white text-[32px] font-[700] leading-[38.73px]">
          WHEN IS THE MINT DATE ?
          </h3>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(5)} className={`absolute right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==5
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute ${showQuestion!=5 ? "animate-[disappear_.3s_linear_forwards]" :"animate-[appear_.3s_linear_forwards]"} top-[7rem] text-[20px] text-left text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quis? Omnis, quidem porro? Saepe pariatur illo beatae inventore debitis, ut totam? Esse pariatur, blanditiis ut expedita quod recusandae eum repudiandae sed accusamus? Iste assumenda ea officia doloremque? Unde mollitia fugit, aliquam voluptatibus laborum quaerat veniam quos praesentium atque nulla tempore!</p>
            
        </div>
        <div className={`relative top-[45rem] w-full flex ${
            showQuestion==6
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
          <h3 onClick={()=>handleQuestion(6)} className="relative cursor-pointer text-white text-[32px] font-[700] leading-[38.73px]">
          WHICH MARKETPLACE WILL YOU BE ON ?
          </h3>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(6)} className={`absolute right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==6
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute ${showQuestion!=6 ? "animate-[disappear_.3s_linear_forwards]" :"animate-[appear_.3s_linear_forwards]"} top-[7rem] text-[20px] text-left text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quis? Omnis, quidem porro? Saepe pariatur illo beatae inventore debitis, ut totam? Esse pariatur, blanditiis ut expedita quod recusandae eum repudiandae sed accusamus? Iste assumenda ea officia doloremque? Unde mollitia fugit, aliquam voluptatibus laborum quaerat veniam quos praesentium atque nulla tempore!</p>
            
        </div>
        
        <div className={`relative top-[53rem] w-full flex ${
            showQuestion==7
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
          <h3 onClick={()=>handleQuestion(7)} className="relative cursor-pointer text-white text-[32px] font-[700] leading-[38.73px]">
          HOW MANY PICES HAVE OUR COLLECTION ?
          </h3>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(7)} className={`absolute right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==7
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute ${showQuestion!=7 ? "animate-[disappear_.3s_linear_forwards]" :"animate-[appear_.3s_linear_forwards]"} top-[7rem] text-[20px] text-left text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quis? Omnis, quidem porro? Saepe pariatur illo beatae inventore debitis, ut totam? Esse pariatur, blanditiis ut expedita quod recusandae eum repudiandae sed accusamus? Iste assumenda ea officia doloremque? Unde mollitia fugit, aliquam voluptatibus laborum quaerat veniam quos praesentium atque nulla tempore!</p>
            
        </div>
        <div className={`relative top-[60rem] w-full flex ${
            showQuestion==8
              ? "animate-[extendform_.5s_ease-in-out_forwards]"
              : "animate-[retraceform_.5s_ease-in-out_forwards]"
          } `}>
          <h3 onClick={()=>handleQuestion(8)} className="relative cursor-pointer text-white text-[32px] font-[700] leading-[38.73px]">
          HOW TO GET MORE INFO
          </h3>
          <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
          <BsChevronRight onClick={()=>handleQuestion(8)} className={`absolute right-0 cursor-pointer text-white text-[37px] ${
              showQuestion==8
                ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                : "animate-[animarrowback_.5s_ease-in-out_forwards]"
            }`} />
            <p className={`absolute ${showQuestion!=8 ? "animate-[disappear_.3s_linear_forwards]" :"animate-[appear_.3s_linear_forwards]"} top-[7rem] text-[20px] text-left text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quis? Omnis, quidem porro? Saepe pariatur illo beatae inventore debitis, ut totam? Esse pariatur, blanditiis ut expedita quod recusandae eum repudiandae sed accusamus? Iste assumenda ea officia doloremque? Unde mollitia fugit, aliquam voluptatibus laborum quaerat veniam quos praesentium atque nulla tempore!</p>
            
        </div>
      </div>

    </div>
  </div>
  )
}

export default FAQ