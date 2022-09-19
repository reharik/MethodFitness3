import * as yup from 'yup';

export type LoginModel = {
	username: string;
	password: string;
};

export const getModel = (): LoginModel => {
	return { username: '', password: '' };
};

export const validationSchema = () => {
	return yup.object().shape({
		username: yup.string().required(`UserName Required`),
		password: yup.string().required(`Password Required`),
	});
};
