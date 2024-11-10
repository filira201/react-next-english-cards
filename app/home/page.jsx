import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  return (
    <main className="text-[#050505]">
      <p className="mb-6 text-2xl font-semibold text-[#1a1a1a] text-center">
        Рады видеть вас, {session?.user?.name}
      </p>
      <div></div>
    </main>
  );
}
