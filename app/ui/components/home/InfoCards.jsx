import {
  fetchCountThemesByEmail,
  fetchCountWordsByEmail,
} from "@/app/lib/data";
import { auth } from "@/auth";

const iconsObj = {
  themesCount: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
      />
    </svg>
  ),
  wordsCount: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  ),
};

const InfoCards = async () => {
  const session = await auth();
  const [countThemes, countWords] = await Promise.all([
    fetchCountThemesByEmail(session?.user?.email),
    fetchCountWordsByEmail(session?.user?.email),
  ]);

  return (
    <>
      <Card
        title="Всего карточек"
        value={countThemes.count}
        type={"themesCount"}
      />
      <Card
        title="Всего терминов"
        value={countWords.count}
        type={"wordsCount"}
      />
    </>
  );
};

const Card = ({ title, value, type }) => {
  const icon = iconsObj[type];
  return (
    <div className="grow max-h-44 bg-[#f7f7f5] rounded-lg shadow-custom p-2 text-[#1a1a1a]">
      <div className="flex p-4">
        {icon}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="px-4 py-8 text-center text-2xl truncate bg-white rounded-xl">
        {value}
      </p>
    </div>
  );
};

export default InfoCards;
