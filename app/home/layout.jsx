import Link from "next/link";
import { signOut } from "@/auth";

export default function Layout({ children }) {
  return (
    <div className="border border-gray-500">
      <div className="flex flex-col p-2 gap-2 items-start">
        <Link
          className="px-2 py-1 bg-blue-500 rounded-lg"
          href="/home"
          scroll={false}
        >
          Домой
        </Link>
        <Link className="px-2 py-1 bg-blue-500 rounded-lg" href="/home/cards">
          Карточки
        </Link>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            Sign Out
          </button>
        </form>
      </div>
      <div>{children}</div>
    </div>
  );
}
