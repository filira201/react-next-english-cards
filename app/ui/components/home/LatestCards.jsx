import { fetchFilteredThemesByEmail } from "@/app/lib/data";
import Card from "../cards/Card";
import { auth } from "@/auth";
import TitleInfo from "./TitleInfo";

const LatestCards = async () => {
  const session = await auth();
  const themes = await fetchFilteredThemesByEmail("", 1, session?.user?.email);

  return (
    <div className="py-9 px-6 grow-[4] overflow-hidden">
      <TitleInfo iconType={"latestCards"} titleText={"Последние карточки"} />
      <div className="flex flex-col gap-4">
        {themes.length > 0 ? (
          themes.map((theme) => {
            return <Card key={theme.id} {...theme} />;
          })
        ) : (
          <p className="mx-auto text-center my-3">У вас пока нет карточек</p>
        )}
      </div>
    </div>
  );
};

export default LatestCards;
