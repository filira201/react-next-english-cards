"use client";

import { useActionState } from "react";
import { register } from "@/app/lib/actions";
import Link from "next/link";

export default function RegisterForm() {
  const [errorMessage, formAction, isPending] = useActionState(register, null);

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-[#f7f7f5] px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">Зарегистрируйтесь, чтобы продолжить</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-1 mt-5 block text-xs font-medium"
              htmlFor="name"
            >
              Имя
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-[#787774]"
                id="name"
                type="text"
                name="name"
                autoComplete="true"
                placeholder="Введите имя"
                required
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
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </div>
          <div>
            <label
              className="mb-1 mt-5 block text-xs font-medium"
              htmlFor="email"
            >
              Почта
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-[#787774]"
                id="email"
                type="email"
                name="email"
                autoComplete="true"
                placeholder="Введите адрес почты"
                required
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
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </div>
          </div>
          <div>
            <label
              className="mb-1 mt-5 block text-xs font-medium"
              htmlFor="password"
            >
              Пароль
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-[#787774]"
                id="password"
                type="password"
                name="password"
                placeholder="Введите пароль"
                required
                minLength={6}
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
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
            </div>
          </div>
          <div>
            <label
              className="mb-1 mt-5 block text-xs font-medium"
              htmlFor="confirm-password"
            >
              Подтверждение пароля
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-[#787774]"
                id="confirm-password"
                type="password"
                name="confirm-password"
                placeholder="Введите пароль повторно"
                required
                minLength={6}
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
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center font-medium rounded-lg bg-[#0582ff] text-white mt-8 pt-2 px-5 pb-[10px] flex-grow transition-colors [@media(hover:hover){&:hover}]:bg-[#045ac3] [@media(hover:none){&:active}]:bg-[#045ac3]"
          aria-disabled={isPending}
        >
          Зарегистрироваться
        </button>
        <p className="mt-5">
          У вас уже есть аккаунт{" "}
          <Link href="/login">
            <span className="text-[#087fe7] underline">Войти</span>
          </Link>
        </p>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
