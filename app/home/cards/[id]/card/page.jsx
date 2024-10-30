import Quize from "@/app/ui/components/cards/Quize";
import { fetchWordsById } from "@/app/lib/data";

const Page = async (props) => {
  const params = await props.params;

  const id = params.id;
  const data = await fetchWordsById(id);

  return (
    <main className="h-screen flex items-center justify-center bg-[#6a5be2]">
      <Quize data={data} />
    </main>
  );
};

export default Page;
