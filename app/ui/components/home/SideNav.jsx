"use client";

import NavLinks from "./NavLinks";
import QcardsLogo from "../QcardsLogo";
import { singOutOfAccount } from "@/app/lib/actions";
import HeroPageNavToggleButton from "../HeroPageNavToggleButton";
import clsx from "clsx";

const SideNav = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="flex flex-row py-0 px-4 items-center lg:items-stretch lg:px-2 lg:py-4 lg:flex-col lg:h-full">
      <div className="grow lg:grow-0 lg:mb-2 lg:flex lg:h-40 lg:items-end lg:justify-start lg:rounded-md lg:bg-white lg:shadow-custom lg:p-4">
        <div className="lg:w-40">
          <QcardsLogo />
        </div>
      </div>
      <HeroPageNavToggleButton
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <div
        className={clsx(
          "bg-white absolute left-0 right-0 top-full shadow-md p-4 flex-col items-stretch text-[#5f5e5b] grow gap-2 lg:items-stretch lg:p-0 lg:bg-transparent lg:static lg:shadow-none lg:flex lg:gap-0 lg:space-x-0 lg:space-y-2 lg:flex-col lg:justify-between",
          {
            flex: isMenuOpen,
            hidden: !isMenuOpen,
          }
        )}
      >
        <NavLinks />
        <div className="hidden lg:block h-auto w-full grow rounded-md shadow-custom bg-white"></div>
        <form action={singOutOfAccount}>
          <button
            className="flex h-[48px] w-full items-center justify-center gap-2 shadow-custom rounded-md bg-white p-2 px-3 text-sm font-medium transition-colors text-[#050505] [@media(hover:hover){&:hover}]:bg-[#00000008] [@media(hover:none){&:active}]:bg-[#00000008] lg:justify-start"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
            <p>Sign Out</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SideNav;
