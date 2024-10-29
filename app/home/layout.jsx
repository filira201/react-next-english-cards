import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="border border-gray-500">
      <div className="flex flex-col p-2 gap-2 items-start">
        <Link className="px-2 py-1 bg-blue-500 rounded-lg" href="/home">
          Домой
        </Link>
        <Link className="px-2 py-1 bg-blue-500 rounded-lg" href="/home/cards">
          Карточки
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
