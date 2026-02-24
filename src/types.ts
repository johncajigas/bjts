export interface User {
	id: string;
	username: string;
}
declare module "express-session" {
	interface SessionData {
		user?: User;
	}
}
