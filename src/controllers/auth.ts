import type { Request, Response, NextFunction } from 'express';
export const register = async (req: Request, res: Response, _next: NextFunction) => {
	console.log(req.body.username, req.body.password);
	return res.status(200).send();
}
export const login = async (req: Request, res: Response, next: NextFunction) => {

}
export const logout = async (req: Request, res: Response, next: NextFunction) => {

}


