import CreateFrom from "@/app/ui/components/cards/CreateForm";
import { auth } from "@/auth";
import { fetchUserIdByEmail } from "@/app/lib/data";

export default async function Page() {
  const session = await auth();

  const userIdObject = await fetchUserIdByEmail(session?.user?.email);

  return (
    <main className="text-[#050505]">
      <h1 className="text-2xl font-semibold text-[#1a1a1a] mb-6">
        Создание карточки
      </h1>
      <CreateFrom userId={userIdObject.id} />
    </main>
  );
}
