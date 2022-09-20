import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { config } from '../../../config';
import { RootContainer } from '../../../containers/RootContainer';
// import { CurrentUser, CurrentUserContextProps } from 'eng-common-web/providers';
import { FileNotFound } from '../../FileNotFound';

export type RouterProviderProps = {
	// currentUserContext: CurrentUserContextProps;
	// loginLandingPage: (currentUser: CurrentUser) => string;
	// AuthenticationLayout: FC;
	// Layout: FC;
	// A collection of routes that uses a different layout or no layout at all.
	// Must be either a single Route or <>[multiple routes]</>
	// aux?: JSX.Element;
};

export const RouteProvider = (): JSX.Element | null => {
	// const { currentUser } = currentUserContext;
	const apiUri = `${config.apiProtocol}://${config.apiHost}:${config.apiPort}/${config.apiProxyRoute}`;

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/calendar' path={apiUri} />
				<Route path='/*' element={<RootContainer />} />
				<Route path='*' element={<FileNotFound />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

// express script home delivery
