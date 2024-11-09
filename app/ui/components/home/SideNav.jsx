import QcardsLogo from "../QcardsLogo";
import { signOut } from "@/auth";
import NavLinks from "./NavLinks";

const SideNav = () => {
  return (
    <div className="flex h-full flex-col px-2 py-4">
      <div className="mb-2 flex h-40 items-end justify-start rounded-md bg-blue-600 p-4">
        <div className="w-40 text-white">
          <QcardsLogo />
        </div>
      </div>
      <div className="flex grow flex-col justify-between space-x-0 space-y-2">
        <NavLinks />
        <div className="block h-auto w-full grow rounded-md bg-gray-50"></div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="bg-green-500">Sign Out</button>
        </form>
      </div>
    </div>
  );
};

export default SideNav;
