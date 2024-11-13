import { fetchFilteredThemesByEmail } from "@/app/lib/data";
import Card from "../cards/Card";
import { auth } from "@/auth";

const LatestCards = async () => {
  const session = await auth();
  const themes = await fetchFilteredThemesByEmail("", 1, session?.user?.email);

  return (
    <>
      {themes.map((theme) => {
        return <Card key={theme.id} {...theme} />;
      })}
    </>
  );
};

export default LatestCards;
