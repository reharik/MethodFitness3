import { ReactNode } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { CurrentUser } from 'eng-common-web/providers';

type AuthenticatedRouteProps = {
	children: ReactNode;
};

// export const initAuthenticatedRoute = (currentUser: CurrentUser) => {
export const initAuthenticatedRoute = () => {
	return ({ children }: AuthenticatedRouteProps): JSX.Element => {
		// const { pathname } = useLocation();
		// return currentUser?.id ? (
		return (
			<>{children}</>
			// ) : (
			// 	<Navigate to={`/auth/login`} state={{ from: pathname }} replace />
		);
	};
};
