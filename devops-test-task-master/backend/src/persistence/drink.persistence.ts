import { sql } from '@databases/pg';
import db from '@db/pool';
import { IDrink } from '@models/drink';

export const selectAll = async (): Promise<IDrink[]> => {
  const drinks: IDrink[] = await db.query(
    sql`SELECT id, title, balance FROM drinks;`,
  );

  return drinks;
};

const selectOne = async (id: number): Promise<IDrink> => {
  const drink: IDrink[] = await db.query(
    sql`SELECT id, title, balance FROM drinks WHERE id = ${id} LIMIT 1;`,
  );

  if (drink.length === 0) {
    return null;
  }

  return drink[0];
};

const insert = async (title: string, balance: number): Promise<IDrink> => {
  const drink: IDrink[] = await db.query(
    sql`INSERT INTO drinks (title, balance) VALUES (${title}, ${balance});`,
  );

  if (drink.length === 0) {
    return null;
  }

  return drink[0];
};

export const update = async (
  id: number,
  title: string,
  balance: number,
): Promise<IDrink> => {
  const drink: IDrink[] = await db.query(
    sql`UPDATE drinks SET title= ${title}, balance = ${balance} WHERE id = ${id};`,
  );

  if (drink.length === 0) {
    return null;
  }

  return drink[0];
};

export default { selectAll, selectOne, insert, update };
