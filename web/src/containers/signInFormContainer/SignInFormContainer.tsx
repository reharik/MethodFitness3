import { SignInForm } from '../../components/SignInForm';
import { LoginModel } from '../../formSchemas/signInFormSchema';
import { useContext, useState } from 'react';
import { notificationType } from '../../enums/notificationType';
import { TNotification } from '../../components/Alert';
import { fetchUtil } from '../../utils/fetchUtil';
import { config } from '../../config';
import { useAuthenticateMutation } from '../../generated/graphql';
import { setSessionStorage } from '../../utils/sessionStorage';
import { sessionStorageKey } from '../../enums/sessionStorageKeys';
import { CurrentUserContext } from '../../components/providers/currentUserProvider/CurrentUserProvider';
import { useNavigate } from 'react-router';

const errorNotification: TNotification = {
	type: notificationType.error,
	message: `There was an error logging in.
Please check your user name and password`,
};

export const SignInFormContainer = () => {
	const [note, setNote] = useState<TNotification>();
	const { setCurrentUser } = useContext(CurrentUserContext);
	const [authenticateMutation] = useAuthenticateMutation();
	const loginPath = `/Login/Login`;
	const navigate = useNavigate();

	const clearNote = () => {
		setNote(undefined);
	};
	const onSubmit = async (values: LoginModel) => {
		const url = config.apiProxyUrl + loginPath;
		const result = await fetchUtil({
			url,
			method: 'POST',
			body: {
				UserName: values.username,
				Password: values.password,
			},
		});

		if (!result.data.Success) {
			setNote(errorNotification);
			return;
		}
		const authResult = await authenticateMutation({
			variables: {
				authenticateInput: {
					userName: values.username,
					password: values.password,
				},
			},
		});
		const authentication = authResult.data?.authenticate;
		if (authentication?.success && authentication?.data) {
			setSessionStorage(
				authentication.data?.token,
				sessionStorageKey.MFT
			);
			setCurrentUser(authentication.data);
		}
		window.location.replace('/scheduler#calendar');
		// build currentUser

		navigate('schedule');
	};
	return <SignInForm onSubmit={onSubmit} note={note} clearNote={clearNote} />;
};
