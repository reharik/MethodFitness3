import React from 'react';
import { config } from '../config';
import { ApolloProvider } from './providers/apolloProvider';
import { StyleProvider } from './providers/styleProvider';
import { ModalProvider } from 'styled-react-modal';
import { RouteProvider } from './providers/routeProvider';
import { CurrentUserProvider } from './providers/currentUserProvider';

function App() {
	return (
		<ApolloProvider uri={config.apiGraphQLUrl}>
			<CurrentUserProvider>
				<StyleProvider>
					<ModalProvider>
						<RouteProvider></RouteProvider>
					</ModalProvider>
				</StyleProvider>
			</CurrentUserProvider>
		</ApolloProvider>
	);
}

export { App };
