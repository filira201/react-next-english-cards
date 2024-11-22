import { z } from "zod";

const WordSchema = z.object({
  id: z.string(),
  english: z
    .string()
    .min(1, { message: "Пожалуйста, введите лицевую сторону" })
    .max(1000, {
      message: "Лицевая сторона не должна превышать 1000 символов",
    }),
  russian: z
    .string()
    .min(1, { message: "Пожалуйста, введите оборотную сторону" })
    .max(1000, {
      message: "Оборотная сторона не должна превышать 1000 символов",
    }),
});

const FormSchema = z.object({
  id: z.string(),
  userId: z.string(),
  cardTheme: z
    .string()
    .min(1, { message: "Пожалуйста, введите тему" })
    .max(500, { message: "Тема не должна превышать 500 символов" }),
  date: z.instanceof(Date),
  words: z.array(WordSchema).min(1, { message: "Пожалуйста, добавьте термин" }),
});

export const CreateCard = FormSchema.omit({
  id: true,
  userId: true,
  date: true,
});

export const UpdateCard = FormSchema.omit({
  id: true,
  userId: true,
  date: true,
});
