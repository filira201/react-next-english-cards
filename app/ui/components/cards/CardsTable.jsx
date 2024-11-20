import { fetchFilteredThemesByEmail } from "@/app/lib/data";
import Card from "./Card";

const CardsTable = async ({ session, query, currentPage }) => {
  const themes = await fetchFilteredThemesByEmail(
    query,
    currentPage,
    session?.email
  );

  return (
    <div>
      <div className="bg-[#ffffffe6] py-4 px-3 flex flex-col gap-4 border rounded-xl mt-5 lg:mt-10">
        {themes.map((theme) => {
          return <Card key={theme.id} {...theme} />;
        })}
      </div>
    </div>
  );
};

export default CardsTable;
