import { useContext } from 'react';
import { CurrentUserContext } from '../components/providers/currentUserProvider/CurrentUserProvider';
import { Root } from '../components/Root';

export const RootContainer = () => {
	const { currentUser } = useContext(CurrentUserContext);

	return <Root isAuthenticated={currentUser.authenticated || false} />;
};
