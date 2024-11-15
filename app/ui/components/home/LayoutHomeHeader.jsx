"use client";

import { useState } from "react";
import SideNav from "./SideNav";

const LayoutHomeHeader = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <header
        className="flex-none shadow-[inset_-1px_0px_0px_0px_rgba(0,0,0,0.03)] w-full sticky top-0 py-[15px] px-4 z-50 bg-white
        after:content-[''] after:absolute after:bottom-0 after:inset-x-4 after:h-[1px] after:bg-[#0000001a]
        lg:px-0 lg:py-0 lg:z-0 lg:static lg:w-64 lg:bg-[#f7f7f5] lg:after:hidden"
      >
        <SideNav isMenuOpen={isSideNavOpen} toggleMenu={toggleNav} />
      </header>
    </>
  );
};
export default LayoutHomeHeader;
