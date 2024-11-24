import EditForm from "@/app/ui/components/cards/EditForm";
import { fetchThemeById, fetchWordsById } from "@/app/lib/data";

export const metadata = {
  title: "Редактирование карточки",
};

export default async function Page(props) {
  const params = await props.params;

  const id = params.id;
  const [editedTheme, editedWords] = await Promise.all([
    fetchThemeById(id),
    fetchWordsById(id),
  ]);

  return (
    <main className="text-[#050505]">
      <h1 className="text-2xl font-semibold text-[#1a1a1a] mb-6">
        Редактирование карточки
      </h1>
      <EditForm editedTheme={editedTheme[0]} editedWords={editedWords} />
    </main>
  );
}
