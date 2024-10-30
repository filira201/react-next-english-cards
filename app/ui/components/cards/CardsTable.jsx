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
      <div className="grid p-10 gap-6 grid-cols-4">
        {themes.map((theme) => {
          return <Card key={theme.id} {...theme} />;
        })}
      </div>
    </div>
  );
};

export default CardsTable;
