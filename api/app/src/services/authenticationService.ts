import {
	getCurrentUserById,
	getUserById,
	getUserLoginInfosByLoginName,
} from '../repositories/userRepository';
// import sha1 from 'sha1';
import { CurrentUser } from '../types';
import { config } from '../config';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export type User = {
	entityId: string;
	firstName: string;
	lastName: string;
	email: string;
	birthDate?: Date;
	phone?: string;
	secondaryPhone?: string;
	color?: string;
	archived?: string;
	address1?: string;
	address2?: string;
	city?: string;
	state?: string;
	zipCode?: string;
};

export type UserLoginInfo = {
	entityId: string;
	loginName: string;
	password: string;
	salt: string;
};

export type AuthToken = { userId?: string };

export const buildUser = async (id: string): Promise<User | undefined> => {
	return getUserById(id);
};

export const buildCurrentUser = async (
	id: string
): Promise<CurrentUser | undefined> => {
	return getCurrentUserById(id);
};

export const authenticateUser = async (
	loginName: string,
	password: string
): Promise<CurrentUser | undefined> => {
	const ulis = await getUserLoginInfosByLoginName(loginName);
	let authenticated = false;
	let userEntityId;
	for (const uli of ulis) {
		const salted = password + uli.salt;
		const hash = crypto
			.createHash('sha1')
			.update(salted)
			.digest('hex')
			.toUpperCase();
		if (uli.password === hash) {
			authenticated = true;
			userEntityId = uli.entityId;
			break;
		}
	}
	let currentUser;
	if (authenticated) {
		currentUser = await getCurrentUserById(userEntityId || '');
		if (currentUser) {
			currentUser.authenticated = true;
			const token = jwt.sign(
				{ userId: currentUser.entityId },
				config.jwtSecretKey,
				{ expiresIn: '1h' }
			);
			currentUser.token = token;
		}
	}

	return currentUser;
};
