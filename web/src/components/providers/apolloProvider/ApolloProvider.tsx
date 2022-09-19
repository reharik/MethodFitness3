import { ReactNode } from 'react';
import {
	ApolloClient,
	ApolloProvider as Apollo,
	createHttpLink,
	DefaultOptions,
} from '@apollo/client';
import { cache } from './cache';
import { setContext } from '@apollo/client/link/context';
import { sessionStorageKey } from '../../../enums/sessionStorageKeys';
import { getSessionStorage } from '../../../utils/sessionStorage';

const httpLink = (uri: string) =>
	createHttpLink({
		uri,
	});

const authLink = setContext(async (_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = getSessionStorage(sessionStorageKey.MFT);
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? token : '',
		},
	};
});

const defaultOptions: DefaultOptions = {
	query: {
		errorPolicy: 'all',
	},
	mutate: {
		errorPolicy: 'all',
	},
};

const buildClient = (uri: string) => {
	return new ApolloClient({
		link: authLink.concat(httpLink(uri)),
		cache,
		defaultOptions,
	});
};

export interface ApolloProviderProps {
	uri: string;
	children: ReactNode;
}

export const ApolloProvider = ({
	uri,
	children,
}: ApolloProviderProps): JSX.Element => {
	const client = buildClient(uri);
	return <Apollo client={client}>{children}</Apollo>;
};
