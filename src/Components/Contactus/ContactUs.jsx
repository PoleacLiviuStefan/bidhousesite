import React from 'react'

const ContactUs = () => {
  return (
    <div name="Contact" className="relative flex flex-col items-center w-full h-[70rem] bg-black">
    <div className="flex flex-col items-center w-[78rem]">
  
      <h1 className="font-[600] text-[30px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-b from-[#17DD8A] to-[#0d7abf] ">
        CONTACT<span className="text-transparent"> US</span>
      </h1>
      
                  <form className='relative  xl:left-0 top-[6rem] flex flex-col text-white text-[18px]'>
                    <label className='font-[400] text-[20px] xl:text-[24px]'>Contact us directly on e-mail</label>
                    <input
        className="relative outline-none  px-8 top-8 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]"
        placeholder="Name"
        required
      ></input>
      <select  className="relative  mt-7 outline-none  px-8 top-8   rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]">
        <option className='text-black' value="default">Select Role</option>
        <option className='text-black' value="visitor">Visitor</option>
        <option className='text-black' value="member">Member</option>
      </select>
      <input
        className="relative mt-7 outline-none  px-8 top-8 text-[16px] xl:text-[18px]   rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]"
        placeholder="Contact e-mail"
        required
      ></input>
      <label className='relative mt-[4rem] font-[400] text-[20px] xl:text-[24px]'>  Your opinion is very important to us!</label>
      <textarea
        placeholder="If you have something to say, we are listening...!"
        className="relative opacity-70 px-10 py-4 mt-[2rem]  rounded-[10px] font-[200] text-white text-[16px] xl:text-[20px] w-[350px] xl:w-[468px] h-[145px] outline-none  bg-transparent border-[1px] border-[#7B48ED]"
      ></textarea>
         <button
        type="submit"
        className="relative bg-gradient-to-r from-[#FFFFFF00]/10 to-[#523F83]/10 mt-[2.5rem]  w-[350px] xl:w-[468px] h-[56px] text-[16px] font-[600] border-[1px] rounded-[16px] border-[#a98be4] "
      >
        Send
      </button>
                  </form>
      </div> </div>
  )
}

export default ContactUs