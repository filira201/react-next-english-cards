"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import Link from "next/link";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">
          Пожалуйста, войдите, чтобы продолжить.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Почта
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Введите ваш адрес электронной почты"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Пароль
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Введите пароль"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="px-3 py-2 bg-blue-500 text-white rounded-md mt-4 w-full"
          aria-disabled={isPending}
        >
          Войти
        </button>
        <p>
          У вас ещё нет аккаунта{" "}
          <Link href="/register">
            <span className="text-blue-500 underline">Зарегистрироваться</span>
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
