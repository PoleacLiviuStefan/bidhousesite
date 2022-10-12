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
      <div className="relative   flex align-center justify-center    gap-[260px] w-full h-[40px]">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          delay={200}
        >
          <div className="relative ml-[5rem] w-[181px] cursor-pointer h-[41px] left-[100px] top-[30px] bg-[url('/public/logo.svg')] bg-cover" />
        </Link>
        <div className="relative mr-[15rem] flex justify-center align-end  gap-[20px] font-[400] text-[16px] text-white top-[30px] w-[66%] h-full">
          <button className="relative  rounded-[20px] bg-slate-500   w-[84px] h-full left-0 top-0">
            Home
          </button>
          <button className="relative w-[46px] h-full left-0 top-0 ">
            About
          </button>
          <button className="relative w-[72px] h-full left-0 top-0 ">
            Roadmap
          </button>

          <button className="relative w-[89px] h-full left-0 top-0 ">
            Apartaments
          </button>
          <button className="relative w-[62px] h-full left-0 top-0 ">
            Benefits
          </button>
          <button className="relative w-[103px] h-full left-0 top-0 ">
            Release Soon
          </button>
          <button className="relative w-[42px] h-full left-0 top-0 ">
            Team
          </button>
          <button className="relative w-[47px] h-full left-0 top-0 ">
            Forms
          </button>
          <button className="relative w-[44px] h-full left-0 top-0 ">
            Rarity
          </button>
          <button className="relative w-[31px] h-full left-0 top-0 ">
            FAQ
          </button>
          <button className="relative w-[46px] h-full left-0 top-0 ">
            Social
          </button>
          <button className="relative w-[85px] h-full left-0 top-0 ">
            Supporters
          </button>
          <button className="relative w-[62px] h-full left-0 top-0 ">
            Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
