"use client";

import Link from "next/link";
import { updateCard } from "@/app/lib/actions";
import { v4 as uuidv4 } from "uuid";
import Word from "./Word";
import clsx from "clsx";
import { useState } from "react";

export default function EditForm({ editedTheme, editedWords }) {
  const editedWordsCopy = [...editedWords];
  const [words, setWords] = useState(editedWordsCopy);

  const onDeleteWord = (deletedWord) => {
    setWords(words.filter((word) => word.id !== deletedWord));
  };

  const onChangeEnglishWord = (changedTodo) => {
    setWords(
      words.map((word) => {
        if (word.id === changedTodo.id) {
          return { ...word, english: changedTodo.english };
        } else {
          return word;
        }
      })
    );
  };

  const onChangeRussianWord = (changedTodo) => {
    setWords(
      words.map((word) => {
        if (word.id === changedTodo.id) {
          return { ...word, russian: changedTodo.russian };
        } else {
          return word;
        }
      })
    );
  };

  const updateCardWithThemeWithWords = updateCard.bind(
    null,
    editedTheme,
    editedWords,
    words
  );

  return (
    <form className="my-5" action={updateCardWithThemeWithWords}>
      <div className="rounded-md bg-gray-50 p-4">
        {/* Theme Name Start */}
        <div className="mb-4">
          <label
            htmlFor="card-theme"
            className="mb-2 block text-base font-medium"
          >
            Введите тему карточки
          </label>
          <div className="relative">
            <input
              type="text"
              name="cardTheme"
              placeholder="Enter Card Theme"
              id="card-theme"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={editedTheme.name}
              required
            />
          </div>
        </div>
        {/* Theme Name End */}
        {words.length === 0 && (
          <h3 className="text-center">
            В вашей карточке должно быть минимум одно слово
          </h3>
        )}

        {/* Words Start */}
        {words.map((word, index) => {
          return (
            <Word
              key={word.id}
              index={index}
              onChangeEnglishWord={onChangeEnglishWord}
              onChangeRussianWord={onChangeRussianWord}
              onDeleteWord={onDeleteWord}
              word={word}
            />
          );
        })}

        {/* Words End */}
        <button
          onClick={() =>
            setWords([...words, { id: uuidv4(), english: "", russian: "" }])
          }
          className=" bg-sky-500  text-white p-1 rounded-md hover:bg-sky-600 text-sm"
          type="button"
        >
          Добавить слово
        </button>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/home/cards"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Отмена
        </Link>
        <button
          disabled={words.length === 0 ? true : false}
          type="submit"
          className={clsx(
            "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
            {
              "opacity-30 cursor-not-allowed": words.length === 0,
            }
          )}
        >
          Отредактировать карточку
        </button>
      </div>
    </form>
  );
}
