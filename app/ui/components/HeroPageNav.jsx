"use client";

import clsx from "clsx";
import Link from "next/link";

const HeroPageNav = ({ isMenuOpen }) => {
  return (
    <nav
      className={clsx(
        "bg-white absolute left-0 right-0 top-full shadow-md p-4 flex-col items-center gap-4 lg:flex lg:flex-row lg:static lg:bg-transparent lg:p-0 lg:w-auto lg:shadow-none",
        {
          flex: isMenuOpen,
          hidden: !isMenuOpen,
        }
      )}
    >
      <Link
        href="/login"
        className="rounded-md py-1 px-3 transition-colors [@media(hover:hover){&:hover}]:bg-gray-100 [@media(hover:none){&:active}]:bg-gray-100"
      >
        <p className="text-base">Войти</p>
      </Link>
      <Link
        href="/register"
        className="flex items-center gap-2 rounded-md bg-[#121212] text-white font-medium py-1 px-3 shadow-xl transition-colors [@media(hover:hover){&:hover}]:bg-[#303035] [@media(hover:none){&:active}]:bg-[#303035]"
      >
        <p className="text-base">Регистрация</p>
      </Link>
    </nav>
  );
};

export default HeroPageNav;
