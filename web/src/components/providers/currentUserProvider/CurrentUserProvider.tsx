import { createContext, ReactNode, useEffect, useState } from 'react';
import { sessionStorageKey } from '../../../enums/sessionStorageKeys';
import {
	CurrentUser,
	useCurrentUserLazyQuery,
} from '../../../generated/graphql';
import { clearSessionStorage } from '../../../utils/sessionStorage';

type CurrentUserContextProps = {
	currentUser: CurrentUser;
	setCurrentUser: (currentUser: CurrentUser) => void;
	logoutUser: () => void;
};

const nulloUser = {
	entityId: '0',
	firstName: '',
	lastName: '',
	token: '',
};

export const CurrentUserContext = createContext<CurrentUserContextProps>({
	currentUser: nulloUser,
	setCurrentUser: () => undefined,
	logoutUser: () => undefined,
});

type CurrentUserProviderProps = {
	children: ReactNode;
};

export const CurrentUserProvider = ({
	children,
}: CurrentUserProviderProps): JSX.Element | null => {
	const [currentUser, setCurrentUser] = useState<CurrentUser>(nulloUser);
	const [getCurrentUserQuery] = useCurrentUserLazyQuery();

	useEffect(() => {
		getCurrentUserQuery().then(({ data }) => {
			if (data?.currentUser.data) {
				setCurrentUser(data.currentUser.data);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const logoutUser = () => {
		setCurrentUser(nulloUser);
		clearSessionStorage(sessionStorageKey.MFT);
	};

	return (
		<CurrentUserContext.Provider
			value={{
				currentUser,
				setCurrentUser,
				logoutUser,
			}}>
			{children}
		</CurrentUserContext.Provider>
	);
};
