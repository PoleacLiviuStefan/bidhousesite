import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Navbar = () => {
  return (
    <div className="fixed z-50 flex justify-center gap-[20px] w-full h-[110px] left-0 top-0 bg-gradient-to-b from-black to-transparent ">
      

      <div className="relative   flex align-center justify-center  xl:gap-[160px]  2xl:gap-[200px] w-full h-[40px]">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          delay={200}
        >

          <div className="relative ml-[12rem] 2xl:w-[181px] 2xl:h-[41px]  xl:w-[140px] xl:h-[32px] cursor-pointer left-[100px] xl:top-[35px] 2xl:top-[30px] bg-[url('/public/logo.svg')] bg-cover" />

        </Link>
        <div className="relative mr-[19rem] flex justify-center align-end  gap-[20px] font-[400] xl:text-[14px] 2xl:text-[16px] text-white top-[30px] w-[82%] h-full">
         
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          delay={200}
        ><button className="relative w-[46px] h-full left-0 top-0 ">
            About
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Roadmap"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        ><button className="relative w-[72px] h-full left-0 top-0 ">
            Roadmap
          </button>
          </Link>
          <Link
          activeClass="active"
          to="ApartmentsBucharest"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[89px] h-full left-0 top-0 ">
            Apartaments
          </button>
          </Link>
          <Link
          activeClass="active"
          to="ReleaseSoon"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[103px] h-full left-0 top-0 ">
            Release Soon
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Benefits"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[62px] h-full left-0 top-0 ">
            Benefits
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Rarity"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[44px] h-full left-0 top-0 ">
            Rarity
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Team"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[42px] h-full left-0 top-0 ">
            Team
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Forms"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[47px] h-full left-0 top-0 ">
            Forms
          </button>
          </Link>
         
        
       
        
          <Link
          activeClass="active"
          to="Supporters"
          spy={true}
          smooth={true}
          offset={-50}
          delay={200}
        >
          
      
          <button className="relative w-[85px] h-full left-0 top-0 ">
            Supporters
          </button>
          </Link>
          <Link
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={0}
          delay={200}
        >
          <button className="relative w-[31px] h-full left-0 top-0 ">
            FAQ
          </button>
          </Link>
          <Link
          activeClass="active"
          to="Social"
          spy={true}
          smooth={true}
          offset={-250}
          delay={200}>
          <button className="relative w-[46px] h-full left-0 top-0 ">
            Social
          </button>
          </Link>
          <button className="relative w-[62px] h-full left-0 top-0 ">
            Booking
          </button>
          <div className="relative left-0 top-4 w-[1px] h-[1rem] bg-white"/>
          <button className="relative bg-gradient-to-r from-[#2d2348] border-[2px] border-[#523F83] rounded-[16px] w-[138px] h-[44px] left-0 top-0 ">
            Bookkeeping
          </button>
        </div>
      </div>
    </div>
 
  );
};

export default Navbar;
