import React,{useState} from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const ApartamentsBucharest = () => {
  const [showImages,setShowImages] = useState(0);
  const [slideImage,setSlideImage] = useState(1);
  const [imgWidth,setImgWidth]=useState("w-[500px]");
  const [imgHeight,setImgHeight]=useState("h-[375px]");
  const handleImages=()=>{
    setShowImages(prev=>!prev);
    setSlideImage(1);
  }
  const handleSlide= (index,tile)=>{
      if(index>=0 && index<=2)
      {     
        if(tile==2 ||tile==0 )  
      setSlideImage(index);
       if(!(slideImage==0 &&index==1))
        if(!(slideImage==2 &&index==1 ))
        setSlideImage(index);
  
       }
       if(tile==1 && imgWidth==="w-[500px]" && imgHeight==="h-[375px]")
       {setImgWidth("w-[1000px]");
       setImgHeight("h-[750px]");}
       else
       {
        setImgWidth("w-[500px]");
       setImgHeight("h-[375px]");
       }
        console.log("slideimage:",slideImage);
        console.log("tile:",tile);
  }
  return (
    <div name="ApartmentsBucharest" className="relative overflow-hidden flex flex-col items-center w-full h-[110rem] bg-black">
  <div name="showing" className={`absolute ${showImages==0 && "hidden"}   w-[78rem] h-full flex justify-center items-center `}>
              <div onClick={()=>handleSlide(slideImage-1,0)} className={`relative z-40 mr-6 ${slideImage==1 && "bg-[url('/public/2ap1.png')]"  } ${slideImage==2 && "bg-[url('/public/2ap2.png')]"  } ${slideImage==0 && "bg-transparent "} bg-cover w-[400px] h-[300px] rounded-[20px] `}>
                
                <div className={`bg-black ${slideImage==0 && 'hidden'}  bg-opacity-60 w-full h-full `}/>
                </div>
              <div onClick={()=>handleSlide(1,1)} className={`relative z-40 ${slideImage==2 && "bg-[url('/public/2ap3.png')]"} ${slideImage==1 && "bg-[url('/public/2ap2.png')]"} ${slideImage==0 && "bg-[url('/public/2ap1.png')]"}  bg-cover ${imgWidth} ${imgHeight}   rounded-[20px]`}>
                    
              
                </div>
              <div onClick={()=>handleSlide(slideImage+1,2)} className={`relative ${slideImage==0 && "bg-[url('/public/2ap2.png')]"} ${slideImage==2 && "bg-transparent" } ${slideImage==1 && "bg-[url('/public/2ap3.png')]" } z-40 ml-6  bg-cover w-[400px] h-[300px] rounded-[20px]`}>
                    
              <div className={`bg-black ${slideImage==2 && 'hidden'}  bg-opacity-60 w-full h-full `}/>
                </div></div>
            <div onClick={handleImages} className={`absolute cursor-pointer  z-30 ${showImages==0 && 'hidden'} left-0 top-0 w-full h-[200rem] bg-black opacity-80 `}/>
      <div className="flex flex-col items-start w-[78rem]">
     
        <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          APARTMENTS{" "}
          <span className="text-transparent">
            BUCHAREST - <br /> ROMANIA
          </span>
        </h1>
        <div className="relative top-10 w-[55rem] grid grid-cols-3">
          <div className="absolute left-[-15rem] top-[3rem] opacity-80 bg-cover w-[1920px] h-[1650px] bg-[url('/public/apartmentsglow.png')]" />
          <div className="bg-cover flex justify-center items-center w-[265px] h-[259px] bg-[url('/public/1ap.png')]">
            <div className="w-full h-full bg-[#2F2175CC] opacity-60" />
            <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[100px] h-[100px]" />
          </div>
          <Link
          activeClass="active"
          to="ApartmentsBucharest"
          spy={true}
          smooth={true}
          offset={450}
          delay={0}
        >
          <div onClick={handleImages} className="relative flex justify-center items-center left-0 bg-cover  w-[339px] h-[538px] bg-[url('/public/2ap.png')]" />
          
          </Link>
          <div className="relative left-[4.65rem] flex flex-col w-[700px]">
            <div className="flex">
              <div className="relative flex justify-center items-center bg-cover w-[267px] h-[259px] bg-[url('/public/3ap.png')]">
                <div className="w-full h-full bg-[#2F2175CC] opacity-60" />
                <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[100px] h-[100px]" />
              </div>
              <div className="relative flex justify-center items-center left-5 bg-cover w-[265px] h-[259px] bg-[url('/public/8ap.png')]">
                <div className="w-full h-full bg-[#2F2175CC] opacity-60" />
                <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[100px] h-[100px]" />
              </div>
            </div>
            <div className="relative flex justify-center items-center top-[1.7rem]  bg-cover w-[554px] h-[259px] bg-[url('/public/4ap.png')]">
            <div className=" w-full h-full bg-[#2F2175CC] opacity-60" />
            <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[100px] h-[100px]" />
            </div>
          </div>
          <div className="relative flex justify-center items-center left-0  top-[-15.85rem] bg-cover w-[265px] h-[677px] bg-[url('/public/5ap.png')]">
            <div className="w-full h-full bg-[#2F2175CC] opacity-60" />
            <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[100px] h-[100px]" />
          </div>
          <div className="relative flex justify-center items-center left-0  top-8 bg-cover w-[626px] h-[398px] bg-[url('/public/6ap.png')]">
            <div className="w-full h-full bg-[#2F2175CC] opacity-60" />
            <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[100px] h-[100px]" />
          </div>
          <div className="relative flex justify-center items-center left-[22.55rem]  top-8 bg-cover w-[265px] h-[398px] bg-[url('/public/7ap.png')]">
            <div className="w-full h-full bg-[#2F2175CC] opacity-60" />
            <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[100px] h-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartamentsBucharest;