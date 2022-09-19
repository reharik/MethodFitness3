import { SignInFormContainer } from '../containers/signInFormContainer/SignInFormContainer';
import { Layout } from './layout';

type RootProps = {
	isAuthenticated: boolean;
};

export const Root = ({ isAuthenticated }: RootProps) => {
	if (isAuthenticated) {
		return <Layout isReady={true}>FU</Layout>;
	}
	return <SignInFormContainer />;
};
