import { Connection, sql } from '@databases/pg';

export default async function applyMigration(db: Connection) {
  await db.query(sql`
      CREATE TABLE drinks(
           id      serial primary key,
           title   text,
           balance int
      );
  `);
}
