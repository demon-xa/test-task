import { sql } from '@databases/pg';
import logger from '@core/utils/logger';
import db from '@db/pool';

const seedsDrink = async () => {
  logger.info('Seeding Drinks');
  await db.query(
    sql`INSERT INTO drinks (id, title, balance) VALUES (1, 'Espresso', 100) on conflict (id) do nothing;`,
  );
  await db.query(
    sql`INSERT INTO drinks (id, title, balance) VALUES (2, 'Americano', 200) on conflict (id) do nothing;`,
  );
  await db.query(
    sql`INSERT INTO drinks (id, title, balance) VALUES (3, 'Latte', 300) on conflict (id) do nothing;`,
  );
  await db.query(
    sql`INSERT INTO drinks (id, title, balance) VALUES (4, 'Soda', 400) on conflict (id) do nothing;`,
  );
  await db.query(
    sql`INSERT INTO drinks (id, title, balance) VALUES (5, 'Still Water', 500) on conflict (id) do nothing;`,
  );
};

export default seedsDrink;
