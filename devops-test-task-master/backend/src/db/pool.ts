import createConnectionPool, { sql } from '@databases/pg';
import config from '@config/config';

export { sql };

const db = createConnectionPool(config.dbUrl);
export default db;
