import Pagination from "@/app/ui/components/cards/Pagination";
import CardsTable from "@/app/ui/components/cards/CardsTable";
import Search from "@/app/ui/components/cards/Search";
import { CreateCard } from "@/app/ui/components/cards/Buttons";
import { fetchThemesPagesByEmail } from "../../lib/data";
import { auth } from "@/auth";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const session = await auth();

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalThemes = await fetchThemesPagesByEmail(
    query,
    session?.user?.email
  );

  return (
    <main className="w-full text-[#050505]">
      <h1 className="mb-6 text-2xl font-semibold text-[#1a1a1a]">
        Ваши карточки
      </h1>
      <div className="flex items-center justify-between gap-2">
        <Search placeholder="Поиск карточек..." />
        <CreateCard />
      </div>
      {totalThemes > 0 ? (
        <>
          <CardsTable
            session={session?.user}
            query={query}
            currentPage={currentPage}
          />
          <div className="mt-5 flex w-full justify-center">
            <Pagination totalThemes={totalThemes} />
          </div>
        </>
      ) : (
        <p className="mx-auto text-center mt-3">Карточки не найдены</p>
      )}
    </main>
  );
}
