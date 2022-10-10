import { createContext, ReactNode, useEffect, useState } from 'react';
import { sessionStorageKey } from '../../../enums/sessionStorageKeys';
import {
	CurrentUser,
	useCurrentUserLazyQuery,
} from '../../../generated/graphql';
import { clearSessionStorage } from '../../../utils/sessionStorage';

type CurrentUserContextProps = {
	currentUser: CurrentUser & { loginChecked?: boolean };
	setCurrentUser: (currentUser: CurrentUser) => void;
	logoutUser: () => void;
};

const nulloUser = {
	entityId: '0',
	firstName: '',
	lastName: '',
	token: '',
	loginChecked: false,
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
	const [currentUser, setCurrentUser] = useState<
		CurrentUser & { loginChecked?: boolean }
	>(nulloUser);
	const [getCurrentUserQuery] = useCurrentUserLazyQuery();

	useEffect(() => {
		getCurrentUserQuery().then(({ data }) => {
			if (data?.currentUser.data) {
				setCurrentUser(data.currentUser.data);
			} else {
				setCurrentUser((state) => ({ ...state, loginChecked: true }));
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const logoutUser = () => {
		setCurrentUser(nulloUser);
		clearSessionStorage(sessionStorageKey.MFT);
		window.location.replace('signin');
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
