"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";

export const createCard = async (userId, words, formData) => {
  const rawFormData = Object.fromEntries(formData.entries());

  const themeId = uuidv4();
  try {
    await sql`
      INSERT INTO themes (id, user_id, create_date, name)
      VALUES (${themeId}, ${userId}, ${new Date()}, ${rawFormData.cardTheme})
    `;

    await Promise.all(
      words.map(
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

export const updateCard = async (editedTheme, editedWords, words, formData) => {
  const rawFormData = Object.fromEntries(formData.entries());

  try {
    if (rawFormData.cardTheme !== editedTheme.name) {
      await sql`
        UPDATE themes
        SET name = ${rawFormData.cardTheme}
        WHERE id = ${editedTheme.id}
      `;
    }

    const existingWordsMap = new Map(
      editedWords.map((word) => [word.id, word])
    );

    const wordsToInsert = [];
    const wordsToUpdate = [];
    const newWordIds = new Set();

    words.forEach((word) => {
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

  // revalidatePath(`/cards/${editedTheme.id}/edit`);
  // revalidatePath(`/cards/${editedTheme.id}/card`);
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

  revalidatePath("/cards");
};

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

const RegisterUser = z.object({
  name: z.string({
    invalid_type_error: "Please enter your name.",
  }),
  email: z.string({
    invalid_type_error: "Please enter an email address.",
  }),
  password: z.string({
    invalid_type_error: "Please enter a password.",
  }),
  confirmPassword: z.string({
    invalid_type_error: "Please confirm your password.",
  }),
});

export async function register(prevState, formData) {
  const validatedFields = RegisterUser.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirm-password"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return "Missing Fields. Failed to Create Account.";
  }

  const { name, email, password, confirmPassword } = validatedFields.data;

  // Check if passwords match
  if (password !== confirmPassword) {
    return "Passwords don't match.";
  }

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
