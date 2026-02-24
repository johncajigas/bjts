import pg from 'pg-promise';
export const db = pg()(`postgres://${process.env.DBNAME}:${encodeURI(process.env.DBPASSWORD as string)}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`);
