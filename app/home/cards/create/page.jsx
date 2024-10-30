import CreateFrom from "@/app/ui/components/cards/CreateForm";
import { auth } from "@/auth";
import { fetchUserIdByEmail } from "@/app/lib/data";

export default async function Page() {
  const session = await auth();

  const userIdObject = await fetchUserIdByEmail(session?.user?.email);

  return (
    <main className="p-6">
      <h1 className="text-2xl">Создание карточки</h1>
      <CreateFrom userId={userIdObject.id} />
    </main>
  );
}
