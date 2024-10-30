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
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Карточки для изучения</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search cards..." />
        <CreateCard />
      </div>
      <CardsTable
        session={session?.user}
        query={query}
        currentPage={currentPage}
      />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalThemes={totalThemes} />
      </div>
    </div>
  );
}
