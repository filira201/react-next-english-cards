import Quize from "@/app/ui/components/cards/Quize";
import { fetchWordsById } from "@/app/lib/data";

const Page = async (props) => {
  const params = await props.params;

  const id = params.id;
  const data = await fetchWordsById(id);
  const themeName = data[0].themename;

  return (
    <main className="h-full flex items-center flex-col justify-center gap-3 text-[#050505]">
      <h1 className="text-2xl font-semibold text-center text-[#1a1a1a]">
        Текущая карточка: {themeName}
      </h1>
      <Quize data={data} />
    </main>
  );
};

export default Page;
