import { Route, Routes } from 'react-router';
import { config } from '../../config';
import { AuthenticatedRoute } from '../providers/routeProvider/AuthenticatedRoute';
import { Calendar } from '../shells/Calendar';

export const AuthenticatedRoutes = (): JSX.Element | null => {
	// const { currentUser } = currentUserContext;
	const apiUri = `${config.apiProtocol}://${config.apiHost}:${config.apiPort}/${config.apiProxyRoute}`;

	return <Routes></Routes>;
};
