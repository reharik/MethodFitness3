// import { ReactNode } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { hasOperation } from 'eng-common-web/misc';
// import { CurrentUser } from 'eng-common-web/providers';
// import { FileNotFound } from 'eng-common-web/misc';
// import { EnumItemOf, TOperationToken } from 'eng-common-web/enumerations';
// import { TIconEnum } from 'eng-common-web/iconLibrary';

// export type RouteEnumItem = {
// 	text: string;
// 	icon?: EnumItemOf<TIconEnum>;
// 	path: string;
// 	getCount?: string;
// 	operations: EnumItemOf<TOperationToken>[];
// };

// export type RouteEnum = {
// 	[Properties in keyof TOperationToken as string]: RouteEnumItem;
// };
// type RoleBasedRouteProps = {
// 	children: ReactNode;
// };

export const initRoleBasedRoute = () =>
	// routeEnum: RouteEnum,
	// currentUser: CurrentUser
	{
		/* no-op */
	};
// 	return ({ children }: RoleBasedRouteProps): JSX.Element => {
// 		const { pathname } = useLocation();
// 		// this is required to get the org specific string values in the menu

// 		// This will need to be more robust when we begin to have nested routes
// 		const routeInfo = Object.values(routeEnum).find(
// 			(route: RouteEnumItem) =>
// 				pathname.toLowerCase().includes(route.path)
// 		);

// 		if (!routeInfo) {
// 			return <FileNotFound />;
// 		}
// 		if (
// 			currentUser?.id &&
// 			hasOperation(currentUser, routeInfo.operations)
// 		) {
// 			return <>{children}</>;
// 		}
// 		return (
// 			<Navigate
// 				to={`/auth/login`}
// 				state={{ from: pathname, redirectPath: routeInfo.path }}
// 				replace
// 			/>
// 		);
// 	};
// };
