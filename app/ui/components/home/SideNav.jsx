import QcardsLogo from "../QcardsLogo";
import { signOut } from "@/auth";
import NavLinks from "./NavLinks";

const SideNav = () => {
  return (
    <div className="flex h-full flex-col px-2 py-4">
      <div className="mb-2 flex h-40 items-end justify-start rounded-md bg-white shadow-custom p-4">
        <div className="w-40">
          <QcardsLogo />
        </div>
      </div>
      <div className="flex text-[#5f5e5b] grow flex-col justify-between space-x-0 space-y-2">
        <NavLinks />
        <div className="block h-auto w-full grow rounded-md shadow-custom bg-white"></div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full items-center justify-start gap-2 shadow-custom rounded-md bg-white p-2 px-3 text-sm font-medium text-[#050505] hover:hover:bg-[#00000008]">
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
