import React,{useState} from 'react'

const RecruitmentForm = ({showRecruitmentForm}) => {
  const [roleOption,setRoleOption]=useState(0)
  const selectOption = (index)=>{
        setRoleOption(index);
       
  }
 
  return (
    <form
    className={`absolute text-white flex flex-col items-center w-full top-[9rem] ${
      showRecruitmentForm
        ? "z-30 h-[130rem] animate-[appear_.5s_ease-in-out_forwards]"
        : "z-20 animate-[disappear_.5s_ease-in-out_forwards]"
    } w-full `}
  >
    <label className="relative xl:left-[-12rem] text-white text-[20px] xl:text-[24px] font-[400]">
      Fill the form
    </label>

    <input
      className="relative outline-none px-8 top-8 xl:left-[-1.3rem] text-[16px] xl:text-[18px]  rounded-[10px]  w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]"
      placeholder="Enter your Twitter account *"
      required
    ></input>
    <input
      className="relative outline-none px-8 text-[16px] xl:text-[18px] xl:left-[-1.3rem] top-16 rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]"
      placeholder="Enter your Discord account *"
      required
    ></input>

<input
        className="relative outline-none px-8 xl:left-[-1.3rem] text-[16px] xl:text-[18px] top-[6rem] rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80  border-[1px] border-[#7B48ED]"
        placeholder="Enter your Email *"
        required
      ></input>
    <div className="relative top-[13rem] left-[-5rem] xl:left-[-11.7rem] flex ">
      <div onClick={()=>selectOption(0)} className="w-[40px] flex cursor-pointer justify-center items-center rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
        <div className={`w-[30px] ${roleOption!=0 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
      </div>
      <label className="relative left-6 top-2 text-[16px] xl:text-[18px] font-[700]">
       Developer
      </label>
      <p className="absolute  top-12 w-full font-[400] text-[14px] w-[493px]">
      More Devs., More Knowledege.
       
      </p>
    </div>
    <div className="relative top-[18rem] left-[-3.4rem] xl:left-[-10rem] flex ">
      <div onClick={()=>selectOption(1)} className="w-[40px] cursor-pointer flex justify-center items-center rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
        <div className={`w-[30px] ${roleOption!=1 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
      </div>
      <label className="relative left-6 top-2 text-[16px] xl:text-[18px] font-[700]">
      Twitter Specialist
      </label>
      <p className="absolute  top-12 w-full font-[400] text-[14px] w-[296px]">
      A good community have a Twitter specialist, 
a great community have more than one.
      
      </p>
    </div>
    <div className="relative top-[24.5rem] left-[-2.6rem] xl:left-[-9rem] flex ">
      <div onClick={()=>selectOption(2)} className="w-[40px] cursor-pointer flex justify-center items-center rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
        <div className={`w-[30px] ${roleOption!=2 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
      </div>
      <label className="relative left-6 top-2 text-[16px] xl:text-[18px] font-[700]">
       Marketing Specialist
      </label>
      <p className="absolute  top-12 w-full font-[400] text-[14px] w-[300px] xl:w-[468px]">
        Advertising  campaigns, Pricing strategies and Targeting the demographic data of their target audience is the best way for succes.
       
      </p>
    </div>

    <div className="relative top-[32.2rem] xl:top-[31rem] left-[-3rem] xl:left-[-9.3rem] flex ">
      <div onClick={()=>selectOption(3)} className="w-[40px] cursor-pointer flex justify-center items-center rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
        <div className={`w-[30px] ${roleOption!=3 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
      </div>
      <label className="relative left-6 top-2 text-[16px] xl:text-[18px] font-[700]">
      Discord Moderator
      </label>
      <p className="absolute  top-12 w-full font-[400] text-[14px] w-[468px]">
      We always need an extra hand to serve the community.
       
      </p>
    </div>
    <div className="relative top-[36rem] left-[-5rem] xl:left-[-11.5rem] flex ">
      <div onClick={()=>selectOption(4)} className="w-[40px] flex justify-center items-center cursor-pointer rounded-[10px] h-[40px] border-[1px] border-[#7B48ED] rounded-[10px]">
        <div className={`w-[30px] ${roleOption!=4 && "hidden" } h-[30px] bg-gradient-to-l rounded-[6px] from-[#7B48ED] to-[#9b8dff]`}></div>
      </div>
      <label className="relative left-6 top-2 text-[16px] xl:text-[18px] font-[700]">
      NFT Artist
      </label>
      <p className="absolute  top-12 w-full font-[400] text-[14px] w-[468px]">
     Creativity it's an afinite skills.
       
      </p>
    </div>
    <h1 className='relative xl:left-[2.5rem] top-[45rem] text-transparent bg-clip-text bg-gradient-to-t from-[#9945FF] to-[#2F2175] w-[350px] xl:w-[586px] font-[700] text-[28px] xl:text-[32px] leading-[38.73px]'>
    IF YOU ARE INTERESTED OR KNOW SOMEONE WHO MIGHT BE, <br />
PLEASE FILL OUT THIS FORM BELOW
    </h1>
    <label className="relative top-[50rem] xl:left-[-12.7rem] text-white text-[20px] xl:text-[24px] font-[400]">
      Why us?
    </label>
    <textarea
      placeholder="Say a few words, why did you choose us?"
      className="relative opacity-70 px-10 py-4  top-[52rem] xl:left-[-1rem] rounded-[10px] font-[200] text-white text-[18px] xl:text-[20px] w-[350px] xl:w-[468px] h-[145px] outline-none  bg-transparent border-[1px] border-[#7B48ED]"
    ></textarea>
     <label className="relative top-[55rem] xl:left-[-8.1rem] text-white text-[20px] xl:text-[24px] font-[400]">
      Something about you
    </label>
    <textarea
      placeholder="If you have something to say, we are listening...!"
      className="relative opacity-70 px-10 py-4   top-[57rem] xl:left-[-1rem] rounded-[10px] font-[200] text-white text-[18px] xl:text-[20px] w-[350px] xl:w-[468px] h-[145px] outline-none  bg-transparent border-[1px] border-[#7B48ED]"
    ></textarea>
    <button
      type="submit"
      className="relative bg-gradient-to-r from-[#FFFFFF00]/10 to-[#523F83]/10 top-[60rem] xl:top-[64rem] xl:left-[-1.3rem] w-[350px] xl:w-[468px] h-[56px] text-[16px] font-[600] border-[1px] rounded-[16px] border-[#a98be4] "
    >
      Send
    </button>
  </form>
  )
}

export default RecruitmentForm