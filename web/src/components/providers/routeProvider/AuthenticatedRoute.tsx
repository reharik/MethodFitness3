import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../currentUserProvider/CurrentUserProvider';

type AuthenticatedRouteProps = {
	component: JSX.Element;
};

export const AuthenticatedRoute = ({
	component,
}: AuthenticatedRouteProps): JSX.Element => {
	const { currentUser } = useContext(CurrentUserContext);
	const { pathname } = useLocation();
	return currentUser?.entityId ? (
		component
	) : (
		<Navigate to={`/signin`} state={{ from: pathname }} replace />
	);
};
