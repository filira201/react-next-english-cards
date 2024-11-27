"use server";

import { signIn } from "@/auth";
import { signOut } from "@/auth";

import { AuthError } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";
import { CreateCard, UpdateCard, RegisterUser } from "./schemes";

export const createCard = async (userId, words, prevState, formData) => {
  const validatedFields = CreateCard.safeParse({
    cardTheme: formData.get("cardTheme"),
    words: words,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Не удалось создать карточку",
    };
  }

  const themeId = uuidv4();
  try {
    await sql`
      INSERT INTO themes (id, user_id, create_date, name)
      VALUES (${themeId}, ${userId}, ${new Date()}, ${
      validatedFields.data.cardTheme
    })
    `;

    await Promise.all(
      validatedFields.data.words.map(
        (word) =>
          sql`
          INSERT INTO words (id, theme_id, english, russian)
          VALUES (${uuidv4()}, ${themeId}, ${word.english}, ${word.russian})
        `
      )
    );
    console.log("Theme and words insert successfully");
  } catch (error) {
    console.error("Error inster theme and words:", error);
  }

  revalidatePath("/home/cards");
  redirect("/home/cards");
};

export const updateCard = async (
  editedTheme,
  editedWords,
  words,
  prevState,
  formData
) => {
  const validatedFields = UpdateCard.safeParse({
    cardTheme: formData.get("cardTheme"),
    words: words,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Не удалось обновить карточку",
    };
  }

  try {
    if (validatedFields.data.cardTheme !== editedTheme.name) {
      await sql`
        UPDATE themes
        SET name = ${validatedFields.data.cardTheme}
        WHERE id = ${editedTheme.id}
      `;
    }

    const existingWordsMap = new Map(
      editedWords.map((word) => [word.id, word])
    );

    const wordsToInsert = [];
    const wordsToUpdate = [];
    const newWordIds = new Set();

    validatedFields.data.words.forEach((word) => {
      newWordIds.add(word.id);

      if (!existingWordsMap.has(word.id)) {
        wordsToInsert.push(word);
      } else {
        const existingWord = existingWordsMap.get(word.id);
        if (
          existingWord.english !== word.english ||
          existingWord.russian !== word.russian
        ) {
          wordsToUpdate.push(word);
        }
      }
    });

    const wordsToDelete = editedWords.filter(
      (word) => !newWordIds.has(word.id)
    );

    if (wordsToDelete.length > 0) {
      await Promise.all(
        wordsToDelete.map(
          (word) =>
            sql`
            DELETE FROM words
            WHERE id = ${word.id}
          `
        )
      );
    }

    await Promise.all(
      wordsToInsert.map(
        (word) =>
          sql`
          INSERT INTO words (id, theme_id, english, russian)
          VALUES (${word.id}, ${editedTheme.id}, ${word.english}, ${word.russian})
        `
      )
    );

    await Promise.all(
      wordsToUpdate.map(
        (word) =>
          sql`
          UPDATE words
          SET english = ${word.english}, russian = ${word.russian}
          WHERE id = ${word.id}
        `
      )
    );
    console.log("Theme and words update successfully");
  } catch (error) {
    console.error("Error update theme and words:", error);
  }

  revalidatePath("/home/cards");
  redirect("/home/cards");
};

export const deleteCard = async (id) => {
  try {
    await sql`DELETE FROM themes WHERE id = ${id}`;
    await sql`DELETE FROM words WHERE theme_id = ${id}`;

    console.log("Theme and words deleted successfully");
  } catch (error) {
    console.error("Error delete theme and words:", error);
  }
  revalidatePath("/home/cards");
};

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Неверные учетные данные";
        default:
          return "Что-то пошло не так";
      }
    }
    throw error;
  }
}

export async function singOutOfAccount() {
  await signOut();
}

export async function register(prevState, formData) {
  const validatedFields = RegisterUser.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirm-password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Не удалось создать учетную запись",
    };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = bcrypt.hashSync(password, 10);
  const id = uuidv4();

  try {
    await sql`
      INSERT INTO users (id, name, email, create_date, password)
      VALUES (${id}, ${name}, ${email}, ${new Date()}, ${hashedPassword})
    `;
  } catch (error) {
    return "Database Error: Failed to Create Account.";
  }

  redirect("/login");
}
