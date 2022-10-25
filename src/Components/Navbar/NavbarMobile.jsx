import { useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const NavbarMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuHandler = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="fixed z-50  w-[23rem] flex justify-start">
      <div
        onClick={menuHandler}
        className="absolute left-4 flex top-6 flex-col"
      >
        <div
          className={`w-[1.5rem] ${
            openMenu && "rotate-[135deg]"
          } h-[4px] border-[1px] z-30 border-black bg-white`}
        />
        <div
          className={`relative ${
            openMenu ? "rotate-45 top-[-3.5px]" : "top-[5px]"
          }  w-[1.5rem] border-[1px]  z-30 border-black h-[4px] bg-white`}
        />
        <div
          className={`${
            openMenu && "hidden"
          } relative top-[10px] w-[1.5rem] border-[1px] z-30 border-black h-[4px] bg-white`}
        />
        <div className={` absolute left-[-1rem] ${!openMenu ? "hidden" : ""} top-[-1.5rem]  w-[20rem] h-screen bg-black`}>
          <ul className="text-white">
            <li> <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          delay={200}
        >

          <div onClick={menuHandler} className="relative top-4 w-[140px] h-[32px] cursor-pointer left-[100px] xl:top-[35px] 2xl:top-[30px] bg-[url('/public/logo.svg')] bg-cover" />

        </Link></li>
        <li>
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          delay={200}
        ><button onClick={menuHandler} className="relative w-full text-center h-full left-4 top-[3rem] ">
            About
          </button>
          </Link>
        </li>
        <li>   <Link
          activeClass="active"
          to="Roadmap"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        ><button onClick={menuHandler} className="relative w-full text-center h-full left-4 top-[4.5rem] ">
            Roadmap
          </button>
          </Link></li>
          <li>
          <Link
          activeClass="active"
          to="ApartmentsBucharest"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className="relative w-full text-center h-full left-4 top-[6rem] ">
            Apartaments
          </button>
          </Link>
          </li>
          <li>
          <Link
          activeClass="active"
          to="ReleaseSoon"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className="relative w-full text-center h-full left-4 top-[7.5rem]">
            Release Soon
          </button>
          </Link>
          </li>
          <li>
          <Link
          activeClass="active"
          to="Benefits"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className="relative w-full text-center h-full left-4 top-[9rem] ">
            Benefits
          </button>
          </Link>
          </li>
          <li><Link
          activeClass="active"
          to="Rarity"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className="relative w-full text-center h-full left-4 top-[10.5rem] ">
            Rarity
          </button>
          </Link></li>
          <li>
          <Link
          activeClass="active"
          to="Team"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className="relative w-full text-center text-left h-full left-4 top-[12rem] ">
            Team
          </button>
          </Link>
          </li>
          <li>
          <Link
          activeClass="active"
          to="Forms"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className="relative w-full text-center text-left h-full left-4 top-[13.5rem] ">
            Forms
          </button>
          </Link>
          </li>
          <li>
          <Link
          activeClass="active"
          to="Supporters"
          spy={true}
          smooth={true}
          offset={-50}
          delay={200}
        >
          
      
          <button onClick={menuHandler} className="relative w-full text-center text-left h-full left-4 top-[15rem] ">
            Supporters
          </button>
          </Link>
          </li>
          <li>
          <Link
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={-100}
          delay={200}
        >
          <button onClick={menuHandler} className="relative w-full text-center text-left h-full left-4 top-[16.5rem] ">
            FAQ
          </button>
          </Link>
          </li>
          <li>
           
          <Link
          activeClass="active"
          to="Social"
          spy={true}
          smooth={true}
          offset={-250}
          delay={200}>
          <button onClick={menuHandler} className="relative w-full text-center h-full left-4 top-[18rem] ">
            Social
          </button>
          </Link>
          </li>
          </ul>
          
      </div>
      
      </div>
    </div>
  );
};

export default NavbarMobile;
