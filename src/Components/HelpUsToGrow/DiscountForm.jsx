import React,{useState,useRef,useEffect} from "react";
import emailjs from '@emailjs/browser';
import NotificationCard from "../Notifications/NotificationCard";
import {AiFillCheckCircle} from 'react-icons/ai'
import { doc, setDoc,addDoc,updateDoc,collection,getDoc,snapshot,getDocs,query,where } from "firebase/firestore"; 

import { auth,db } from '../DataBase/firebase-config'

const DiscountForm = ({ showDiscountForm,afterLogin }) => {
  const [mintOption,setMintOption]=useState(0)
  const [mintingNfts,setMintingNfts]=useState(1)
  const [notification,setNotification]=useState(false)
  const [animOn,setAnimOn]=useState(false)
  const [twitter,setTwitter]=useState("")
  const [discord,setDiscord]=useState("")
  const [email,setEmail]=useState("")
  const [walletAdress,setWalletAddress]=useState("")
  const [transactionId,setTransactionId]=useState("")
const   [message,setMessage]=useState("")
  const selectOption = (index)=>{
        setMintOption(index);
  }
  const handleNfts=(index)=>{
      setMintingNfts(index);
  } 
  useEffect(()=>{
    
    
      if(localStorage.getItem("formComplete"))
            setNotification(true);
      

  },[])
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dd2l6et', 'template_x5jqfys', form.current, 'bCFO-F4oUHOZzgTNO')
      .then((result) => {
          console.log("message sent");
          if(!localStorage.getItem("formComplete"))
          setNotification(true);
          
        updateData(localStorage.getItem("userid"))  
        }, (error) => {
          console.log(error.text);
      });

      setTwitter("")
      setDiscord("")
      setEmail("")
      setWalletAddress("")
      setTransactionId("")
      setMessage("")
  };
  const updateData=(idUser)=>{
    ;(async ()=>{
     
      const docRef=doc(db,"usersinformation",localStorage.getItem("userid"))
      updateDoc(docRef,{
        wallet:walletAdress,
        formCompleted:true
      })
      localStorage.setItem("formCompleted",true)
      localStorage.setItem("walletAdress",walletAdress)
  })()
     }
  return (
    <form
    ref={form}
    onSubmit={sendEmail}
      className={`absolute  text-white flex flex-col  w-full ${afterLogin ?"top-[1.5rem] ": "top-[9rem]  items-center"} ${
        showDiscountForm
          ? "z-30 xl:h-[110rem] h-[108rem] animate-[appear_.5s_ease-in-out_forwards]"
          : "z-20 animate-[disappear_.5s_ease-in-out_forwards]"
      } w-[30rem] `}
    >
      <label className={`relative xl:left-[-8.5rem]  top-[-1rem] xl:top-0  ${afterLogin  ?"left-[5rem] top-[2rem] xl:top-0":"left-[-3rem] "} text-white text-[20px] xl:text-[24px] font-[400]`}>
        Fill the form
      </label>

      <input
        className={`relative ${afterLogin && "hidden"} outline-none xl:left-0 left-9  px-8 top-8 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`}
        name="user_twitter"
        defaultValue=""
        placeholder="Enter your Twitter account *"
        value={!twitter==="" ?twitter:localStorage.getItem("twitter")}
        onChange={(event)=>{
          setTwitter(event.target.value);
        }}
        required={!afterLogin}
      ></input>
      <input
        className={`relative ${afterLogin && "hidden"} xl:left-0 left-9  outline-none px-8 text-[16px] xl:text-[18px] top-[3rem] rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]`}
        name="user_discord"
        defaultValue=""
        placeholder="Enter your Discord account *"
        value={!discord==="" ? discord: localStorage.getItem("discord")}
        onChange={(event)=>{
          setDiscord(event.target.value);
        }}
        required={!afterLogin}
      ></input>
   <input
        className={`relative ${afterLogin && "hidden"} xl:left-0 left-9  outline-none px-8  text-[16px] xl:text-[18px] top-[4rem] rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]`}
        name="user_email"
               defaultValue=""
        placeholder="Enter your Email *"
        value={!email==="" ? email: localStorage.getItem("useremail")}
        onChange={(event)=>{
          setEmail(event.target.value);
        }}
        required
      ></input>
      <label className={`relative ${ afterLogin ?"xl:top-[1rem] left-[5rem]": "xl:top-[9rem]"} xl:left-[-8.5rem] top-[-10rem] left-[-1.5rem] text-white text-[20px] xl:text-[24px] font-[400]`}>
        Make your choice
      </label>
      <div className={`relative ${afterLogin ? "xl:top-[2.5rem] top-[1rem] left-[5rem]":" top-[4rem] xl:top-[13rem]"} left-[-1rem]  xl:left-[-7.9rem] flex `}>
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
      <div className={`relative  ${afterLogin ? "xl:top-[0rem] xl:left-[20rem] top-[13rem] left-[5rem]" : "xl:top-[23rem] top-[16rem] left-[-2.8rem] xl:left-[-10rem]"}   flex `}>
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
      <div className={`relative  ${afterLogin?"xl:top-[13rem] top-[26.3rem] left-[5rem] xl:left-[-7.8rem]":"xl:top-[33.5rem] top-[29.2rem] left-[-3.3rem] xl:left-[-10.7rem] "} flex `}>
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

      <div className={`relative flex flex-col   ${afterLogin ?"xl:top-[2rem] top-[26rem] left-[5rem] xl:left-[20rem] ":"xl:top-[36rem] top-[29rem] left-[3.8rem] xl:left-[-4.7rem] "}   `}>
        <label className="relative top-[9rem]  text-white text-[20px] xl:text-[24px] font-[400]">
          How many NFT's plan to mint?
        </label>
        <div className={`relative ${afterLogin && "flex flex-col xl:grid xl:grid-cols-2 xl:left-0 left-[5rem]"} left-[1rem] top-[11rem] w-[350px]`}>
          <div className="flex">
            <div onClick={()=>handleNfts(1)} className="w-[40px] cursor-pointer flex justify-center items-center  h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className={`w-[30px] ${mintingNfts!=1 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
            </div>
            <label className="relative left-5 text-[20px] font-[200] opacity-70">
              1
            </label>
          </div>
          <div className={`relative flex ${afterLogin ?"xl:top-0 top-[1rem]":"top-[2rem]"}`}>
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
          <div className={`relative flex ${afterLogin ?"xl:top-[2rem] top-[3rem]":"top-[6rem]"}`}>
            <div  onClick={()=>handleNfts(4)}className="w-[40px] cursor-pointer flex justify-center items-center  h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
              <div className={`w-[30px] ${mintingNfts!=4 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
            </div>
            <label className="relative left-5 text-[20px] tracking-[10px] font-[200] opacity-70">
              5+ <sub className="tracking-[3px]">or more</sub>
            </label>
          </div>
        </div>
      </div>
      <div className={` ${afterLogin ? "xl:top-[16rem] top-[43rem] left-[4rem] xl:left-[-7.8rem] flex-col xl:flex-row":"xl:top-[55rem] top-[48rem] xl:left-0 left-[2.3rem] flex-col "}    relative flex `}>
        <input
          className={`relative  outline-none px-8 text-[16px]  xl:text-[18px] xl:left-[-.2rem]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]`}
          name="user_wallet"
          placeholder="Enter your Wallet Adress *"
          value={walletAdress}
          onChange={(event)=>{
            setWalletAddress(event.target.value);
          }}
          required
        ></input>
        <input
          className={`relative  outline-none ${afterLogin ? "top-[1rem] xl:top-0 xl:ml-[11rem]":"top-6"} px-8 text-[16px] xl:text-[18px] xl:left-[-.2rem]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]`}
          name="user_signature"
          placeholder={` ${afterLogin ? "Signature Transaction ID":"Signature Transaction ID (if already deposit)"} *`}
          value={transactionId}
          onChange={(event)=>{
            setTransactionId(event.target.value);
          }}
          required
        ></input>
      </div>
      <label className={`relative ${afterLogin && "hidden"} top-[51rem] left-[2rem] xl:top-[58rem] xl:left-[-2.4rem] text-white text-[20px] xl:text-[24px] font-[400]`}>
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
        className={`relative ${afterLogin && "hidden"} opacity-70 px-10 py-4 top-[52rem] xl:left-0 left-[2.2rem] xl:top-[60rem]  rounded-[10px] font-[200] text-white text-[20px] w-[350px] xl:w-[468px] h-[145px] outline-none  bg-transparent border-[1px] border-[#7B48ED]`}
        value={message}
        onChange={(event)=>{
          setMessage(event.target.value);
        }}
      ></textarea>
      <button
        type="submit"
        value="Send"
        className={`relative bg-gradient-to-r from-[#FFFFFF00]/10 to-[#523F83]/10  ${afterLogin ?"xl:top-[17rem] top-[46rem] left-[4rem] xl:left-[1rem]":"xl:top-[67rem] top-[54rem] xl:left-0 left-[2.2rem]"}  w-[350px] xl:w-[468px] h-[56px] text-[16px] font-[600] border-[1px] rounded-[16px] border-[#a98be4] `}
      >
        Send
      </button>
      <div className={`fixed ${animOn && "animate-[notificationdisappear_.5s_linear_forwards]"} ${notification ? "animate-[notificationappear_.5s_linear_forwards]":"hidden"}  right-[10px] xl:right-[2rem] `}>
     <NotificationCard logo={<div className='text-[40px]'><AiFillCheckCircle /> </div>} message="Form Sent" messagesize=" text-[22  px] " messagebg="bg-green-300" colorbg="bg-green-300" size=" w-[340px] xl:w-[380px] h-[100px]" />
     
     </div>
    </form>
  );
};

export default DiscountForm;
