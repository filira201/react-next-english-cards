import Link from "next/link";
import { deleteCard } from "@/app/lib/actions";

export function CreateCard() {
  return (
    <Link
      href="/home/cards/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Создать карточку</span>{" "}
    </Link>
  );
}

export function UpdateCard({ id }) {
  return (
    <Link
      href={`/home/cards/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <span>Ред</span>
    </Link>
  );
}

export function DeleteCard({ id }) {
  const deleteCardWithId = deleteCard.bind(null, id);

  return (
    <form action={deleteCardWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        Удалить
      </button>
    </form>
  );
}
