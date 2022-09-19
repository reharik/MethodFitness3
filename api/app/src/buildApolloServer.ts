import { ApolloServer } from 'apollo-server-koa';
import { typeDefs, resolvers } from './schema';
import { buildContext } from './contextProvider';
import { isDev, isLocal, isQa } from './config';

export const buildApolloServer = (): ApolloServer => {
	return new ApolloServer({
		typeDefs,
		resolvers,
		context: buildContext(),
		introspection: isLocal() || isDev() || isQa(),
	});
};
