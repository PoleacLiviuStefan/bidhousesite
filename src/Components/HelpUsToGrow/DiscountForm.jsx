import React,{useState,useRef} from "react";
import emailjs from '@emailjs/browser';
const DiscountForm = ({ showDiscountForm,afterLogin }) => {
  const [mintOption,setMintOption]=useState(0)
  const [mintingNfts,setMintingNfts]=useState(1)
  const selectOption = (index)=>{
        setMintOption(index);
  }
  const handleNfts=(index)=>{
      setMintingNfts(index);
  } 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dd2l6et', 'template_x5jqfys', form.current, 'bCFO-F4oUHOZzgTNO')
      .then((result) => {
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form
    ref={form}
    onSubmit={sendEmail}
      className={`absolute  text-white flex flex-col  w-full ${afterLogin ?"top-[2rem] mr-[15rem]": "top-[9rem]  items-center"} ${
        showDiscountForm
          ? "z-30 h-[130rem] animate-[appear_.5s_ease-in-out_forwards]"
          : "z-20 animate-[disappear_.5s_ease-in-out_forwards]"
      } w-[30rem] `}
    >
      <label className="relative xl:left-[-8.5rem] text-white text-[20px] xl:text-[24px] font-[400]">
        Fill the form
      </label>

      <input
        className={`relative ${afterLogin && "hidden"} outline-none  px-8 top-8 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`}
        name="user_twitter"
        placeholder="Enter your Twitter account *"
        required
      ></input>
      <input
        className={`relative ${afterLogin && "hidden"} outline-none px-8 text-[16px] xl:text-[18px] top-16 rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]`}
        name="user_discord"
        placeholder="Enter your Discord account *"
        required
      ></input>
   <input
        className={`relative ${afterLogin && "hidden"} outline-none px-8  text-[16px] xl:text-[18px] top-[6rem] rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]`}
        name="user_email"
        placeholder="Enter your Email *"
        required
      ></input>
      <label className={`relative ${ afterLogin ?"top-[1rem]": "top-[9rem]"} xl:left-[-8.5rem] text-white text-[20px] xl:text-[24px] font-[400]`}>
        Make your choice
      </label>
      <div className={`relative ${afterLogin ? "top-[2.5rem]":"top-[13rem]"} left-[-3rem] xl:left-[-7.9rem] flex `}>
        <div onClick={()=>selectOption(0)} className={`w-[40px] h-[40px] cursor-pointer flex justify-center items-center   border-[1px] border-[#7B48ED] rounded-[10px]`}>
          <div className={`w-[30px] ${mintOption!=0 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
        </div>
        <label className="relative left-6 top-2 text-[16px] xl:text-[18px] font-[700]">
          Guaranteed Whitelist
        </label>
        <p className={`absolute  top-12  font-[400]  ${afterLogin ? "w-[300px] xl:w-[300px]":" w-[300px] xl:w-[493px]"} text-[14px] `}>
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
      <div className={`relative  ${afterLogin ? "xl:top-[0rem] left-[20rem] top-[12rem]" : "xl:top-[23rem] top-[28rem] left-[-4.7rem] xl:left-[-10rem]"}   flex `}>
        <div onClick={()=>selectOption(1)} className="w-[40px] cursor-pointer flex justify-center items-center  h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
          <div  className={`w-[30px] ${mintOption!=1 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
        </div>
        <label className="relative left-6 top-2 text-[16px] xl:text-[18px] font-[700]">
          Discount 20%
        </label>
        <p className={`absolute  top-12  ${afterLogin ? " w-[300px] xl:w-[340px]":"w-[300px] xl:w-[639px]"} font-[400] text-[14px] `}>
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
      <div className={`relative  ${afterLogin?"xl:top-[13rem] top-[29rem] xl:left-[-7.8rem]":"xl:top-[33.5rem] top-[44.5rem] left-[-5.3rem] xl:left-[-10.7rem] "} flex `}>
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

      <div className={`relative flex flex-col   ${afterLogin ?"xl:top-[2rem] top-[30rem] left-[20rem] ":"xl:top-[36rem] top-[49rem] xl:left-[-4.7rem] "}   `}>
        <label className="relative top-[9rem]  text-white text-[20px] xl:text-[24px] font-[400]">
          How many NFT's plan to mint?
        </label>
        <div className={`relative ${afterLogin && "grid grid-cols-2"} top-[11rem] w-[350px]`}>
          <div className="flex">
            <div onClick={()=>handleNfts(1)} className="w-[40px] cursor-pointer flex justify-center items-center  h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className={`w-[30px] ${mintingNfts!=1 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
            </div>
            <label className="relative left-5 text-[20px] font-[200] opacity-70">
              1
            </label>
          </div>
          <div className={`relative flex ${afterLogin ?"top-0":"top-[2rem]"}`}>
            <div onClick={()=>handleNfts(2)} className="w-[40px] cursor-pointer flex justify-center items-center  h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className={`w-[30px] ${mintingNfts!=2 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
            </div>
            <label className="relative left-5 text-[20px] font-[200] opacity-70">
              2
            </label>
          </div>
          <div className={`relative flex ${afterLogin ? "top-[2rem]":"top-[4rem]"}`}>
            <div onClick={()=>handleNfts(3)} className="w-[40px] cursor-pointer flex justify-center items-center h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className={`w-[30px] ${mintingNfts!=3 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
            </div>
            <label className="relative left-5 text-[20px] font-[200] opacity-70">
              3
            </label>
          </div>
          <div className={`relative flex ${afterLogin ?"top-[2rem]":"top-[6rem]"}`}>
            <div  onClick={()=>handleNfts(4)}className="w-[40px] cursor-pointer flex justify-center items-center  h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className={`w-[30px] ${mintingNfts!=4 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
            </div>
            <label className="relative left-5 text-[20px] tracking-[10px] font-[200] opacity-70">
              5+ <sub className="tracking-[3px]">or more</sub>
            </label>
          </div>
        </div>
      </div>
      <div className={` ${afterLogin ? "xl:top-[16rem] top-[49rem] left-[-7.8rem]":"xl:top-[55rem] top-[70rem] flex-col"}   relative flex `}>
        <input
          className={`relative  outline-none px-8 text-[16px]  xl:text-[18px] xl:left-[-.2rem]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]`}
          name="user_wallet"
          placeholder="Enter your Wallet Adress *"
          required
        ></input>
        <input
          className={`relative  outline-none ${afterLogin ? "top-0 ml-[11rem]":"top-6"} px-8 text-[16px] xl:text-[18px] xl:left-[-.2rem]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]`}
          name="user_signature"
          placeholder={` ${afterLogin ? "Signature Transaction ID":"Signature Transaction ID (if already deposit)"} *`}
          required
        ></input>
      </div>
      <label className={`relative ${afterLogin && "hidden"} top-[75rem] xl:top-[58rem] xl:left-[-2.4rem] text-white text-[20px] xl:text-[24px] font-[400]`}>
        Your opinion is very important to us!{" "}
      </label>
      <div  className="hidden">
            <input name="guaranteedwhitelist"  value={mintOption==0 ? "yes":"no"} readOnly /> 
            <input name="discount20%"  value={mintOption==1 ? "yes":"no"} readOnly /> 
            <input name="pay2get3"  value={mintOption==2 ? "yes":"no"} readOnly /> 
            <input name="mint1"  value={mintingNfts==1 ? "yes":"no"} readOnly /> 
            <input name="mint2"  value={mintingNfts==2 ? "yes":"no"} readOnly />
            <input name="mint3"  value={mintingNfts==3 ? "yes":"no"} readOnly />
            <input name="mint4"  value={mintingNfts==4 ? "yes":"no"} readOnly />
        </div>
      <textarea
      name="message"
        placeholder="If you have something to say, we are listening...!"
        className={`relative ${afterLogin && "hidden"} opacity-70 px-10 py-4 top-[78rem] xl:top-[60rem]  rounded-[10px] font-[200] text-white text-[20px] w-[350px] xl:w-[468px] h-[145px] outline-none  bg-transparent border-[1px] border-[#7B48ED]`}
      ></textarea>
      <button
        type="submit"
        value="Send"
        className={`relative bg-gradient-to-r from-[#FFFFFF00]/10 to-[#523F83]/10  ${afterLogin ?"xl:top-[19rem] top-[52rem] left-[1rem]":"xl:top-[67rem] top-[81rem]"}  w-[350px] xl:w-[468px] h-[56px] text-[16px] font-[600] border-[1px] rounded-[16px] border-[#a98be4] `}
      >
        Send
      </button>
    </form>
  );
};

export default DiscountForm;
