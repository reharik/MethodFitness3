import { knexConfig } from './knexConfig';
import knexDB, { Knex } from 'knex';

let db;
if (!db) {
	db = knexDB(knexConfig);
}

export const knex: Knex = db;
