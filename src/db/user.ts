import { query } from './pg';
import type { User } from '../types';

export const getByUserName = async (username: string): Promise<User | undefined> => {
	const result = await query<User>('SELECT * FROM users WHERE username=$1', [username]);
	return result.rows[0];
} 
