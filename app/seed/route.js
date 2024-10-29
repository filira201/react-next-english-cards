// import bcrypt from "bcrypt";
// import { db } from "@vercel/postgres";
// import { users, themes, words } from "@/app/lib/data";

// const client = await db.connect();

// const seedUsers = async () => {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(500) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       create_date TIMESTAMP NOT NULL,
//       password TEXT NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = bcrypt.hashSync(user.password, 10);
//       return client.sql`
//         INSERT INTO users (id, name, email, create_date, password)
//         VALUES (${user.id}, ${user.name}, ${
//         user.email
//       }, ${new Date()}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedUsers;
// };

// const seedThemes = async () => {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS themes (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       user_id UUID NOT NULL,
//       create_date TIMESTAMP NOT NULL,
//       name VARCHAR(500) NOT NULL
//     );
//   `;

//   const insertedThemes = await Promise.all(
//     themes.map(async (theme) => {
//       return client.sql`
//         INSERT INTO themes (id, user_id, create_date, name)
//         VALUES (${theme.id}, ${theme.userId}, ${new Date()}, ${theme.name})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedThemes;
// };

// const seedWords = async () => {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS words (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       theme_id UUID NOT NULL,
//       english VARCHAR(1000) NOT NULL,
//       russian VARCHAR(1000) NOT NULL
//     );
//   `;

//   const insertedWords = await Promise.all(
//     words.map(async (word) => {
//       return client.sql`
//         INSERT INTO words (id, theme_id, english, russian)
//         VALUES (${word.id}, ${word.theme_id}, ${word.english}, ${word.russian})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedWords;
// };

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedUsers();
//     await seedThemes();
//     await seedWords();
//     await client.sql`COMMIT`;

//     return Response.json({ message: "Database seeded successfully" });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }
