import React from "react";

const MintForm = ({showFormMint}) => {
  return (
    <form
      className={`absolute text-white flex flex-col items-center w-full top-[9rem] ${
        showFormMint
          ? "h-[130rem] animate-[appear_.5s_ease-in-out_forwards]"
          : "animate-[disappear_.5s_ease-in-out_forwards]"
      } w-full `}
    >
      <label className="relative left-[-2.5rem] text-white text-[24px] font-[400]">
        Your opinion is very important to us!
      </label>

      <input
        className="relative outline-none px-8 top-8 text-[18px]  rounded-[10px] w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]"
        placeholder="Enter your Twitter account *"
        required
      ></input>
      <input
        className="relative outline-none px-8 text-[18px] top-16 rounded-[10px] w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]"
        placeholder="Enter your Discord account *"
        required
      ></input>

      <label className="relative top-[9rem] left-[-5.7rem] text-white text-[24px] font-[400]">
        How do you prefer to mint?
      </label>
      <div className="relative top-[13rem] left-[-11.5rem] flex ">
        <div className="w-[40px] flex justify-center items-center rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
          <div className="w-[30px] h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]"></div>
        </div>
        <label className="relative left-6 top-2 text-[18px] font-[700]">
          Magic Eden
        </label>
        <p className="absolute  top-12 w-full font-[400] text-[14px] w-[306px]">
          Fast mint, great exposure in marketing terms.
          <br />
          <br />
          On the other hand <br />
          <span className="font-[200] opacity-70">
            Not everyone will be able to mint, high fees less capital for
            investment.
          </span>
        </p>
      </div>
      <div className="relative top-[23rem] left-[-10rem] flex ">
        <div className="w-[40px] flex justify-center items-center rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
          <div className="w-[30px] h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]"></div>
        </div>
        <label className="relative left-6 top-2 text-[18px] font-[700]">
          Bidhouse Website
        </label>
        <p className="absolute  top-12 w-full font-[400] text-[14px] w-[306px]">
          No fees for launchpad, more capital for invest
          <br />
          Unlimited mint NFT
          <br />
          <br />
          On the other hand <br />
          <span className="font-[200] opacity-70">
            Less exposure. Need to be developed
          </span>
        </p>
      </div>
      <div className="relative top-[33.5rem] left-[-12rem] flex ">
        <div className="w-[40px] flex justify-center items-center rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
          <div className="w-[30px] h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]"></div>
        </div>
        <label className="relative left-6 top-2 text-[18px] font-[700]">
          Form Mint
        </label>
        <p className="absolute  top-12 w-full font-[400] text-[14px] w-[306px]">
          Simple process (send SOL to a comunity wallet - Open a ticked and get
          NFT).
          <br />
          No fees.
          <br />
          <br />
          On the other hand <br />
          <span className="font-[200] opacity-70">
            Less exposure. Lazy mint.
          </span>
        </p>
      </div>

      <div className="relative top-[36rem] left-[-6rem] flex flex-col ">
        <label className="relative top-[9rem]  text-white text-[24px] font-[400]">
          How many NFT's plan to mint?
        </label>
        <div className="relative top-[11rem]">
          <div className="flex">
            <div className="w-[40px] flex justify-center items-center rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className="w-[30px] h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]"></div>
            </div>
            <label className="relative left-5 text-[20px] font-[200] opacity-70">
              1
            </label>
          </div>
          <div className="relative flex top-[2rem]">
            <div className="w-[40px] flex justify-center items-center rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className="w-[30px] h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]"></div>
            </div>
            <label className="relative left-5 text-[20px] font-[200] opacity-70">
              2
            </label>
          </div>
          <div className="relative flex top-[4rem]">
            <div className="w-[40px] flex justify-center items-center rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className="w-[30px] h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]"></div>
            </div>
            <label className="relative left-5 text-[20px] font-[200] opacity-70">
              3
            </label>
          </div>
          <div className="relative flex top-[6rem]">
            <div className="w-[40px] flex justify-center items-center rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className="w-[30px] h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]"></div>
            </div>
            <label className="relative left-5 text-[20px] tracking-[10px] font-[200] opacity-70">
              5+ <sub className="tracking-[3px]">or more</sub>
            </label>
          </div>
        </div>
      </div>
      <label className="relative top-[58rem] left-[-5.7rem] text-white text-[24px] font-[400]">
        Your opinion is very important to us!{" "}
      </label>
      <textarea
        placeholder="If you have something to say, we are listening...!"
        className="relative opacity-70  top-[60rem] left-[-3rem] rounded-[10px] font-[200] text-white text-[20px] w-[468px] h-[145px] outline-none  bg-transparent border-[1px] border-[#7B48ED]"
      ></textarea>
      <button
        type="submit"
        className="relative bg-gradient-to-r from-[#FFFFFF00]/10 to-[#523F83]/10 top-[64rem] left-[-3rem] w-[468px] h-[56px] text-[16px] font-[600] border-[1px] rounded-[16px] border-[#a98be4] "
      >
        Send
      </button>
    </form>
  );
};

export default MintForm;
