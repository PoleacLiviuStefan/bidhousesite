import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import MintForm from "./MintForm";
import DiscountForm from "./DiscountForm";
import RecruitmentForm from "./RecruitmentForm";
const HelpUsToGrow = () => {
  const [showFormMint, setShowFormMint] = useState(false);
  const [showDiscountForm, setDiscountForm] = useState(false);
  const [showRecruitmentForm,setRecruitmentForm] = useState(false);
  const handleMintForm = () => {
    setShowFormMint((prev) => !prev);
  };
  const handleDiscountForm = () => {
    setDiscountForm((prev) => !prev);
  };
  const handleRecruitmentForm= () =>{
    setRecruitmentForm((prev)=>!prev);
  }
  return (
    <div className="relative flex flex-col items-center w-full h-[130rem] ">
      <div className="flex flex-col items-center w-[78rem]">
        <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white   ">
          HELP US TO{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A]">
            GROW{" "}
          </span>
        </h1>
        <div className="relative top-[10rem] flex flex-col w-full  ">
          <div
            className={`w-full flex cursor-pointer  ${
              showFormMint
                ? "animate-[extendform_.5s_ease-in-out_forwards]"
                : "animate-[retraceform_.5s_ease-in-out_forwards]"
            }  `}
          >
            <h3
              onClick={handleMintForm}
              className="relative text-white text-[32px] font-[700] leading-[38.73px]"
            >
              MINT FORM
            </h3>
            <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
            <BsChevronRight
              onClick={handleMintForm}
              className={`absolute right-0 text-white text-[37px]  ${
                showFormMint
                  ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                  : "animate-[animarrowback_.5s_ease-in-out_forwards]"
              }`}
            />
            <MintForm showFormMint={showFormMint} />
          </div>
          <div
            onClick={handleDiscountForm}
            className={`relative top-[6.5rem] w-full flex ${
              showDiscountForm
                ? "animate-[extendform_.5s_ease-in-out_forwards]"
                : "animate-[retraceform_.5s_ease-in-out_forwards]"
            }`}
          >
            <h3 className="relative cursor-pointer text-white text-[32px] font-[700] leading-[38.73px]">
              DISCOUNT INVESTORS
            </h3>
            <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
            <BsChevronRight
              onClick={handleDiscountForm}
              className={`absolute right-0 cursor-pointer text-white text-[37px] ${
                showDiscountForm
                  ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                  : "animate-[animarrowback_.5s_ease-in-out_forwards]"
              }`}
            />
            <DiscountForm showDiscountForm={showDiscountForm} />
          </div>
          <div className={`relative top-[13rem] w-full flex ${
              showRecruitmentForm
                ? "animate-[extendform_.5s_ease-in-out_forwards]"
                : "animate-[retraceform_.5s_ease-in-out_forwards]"
            } `}>
            <h3 onClick={handleRecruitmentForm} className="relative cursor-pointer text-white text-[32px] font-[700] leading-[38.73px]">
              RECRUIMENT
            </h3>
            <div className="absolute top-[5rem] w-full h-[2px] bg-gradient-to-l from-[#924AFB80] via-[#1CF7A0] to-[#FFFFFF00] opacity-30" />
            <BsChevronRight onClick={handleRecruitmentForm} className={`absolute right-0 cursor-pointer text-white text-[37px] ${
                showRecruitmentForm
                  ? "animate-[animarrow_.5s_ease-in-out_forwards]"
                  : "animate-[animarrowback_.5s_ease-in-out_forwards]"
              }`} />
              <RecruitmentForm showRecruitmentForm={showRecruitmentForm}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpUsToGrow;
