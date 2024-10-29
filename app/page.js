import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-3xl mb-2">Это главная страница</p>
      <Link className="px-2 py-1 bg-blue-500 rounded-lg" href="/login">
        Войти
      </Link>
    </main>
  );
}
