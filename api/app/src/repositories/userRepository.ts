import { knex } from '../knexInstance';
import { User, UserLoginInfo } from '../services/authenticationService';
import { CurrentUser } from '../types';

export const getUserById = async (id: string) => {
	return knex<User>('User')
		.select(
			'EntityId',
			'FirstName',
			'LastName',
			'Email',
			'BirthDate',
			'Phone',
			'SecondaryPhone',
			'Color',
			'Archived',
			'Address1',
			'Address2',
			'City',
			'State',
			'ZipCode'
		)
		.where({ entityId: id })
		.first();
};

export const getUserLoginInfosByLoginName = async (
	loginName: string
): Promise<UserLoginInfo[] | []> => {
	return knex<UserLoginInfo>('User')
		.select('u.entityId', 'uli.loginName', 'uli.password', 'uli.salt')
		.from(`User AS u`)
		.innerJoin('UserLoginInfo AS uli', 'u.UserLoginInfoId', 'uli.EntityId')
		.where('uli.loginName', loginName);
};

export const getCurrentUserById = async (
	id: string
): Promise<CurrentUser | undefined> => {
	return (await knex<CurrentUser>('User')
		.select('entityId', 'firstName', 'lastName')
		.where({ entityId: id })
		.first()) as CurrentUser;
};
