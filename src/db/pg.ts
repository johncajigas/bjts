import postgres from 'postgres';
import Pool from 'pg-pool';
import type { QueryResult, QueryResultRow } from 'pg';

export const sql = postgres(`postgres://${process.env.DBNAME}:${encodeURI(process.env.DBPASSWORD as string)}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`);

export const pool = new Pool({
	database: process.env.DBNAME,
	user: process.env.DBNAME,
	host: process.env.DBHOST,
	password: process.env.DBPASSWORD,
	port: Number(process.env.DBPORT),
	max: 20,
	idleTimeoutMillis: 1000,
	connectionTimeoutMillis: 1000,
});

export const query = <T>(text: string, values: Array<string>): Promise<QueryResult<QueryResultRow<T>>> => {
	return pool.query(text, values);
}
