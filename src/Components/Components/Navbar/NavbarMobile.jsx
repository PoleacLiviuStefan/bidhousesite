import { useState } from "react";

const NavbarMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuHandler = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="fixed z-50  w-full flex justify-start">
      <div
        onClick={menuHandler}
        className="absolute left-4 flex top-6 flex-col"
      >
        <div
          className={`w-[1.5rem] ${
            openMenu && "rotate-[135deg]"
          } h-[4px] border-[1px] border-black bg-white`}
        />
        <div
          className={`relative ${
            openMenu ? "rotate-45 top-[-3px]" : "top-[5px]"
          }  w-[1.5rem] border-[1px] border-black h-[4px] bg-white`}
        />
        <div
          className={`${
            openMenu && "hidden"
          } relative top-[10px] w-[1.5rem] border-[1px] border-black h-[4px] bg-white`}
        />
      </div>
    </div>
  );
};

export default NavbarMobile;
