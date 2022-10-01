import { ReactNode, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../currentUserProvider/CurrentUserProvider';

type AuthenticatedRouteProps = {
	children: ReactNode;
};

export const AuthenticatedRoute = ({
	children,
}: AuthenticatedRouteProps): JSX.Element => {
	const { currentUser } = useContext(CurrentUserContext);
	const { pathname } = useLocation();
	return currentUser?.entityId ? (
		// return (
		<>{children}</>
	) : (
		<Navigate to={`/signin`} state={{ from: pathname }} replace />
	);
};
