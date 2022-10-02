import { MutationResolvers, QueryResolvers } from '../generated/gen-types';
import { authenticateUser } from '../services/authenticationService';

type Resolvers = {
	Query: QueryResolvers;
	Mutation: MutationResolvers;
};

export const resolvers: Resolvers = {
	Query: {
		currentUser: async (_, __, context) => {
			const { currentUser } = context;
			const errors = !currentUser ? ['No logged in user found'] : [];

			return { data: currentUser, success: !!currentUser, errors };
		},
	},
	Mutation: {
		authenticate: async (_, args) => {
			const { userName, password } = args.authenticateInput;
			const currentUser = await authenticateUser(userName, password);
			return { success: !!currentUser, data: currentUser, errors: [] };
		},
	},
};
