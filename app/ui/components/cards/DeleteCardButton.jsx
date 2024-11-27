"use client";

import { useState } from "react";
import { deleteCard } from "@/app/lib/actions";

export function DeleteCardButton({ id, cardName }) {
  const deleteCardWithId = deleteCard.bind(null, id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = async () => {
    await deleteCardWithId();
    closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className="rounded-md border p-2 text-red-600 transition-colors [@media(hover:hover){&:hover}]:bg-gray-100 [@media(hover:none){&:active}]:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#f7f7f5] rounded-md py-6 px-4 min-w-[300px] w-2/5 max-w-[600px]">
            <p className="text-lg font-semibold text-[#1a1a1a] text-center mb-4">
              Подтверждение удаления
            </p>
            <p className="text-sm mb-6">
              Вы точно хотите удалить карточку{" "}
              <span className="font-bold">{cardName}</span>
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 min-w-20 rounded-md bg-gray-200 [@media(hover:hover){&:hover}]:bg-gray-300 [@media(hover:none){&:active}]:bg-gray-300"
              >
                Нет
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 min-w-20 rounded-md bg-red-600 text-white [@media(hover:hover){&:hover}]:bg-red-700 [@media(hover:none){&:active}]:bg-red-700"
              >
                Да
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
