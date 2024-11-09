import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  return (
    <main className="border border-blue-800">
      <p>Домашняя страница</p>
      <h1>Имя: {session?.user?.name}</h1>
    </main>
  );
}
