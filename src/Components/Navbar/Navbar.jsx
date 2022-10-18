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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="relative   flex align-center justify-center    gap-[200px] w-full h-[40px]">
=======
=======
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
      <div className="relative   flex align-center justify-center    gap-[260px] w-full h-[40px]">
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          delay={200}
        >
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="relative ml-[12rem] w-[181px] cursor-pointer h-[41px] left-[100px] top-[30px] bg-[url('/public/logo.svg')] bg-cover" />
=======
          <div className="relative ml-[5rem] w-[181px] cursor-pointer h-[41px] left-[100px] top-[30px] bg-[url('/public/logo.svg')] bg-cover" />
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
=======
          <div className="relative ml-[5rem] w-[181px] cursor-pointer h-[41px] left-[100px] top-[30px] bg-[url('/public/logo.svg')] bg-cover" />
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
        </Link>
        <div className="relative mr-[18rem] flex justify-center align-end  gap-[20px] font-[400] text-[16px] text-white top-[30px] w-[78%] h-full">
         
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
          to="ApartamentsBucharest"
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
          to="FAQ"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button className="relative w-[31px] h-full left-0 top-0 ">
            FAQ
          </button>
          </Link>
          <button className="relative w-[46px] h-full left-0 top-0 ">
            Social
          </button>
          <button className="relative w-[85px] h-full left-0 top-0 ">
            Supporters
          </button>
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
