import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import { pool } from '../db/pg'
export const pgSession = session({
	store: new (connectPgSimple(session))({
		pool,
		tableName: 'session',
	}),
	secret: "!@#$!#@%S00p3r53CUrE5eCreT4YbjtsPr0j3ct#%!",
	resave: false,
	saveUninitialized: true,
	cookie: {
		path: "/",
		httpOnly: true,
		secure: false,
		maxAge: 60000,
	},
});

