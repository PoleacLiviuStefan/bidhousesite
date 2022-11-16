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
import Fade from 'react-reveal/Fade'
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs'
const ApartamentsBucharest = () => {
  const [showImages,setShowImages] = useState(0);
  const [zoom,setZoom]=useState(true);
  const [slideImage,setSlideImage] = useState(1);
  const [imgWidth,setImgWidth]=useState("w-[500px]");
  const [imgHeight,setImgHeight]=useState("h-[375px]");
  const handleImages=()=>{
    setShowImages(prev=>!prev);
    setSlideImage(1);
  }
  const handleSlide= (index)=>{
      if(index>=0 && index<=2)
      {     
      
        setSlideImage(index);
  
       }
  
        console.log("slideimage:",slideImage);
        
  }
  const zoomin= ()=>{
    console.log(zoom)
    if(zoom)
    {setImgWidth("xl:w-[800px]");
    setImgHeight("xl:h-[600px]");
    setZoom(false);
  }
    else
    {
     setImgWidth("xl:w-[400px]");
    setImgHeight("xl:h-[300px]");
    setZoom(true);
    }
  }
  return (
    <div name="ApartmentsBucharest" className="relative  flex flex-col items-center w-full xl:left-5 2xl:left-0 h-[115rem] bg-black">
   
  <div className={`absolute ${showImages==0 && "hidden"} top-[-30rem] xl:top-[-8rem] w-[18rem] xl:mr-[2.2rem] xl:w-[67rem] 2xl:w-[75rem] h-full flex justify-center items-center `}>
              <div  className={`relative hidden xl:block z-40 mr-6 ${slideImage==1 && "bg-[url('/public/2ap1.webp')]"  } ${slideImage==2 && "bg-[url('/public/2ap2.webp')]"  } ${slideImage==0 && "bg-transparent "} bg-cover w-[800px] h-[100px] xl:w-[400px] xl:h-[300px] rounded-[20px] `}>
                
                <div className={`bg-black ${slideImage==0 && 'hidden'}  bg-opacity-60 w-full h-full `}/>
                </div>
              <div onClick={zoomin}  className={`relative z-40 ${slideImage==2 && "bg-[url('/public/2ap3.webp')]"} ${slideImage==1 && "bg-[url('/public/2ap2.webp')]"} ${slideImage==0 && "bg-[url('/public/2ap1.webp')]"} w-[320px] h-[350px] ${imgWidth} ${imgHeight}  bg-cover    rounded-[20px]`}>
                    
              
                </div>
              <div  className={`relative hidden xl:block ${slideImage==0 && "bg-[url('/public/2ap2.webp')]"} ${slideImage==2 && "bg-transparent" } ${slideImage==1 && "bg-[url('/public/2ap3.webp')]" } z-40 ml-6  bg-cover w-[800px] h-[100px] xl:w-[400px] xl:h-[300px] rounded-[20px]`}>
                    
              <div className={`bg-black ${slideImage==2 && 'hidden'}  bg-opacity-60 w-full h-full `}/>
                </div>
                
        <div onClick={()=>handleSlide(slideImage-1)} className={`absolute ${slideImage==0 && "hidden"} left-[-3rem] xl:left-[-7rem] z-40 text-slate-400 text-[3rem] xl:text-[6rem] hover:text-white`}><BsChevronLeft /></div>
        <div  onClick={()=>handleSlide(slideImage+1)} className={`absolute ${slideImage==2 && "hidden"} right-[-3rem] xl:right-[-7rem] text-slate-400  z-40 text-[3rem] text-white xl:text-[6rem] hover:text-white`}><BsChevronRight /></div>
      
                </div>
            <div onClick={handleImages} className={`absolute cursor-pointer  z-30 ${showImages==0 && 'hidden'} left-0 top-0 w-full h-[200rem] bg-black opacity-80 `}/>
      <div className="flex ml-2 xl:ml-0 flex-col items-start w-[23rem] xl:w-[78rem]">
     <Fade top>
        <h1  name="showing"  className="relative z-20  font-[600] text-[30px]  leading-[40px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white  bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#17DD8A] ">
          APARTMENTS{" "}
          <br />
          <span className="text-transparent font-300">
           BUCHAREST - ROMANIA
          </span>
        </h1>
        </Fade>
        <div className="relative top-10 w-[8rem] xl:w-[55rem] grid grid-cols-3">
          <div className="absolute left-[-15rem] top-[-60rem] xl:top-[3rem] opacity-80 bg-cover w-[1920px] h-[1650px] bg-[url('/public/apartmentsglow.png')]" />
          <Fade bottom delay={300}>
          <div className="bg-cover rounded-[20px] flex justify-center items-center w-[70px] h-[69px] xl:w-[265px] xl:h-[259px] bg-[url('/public/1ap.png')]">
            <div className="w-full h-full rounded-[20px] bg-[#2F2175CC] opacity-60" />
            <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[40px] h-[40px] xl:w-[100px] xl:h-[100px]" />
          </div>
          
          <Link
          
          activeClass="active"
          to="showing"
          spy={true}
          smooth={true}
          offset={200}
          delay={0}
        >
          
          <div onClick={handleImages} className="relative flex justify-center items-center cursor-pointer left-[2.3rem] xl:left-0 bg-cover xl:w-[339px]  xl:h-[538px]  w-[93px] h-[140px] rounded-[8px] bg-[url('/public/2ap.webp')]" />
          
          </Link>
          <div className="relative left-[5.8rem] xl:left-[4.65rem] flex flex-col w-[700px]">
            <div className="flex">
              <div className="relative flex rounded-[20px] justify-center items-center bg-cover w-[70px] h-[69px] xl:w-[267px] xl:h-[259px] bg-[url('/public/3ap.webp')]">
                <div className="w-full h-full rounded-[20px] bg-[#2F2175CC] opacity-60" />
                <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[40px] h-[40px] xl:w-[100px] xl:h-[100px]" />
              </div>
              <div className="relative flex justify-center rounded-[20px] items-center left-1 xl:left-5 bg-cover w-[70px] h-[69px] xl:w-[265px] xl:h-[259px] bg-[url('/public/8ap.webp')]">
                <div className="w-full h-full rounded-[20px] bg-[#2F2175CC] opacity-60" />
                <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[40px] h-[40px] xl:w-[100px] xl:h-[100px]" />
              </div>
            </div>
            <div className="relative flex justify-center rounded-[20px] items-center top-[.4rem] xl:top-[1.7rem]  bg-cover w-[140px] h-[65px] xl:w-[554px] xl:h-[259px] bg-[url('/public/4ap.webp')]">
            <div className=" w-full h-full bg-[#2F2175CC] rounded-[20px] opacity-60" />
            <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[40px] h-[40px] xl:w-[100px] xl:h-[100px]" />
            </div>
          </div>
          <div className="relative flex justify-center items-center left-0 xl:top-[-15.85rem] top-[-3.85rem] w-[67px] rounded-[8px] h-[165px] bg-cover xl:w-[265px] xl:h-[677px] bg-[url('/public/5ap.webp')]">
            <div className="w-full h-full bg-[#2F2175CC] opacity-60" />
            <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[40px] h-[40px] xl:w-[100px] xl:h-[100px]" />
          </div>
          <div className="relative rounded-[20px] flex justify-center items-center left-[2.2rem] xl:left-0 top-[0.4rem]   xl:top-8 bg-cover w-[170px] h-[95px] xl:w-[626px] xl:h-[398px] bg-[url('/public/6ap.webp')]">
            <div className="w-full h-full rounded-[20px] bg-[#2F2175CC] opacity-60" />
            <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[40px] h-[40px] xl:w-[100px] xl:h-[100px]" />
          </div>
          <div className="relative flex justify-center rounded-[20px] items-center left-[10.7rem]  xl:left-[22.55rem]  top-[.4rem] xl:top-8 bg-cover w-[62px] h-[95px] xl:w-[265px] xl:h-[398px] bg-[url('/public/7ap.webp')]">
            <div className="w-full h-full rounded-[20px] bg-[#2F2175CC] opacity-60" />
            <div className="absolute bg-[url('/public/lock.svg')] bg-cover w-[40px] h-[40px] xl:w-[100px] xl:h-[100px]" />
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ApartamentsBucharest;