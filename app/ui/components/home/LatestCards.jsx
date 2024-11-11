import { fetchFilteredThemesByEmail } from "@/app/lib/data";
import Card from "../cards/Card";
import { auth } from "@/auth";

const LatestCards = async () => {
  const session = await auth();
  const themes = await fetchFilteredThemesByEmail("", 1, session?.user?.email);

  return (
    <div>
      <div className="grid p-10 gap-6 grid-cols-2">
        {themes.map((theme) => {
          return <Card key={theme.id} {...theme} />;
        })}
      </div>
    </div>
  );
};

export default LatestCards;
