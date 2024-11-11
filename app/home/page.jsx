import { auth } from "@/auth";
import InfoCards from "../ui/components/home/InfoCards";
import LatestCards from "../ui/components/home/LatestCards";
import { Suspense } from "react";
import { InfoCardsSkeleton } from "../ui/components/Skeletons";

export default async function Page() {
  const session = await auth();

  return (
    <main
      style={{ padding: "0 round(up, 7.22223%, .2rem)" }}
      className="text-[#050505]"
    >
      <p className="mb-8 text-3xl font-semibold text-[#1a1a1a] text-center">
        Рады видеть вас, {session?.user?.name}
      </p>
      <div className="bg-[#ffffffe6] shadow-custom w-full rounded-xl flex min-h-96 h-auto flex-col lg:flex-row">
        <div className="py-9 px-6 flex gap-4 flex-col grow border-[#e3e2e080] border-b lg:border-r lg:max-w-[500px]">
          <Suspense fallback={<InfoCardsSkeleton />}>
            <InfoCards />
          </Suspense>
        </div>
        <div className="py-9 px-6 grow-[4]">
          <LatestCards />
        </div>
      </div>
    </main>
  );
}
