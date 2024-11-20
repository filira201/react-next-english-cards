import { auth } from "@/auth";
import InfoCards from "../../ui/components/home/InfoCards";
import LatestCards from "../../ui/components/home/LatestCards";

export default async function Page() {
  const session = await auth();

  return (
    <main className="text-[#050505]">
      <h1 className="mb-8 text-3xl font-semibold text-[#1a1a1a] text-center">
        Рады видеть вас, {session?.user?.name}
      </h1>
      <div className="bg-[#ffffffe6] border w-full rounded-xl flex min-h-96 h-auto flex-col lg:flex-row">
        <InfoCards />
        <LatestCards />
      </div>
    </main>
  );
}
