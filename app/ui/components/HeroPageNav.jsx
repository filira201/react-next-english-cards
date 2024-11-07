"use client";

import Link from "next/link";

const HeroPageNav = ({ isMenuOpen }) => {
  return (
    <nav
      className={`${
        isMenuOpen ? "flex" : "hidden"
      } bg-white absolute left-0 right-0 top-full shadow-md p-4 flex-col items-center gap-4
        lg:flex lg:flex-row lg:static lg:bg-transparent lg:p-0 lg:w-auto lg:shadow-none`}
    >
      <Link
        href="/login"
        className="rounded-md py-1 px-3 transition-colors active:bg-gray-100 lg:hover:bg-gray-100"
      >
        <p className="text-base">Войти</p>
      </Link>
      <Link
        href="/register"
        className="flex items-center gap-2 rounded-md bg-[#121212] text-white font-medium py-1 px-3 shadow-xl transition-colors active:bg-[#303035] lg:hover:bg-[#303035]"
      >
        <p className="text-base">Регистрация</p>
      </Link>
    </nav>
  );
};

export default HeroPageNav;
