import knex from 'knex';
import { env } from '../env';

export const db = knex({
  client: 'pg',
  connection: {
    host: env.DBHOST,
    port: env.DBPORT,
    user: env.DBUSER,
    password: env.DBPASS,
    database: env.DBNAME,
  },
});