import { sql } from "@vercel/postgres";

export const fetchThemeById = async (id) => {
  try {
    const data = await sql`SELECT *
    FROM themes
    WHERE themes.id = ${id};
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch theme by id.");
  }
};

export const fetchWordsById = async (id) => {
  try {
    const data = await sql`SELECT w.id, w.english, w.russian
    FROM words w
    JOIN themes t ON w.theme_id = t.id
    WHERE t.id = ${id};
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch words by theme id.");
  }
};

export const fetchUserIdByEmail = async (email) => {
  try {
    const data = await sql`
      SELECT id
      FROM users
      WHERE email = ${email}
    `;

    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user ID.");
  }
};

const ITEMS_PER_PAGE = 2;
export const fetchFilteredThemesByEmail = async (query, currentPage, email) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  let wordCapitalLetter;
  let wordSmallLetter;
  if (query) {
    wordCapitalLetter = query[0].toUpperCase() + query.toLowerCase().slice(1);
    wordSmallLetter = query[0].toLowerCase() + query.toLowerCase().slice(1);
  }

  try {
    const themes = await sql`
      SELECT themes.*
      FROM themes
      JOIN users ON themes.user_id = users.id
      WHERE users.email = ${email}
      AND (
        themes.name ILIKE ${`%${wordCapitalLetter}%`}
        OR themes.name ILIKE ${`%${wordSmallLetter}%`}
        OR themes.name ILIKE ${`%${query}%`}
      )
      ORDER BY themes.create_date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}  
    `;

    return themes.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered themes.");
  }
};

export async function fetchThemesPagesByEmail(query, email) {
  let wordCapitalLetter;
  let wordSmallLetter;
  if (query) {
    wordCapitalLetter = query[0].toUpperCase() + query.toLowerCase().slice(1);
    wordSmallLetter = query[0].toLowerCase() + query.toLowerCase().slice(1);
  }

  try {
    const count = await sql`SELECT COUNT(*)
      FROM themes
      JOIN users ON themes.user_id = users.id
      WHERE users.email = ${email}
      AND (
        themes.name ILIKE ${`%${wordCapitalLetter}%`}
        OR themes.name ILIKE ${`%${wordSmallLetter}%`}
        OR themes.name ILIKE ${`%${query}%`}
      )
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of themes.");
  }
}
