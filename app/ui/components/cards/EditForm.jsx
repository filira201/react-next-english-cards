"use client";

import Link from "next/link";
import { updateCard } from "@/app/lib/actions";
import { v4 as uuidv4 } from "uuid";
import Termin from "./Termin";
import clsx from "clsx";
import { useState } from "react";
import { useActionState } from "react";

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

  const initialState = { message: null, errors: {} };
  const [state, formAction] = useActionState(
    updateCardWithThemeWithWords,
    initialState
  );

  return (
    <form action={formAction}>
      <div className="rounded-xl border bg-[#ffffffe6] py-4 px-2 md:p-6">
        {/* Theme Name Start */}
        <div className="mb-8">
          <label
            htmlFor="card-theme"
            className="mb-2 block text-lg font-medium"
          >
            Введите тему карточки
          </label>
          <div className="relative">
            <input
              type="text"
              name="cardTheme"
              placeholder="Тема карточки"
              id="card-theme"
              className="peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 placeholder:text-[#787774]"
              aria-describedby="card-theme-error"
              defaultValue={editedTheme.name}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#787774] peer-focus:text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          </div>
          <div id="card-theme-error" aria-live="polite" aria-atomic="true">
            {state.errors?.cardTheme &&
              state.errors.cardTheme.map((error) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Theme Name End */}
        {words.length === 0 ? (
          <p className="mx-auto text-center">
            Добавьте хотя бы один термин, чтобы создать карточку
          </p>
        ) : (
          words.map((word, index) => {
            return (
              <Termin
                key={word.id}
                index={index}
                onChangeEnglishWord={onChangeEnglishWord}
                onChangeRussianWord={onChangeRussianWord}
                onDeleteWord={onDeleteWord}
                word={word}
              />
            );
          })
        )}
        {/* Words End */}
        <button
          onClick={() =>
            setWords([...words, { id: uuidv4(), english: "", russian: "" }])
          }
          className="mt-4 mx-auto font-medium flex items-center justify-center rounded-lg bg-[#4CAF50] text-white pt-2 px-5 pb-[10px] transition-colors [@media(hover:hover){&:hover}]:bg-[#28A745] [@media(hover:none){&:active}]:bg-[#28A745]"
          type="button"
        >
          Добавить термин
        </button>
        <div aria-live="polite" aria-atomic="true">
          {state.errors?.words &&
            state.errors.words.map((error, index) => (
              <p
                className="mt-2 text-sm text-center text-red-500"
                key={error + index}
              >
                {error}
              </p>
            ))}
        </div>
        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-6 flex justify-center flex-col gap-2 md:gap-4 md:flex-row md:justify-end">
        <Link
          href="/home/cards"
          className="select-none font-medium flex items-center justify-center rounded-lg bg-[#ebf5fe] text-[#087fe7] pt-[10px] px-5 pb-3 transition-colors [@media(hover:hover){&:hover}]:bg-[#d6e1f5] [@media(hover:none){&:active}]:bg-[#d6e1f5] xm:min-w-48"
        >
          Отмена
        </Link>
        <button
          type="submit"
          className="select-none font-medium flex items-center justify-center rounded-lg bg-[#0582ff] text-white pt-[10px] px-5 pb-3 transition-colors [@media(hover:hover){&:hover}]:bg-[#045ac3] [@media(hover:none){&:active}]:bg-[#045ac3] xm:min-w-48"
        >
          Создать карточку
        </button>
      </div>
    </form>
  );
}
