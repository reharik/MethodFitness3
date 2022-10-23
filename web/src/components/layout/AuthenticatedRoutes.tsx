import { Route, Routes } from 'react-router';
import { AuthenticatedRoute } from '../providers/routeProvider/AuthenticatedRoute';
import { Calendar } from '../shells/Calendar';

export const AuthenticatedRoutes = (): JSX.Element | null => {
	return (
		<Routes>
			<Route
				path='/schedule'
				element={<AuthenticatedRoute component={<Calendar />} />}
			/>
		</Routes>
	);
};
