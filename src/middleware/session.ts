import session from 'express-session';
import { db } from '../db/pg';
import connectPgSimple from 'connect-pg-simple';

export const pgSession = session({
	store: new (connectPgSimple(session))({
		pgPromise: db,
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

