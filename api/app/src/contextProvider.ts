import { config } from './config';
import { Context } from './types';
import jwt from 'jsonwebtoken';
import { buildCurrentUser, AuthToken } from './services/authenticationService';

export const buildContext =
	() =>
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	async (req: any): Promise<Context> => {
		const token = req.ctx.request.header[config.tokenHeaderKey];
		let verifiedToken = undefined;
		let currentUser;
		if (token) {
			try {
				verifiedToken = jwt.verify(
					token,
					config.jwtSecretKey
				) as AuthToken;
			} catch (err) {
				console.log(`************err************`);
				console.log(err);
				console.log(`********END err************`);
			}
			if (verifiedToken?.userId) {
				currentUser = await buildCurrentUser(verifiedToken.userId);
				if (currentUser) {
					currentUser.authenticated = true;
					currentUser.token = token;
				}
			}
		}
		return { isLoggedIn: !!currentUser, currentUser };
	};
