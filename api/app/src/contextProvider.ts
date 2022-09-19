import { config } from './config';
import { Context } from './types';
import jwt from 'jsonwebtoken';
import { buildCurrentUser } from './services/authenticationService';

export const buildContext =
	() =>
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	async (req: any): Promise<Context> => {
		const token = req.ctx.request.header[config.tokenHeaderKey];
		let verifiedToken;
		let currentUser;
		if (token) {
			try {
				verifiedToken = jwt.verify(token, config.jwtSecretKey);
			} catch (err) {
				console.log(`************err************`);
				console.log(err);
				console.log(`********END err************`);
			}
			if (verifiedToken) {
				currentUser = await buildCurrentUser('123'); //verifiedToken.userId); //verified.id);
			}
		}
		return { isLoggedIn: !!currentUser, currentUser };
	};
