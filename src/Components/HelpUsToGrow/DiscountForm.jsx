import React,{useState} from "react";

const DiscountForm = ({ showDiscountForm }) => {
  const [mintOption,setMintOption]=useState(0)
  const [mintingNfts,setMintingNfts]=useState(1)
  const selectOption = (index)=>{
        setMintOption(index);
  }
  const handleNfts=(index)=>{
      setMintingNfts(index);
  } 
  return (
    <form
      className={`absolute z-50 text-white flex flex-col items-center w-full top-[9rem] ${
        showDiscountForm
          ? "z-30 h-[130rem] animate-[appear_.5s_ease-in-out_forwards]"
          : "z-20 animate-[disappear_.5s_ease-in-out_forwards]"
      } w-full `}
    >
      <label className="relative xl:left-[-12rem] text-white text-[20px] xl:text-[24px] font-[400]">
        Fill the form
      </label>

      <input
        className="relative outline-none xl:left-[-1.3rem] px-8 top-8 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]"
        placeholder="Enter your Twitter account *"
        required
      ></input>
      <input
        className="relative outline-none px-8 xl:left-[-1.3rem] text-[16px] xl:text-[18px] top-16 rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]"
        placeholder="Enter your Discord account *"
        required
      ></input>
   <input
        className="relative outline-none px-8 xl:left-[-1.3rem] text-[16px] xl:text-[18px] top-[6rem] rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]"
        placeholder="Enter your Email *"
        required
      ></input>
      <label className="relative top-[9rem] xl:left-[-9.8rem] text-white text-[20px] xl:text-[24px] font-[400]">
        Make your choice
      </label>
      <div className="relative top-[13rem] left-[-3rem] xl:left-[-9.2rem] flex ">
        <div onClick={()=>selectOption(0)} className={`w-[40px] h-[40px] cursor-pointer flex justify-center items-center   border-[1px] border-[#7B48ED] rounded-[10px]`}>
          <div className={`w-[30px] ${mintOption!=0 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
        </div>
        <label className="relative left-6 top-2 text-[16px] xl:text-[18px] font-[700]">
          Guaranteed Whitelist
        </label>
        <p className="absolute  top-12  font-[400] text-[14px] w-[300px] xl:w-[493px]">
          Whitelist investor Role on discord 100% sport guaranteed
          <br />
          Discount and Whitelist 2nd Gen NFT's
          <br />
          <br />
          <span className="font-[200] opacity-70">
            Book now your whitelist spot by ending 1 SOL to the community
            <br />
            wallet "Check on Discord" and please fill the form with all the
            necesary info
          </span>
        </p>
      </div>
      <div className="relative top-[28rem] xl:top-[23rem] left-[-4.7rem] xl:left-[-11.3rem] flex ">
        <div onClick={()=>selectOption(1)} className="w-[40px] cursor-pointer flex justify-center items-center  h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
          <div  className={`w-[30px] ${mintOption!=1 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
        </div>
        <label className="relative left-6 top-2 text-[16px] xl:text-[18px] font-[700]">
          Discount 20%
        </label>
        <p className="absolute  top-12  font-[400] text-[14px] w-[300px] xl:w-[639px]">
          Early investor Role on Disocrd
          <br />
          20% Discount for every NFT booked. Discount and White guaranteed 2nd
          Gen NFT's.
          <br />
          <br />
          <span className="font-[200] opacity-70">
            Book now your NFT's by sending 100$ worth of SOLANA and you will be
            on a special whitelist
            <br />
            where you will get 20% discount in the mint process. Please fill the
            form with all the necessary info.
          </span>
        </p>
      </div>
      <div className="relative top-[44.5rem] xl:top-[33.5rem] left-[-5.3rem] xl:left-[-12rem] flex ">
        <div onClick={()=>selectOption(2)}  className="w-[40px] cursor-pointer flex justify-center items-center  h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
          <div className={`w-[30px] ${mintOption!=2 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
        </div>
        <label className="relative left-6 top-2 text-[16px] xl:text-[18px] font-[700]">
          Pay 2 get 3
        </label>
        <p className="absolute  top-12  font-[400] text-[14px] w-[306px]">
          Business Man Role on Discord 1 Free NFT
          <br />
          Discount and Whitelist guaranteed 2nd Gen NFT's
          <br />
          <br />
          <span className="font-[200] opacity-70">
            Book now 2 NFT's and you get 1 more for Free.
            <br />
            Please fill the form with all the necessary info.
          </span>
        </p>
      </div>

      <div className="relative top-[49rem] xl:top-[36rem] xl:left-[-6rem] flex flex-col ">
        <label className="relative top-[9rem]  text-white text-[20px] xl:text-[24px] font-[400]">
          How many NFT's plan to mint?
        </label>
        <div className="relative top-[11rem]">
          <div className="flex">
            <div onClick={()=>handleNfts(1)} className="w-[40px] cursor-pointer flex justify-center items-center  h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className={`w-[30px] ${mintingNfts!=1 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
            </div>
            <label className="relative left-5 text-[20px] font-[200] opacity-70">
              1
            </label>
          </div>
          <div className="relative flex top-[2rem]">
            <div onClick={()=>handleNfts(2)} className="w-[40px] cursor-pointer flex justify-center items-center  h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className={`w-[30px] ${mintingNfts!=2 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
            </div>
            <label className="relative left-5 text-[20px] font-[200] opacity-70">
              2
            </label>
          </div>
          <div className="relative flex top-[4rem]">
            <div onClick={()=>handleNfts(3)} className="w-[40px] cursor-pointer flex justify-center items-center h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className={`w-[30px] ${mintingNfts!=3 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
            </div>
            <label className="relative left-5 text-[20px] font-[200] opacity-70">
              3
            </label>
          </div>
          <div className="relative flex top-[6rem]">
            <div  onClick={()=>handleNfts(4)}className="w-[40px] cursor-pointer flex justify-center items-center  h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className={`w-[30px] ${mintingNfts!=4 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
            </div>
            <label className="relative left-5 text-[20px] tracking-[10px] font-[200] opacity-70">
              5+ <sub className="tracking-[3px]">or more</sub>
            </label>
          </div>
        </div>
      </div>
      <div className="xl:top-[55rem] top-[70rem] relative flex flex-col">
        <input
          className="relative outline-none px-8 text-[16px] xl:text-[18px] xl:left-[-1.5rem]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]"
          placeholder="Enter your Wallet Adress *"
          required
        ></input>
        <input
          className="relative outline-none top-6 px-8 text-[16px] xl:text-[18px] xl:left-[-1.5rem]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]"
          placeholder="Signature Transaction ID (if already deposit) *"
          required
        ></input>
      </div>
      <label className="relative top-[75rem] xl:top-[58rem] xl:left-[-3.7rem] text-white text-[20px] xl:text-[24px] font-[400]">
        Your opinion is very important to us!{" "}
      </label>
      <textarea
        placeholder="If you have something to say, we are listening...!"
        className="relative opacity-70 px-10 py-4 top-[78rem] xl:top-[60rem] xl:left-[-1.3rem] rounded-[10px] font-[200] text-white text-[20px] w-[350px] xl:w-[468px] h-[145px] outline-none  bg-transparent border-[1px] border-[#7B48ED]"
      ></textarea>
      <button
        type="submit"
        className="relative bg-gradient-to-r from-[#FFFFFF00]/10 to-[#523F83]/10 top-[81rem] xl:top-[80rem] xl:left-[-1.3rem] w-[350px] xl:w-[468px] h-[56px] text-[16px] font-[600] border-[1px] rounded-[16px] border-[#a98be4] "
      >
        Send
      </button>
    </form>
  );
};

export default DiscountForm;
