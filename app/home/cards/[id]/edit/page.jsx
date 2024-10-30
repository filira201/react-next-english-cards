import EditForm from "@/app/ui/components/cards/EditForm";
import { fetchThemeById, fetchWordsById } from "@/app/lib/data";

export default async function Page(props) {
  const params = await props.params;

  const id = params.id;
  const [editedTheme, editedWords] = await Promise.all([
    fetchThemeById(id),
    fetchWordsById(id),
  ]);

  return (
    <main>
      <p>Edit Card</p>
      <EditForm editedTheme={editedTheme[0]} editedWords={editedWords} />
    </main>
  );
}
