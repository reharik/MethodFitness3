import styled from 'styled-components';
import { Formik, FormikHelpers } from 'formik';
import {
	getModel,
	LoginModel,
	validationSchema,
} from '../formSchemas/signInFormSchema';
import { SubmissionFor } from './forms';
import { ButtonLg } from './designSystem/buttons';
import { Subtitle } from './designSystem/TextComponents';
import { Alert, TNotification } from './Alert';

type SignInFormProps = {
	note?: TNotification;
	clearNote: () => void;
	onSubmit: (values: LoginModel) => void;
};

export const SignInForm = ({ onSubmit, note, clearNote }: SignInFormProps) => {
	const handleSubmit = async (
		values: LoginModel,
		{ setSubmitting }: FormikHelpers<LoginModel>
	) => {
		await onSubmit(values);
		setSubmitting(false);
	};
	const onFormChange = () => {
		if (note) {
			clearNote();
		}
	};
	return (
		<StyledSignIn data-id={'signInContainer'}>
			<StyledSignInOuter>
				<StyledSignInHeader />
				<StyledSignInContent>
					<Alert notification={note} />
					<Formik
						initialValues={getModel()}
						validationSchema={validationSchema()}
						onSubmit={handleSubmit}>
						{({
							isSubmitting,
							isValid,
							handleBlur,
							handleSubmit,
						}) => {
							return (
								<form
									onSubmit={handleSubmit}
									onChange={onFormChange}>
									<StyledHeaderContainer>
										<StyledCol>
											<StyledHeader>Sign In</StyledHeader>
										</StyledCol>
									</StyledHeaderContainer>
									<StyledRow>
										<SubmissionFor
											data-id='login-email-input'
											name='username'
											type='text'
											label='User Name'
										/>
									</StyledRow>
									<StyledRow>
										<SubmissionFor
											data-id='login-password-input'
											name='password'
											type='password'
											label='Password'
										/>
									</StyledRow>
									<StyledFooter>
										<StyledButton>
											<ButtonLg
												disabled={isSubmitting}
												type='submit'
												text='Sign In'
											/>
										</StyledButton>
									</StyledFooter>
								</form>
							);
						}}
					</Formik>
				</StyledSignInContent>
			</StyledSignInOuter>
		</StyledSignIn>
	);
};

const StyledRow = styled.div(
	({ theme: { color } }) => `
	display:flex;
	margin: 0px 30px;

`
);

const StyledHeaderContainer = styled.div(
	({ theme: { color } }) => `
	display: flex;
  justify-content: flex-start;
	margin: 30px 0 10px 30px;
`
);

const StyledCol = styled.div(
	({ theme: { color } }) => `
`
);
const StyledHeader = styled(Subtitle)(
	({ theme: { weight } }) => `
	font-weight: ${weight.semi}
`
);

const StyledFooter = styled.div(
	({ theme: { color } }) => `
	display: flex;
  align-items: center;
	margin: 25px 0 15px 0;
  margin-top: 25px;
  margin-bottom: 15px;
	height: 50px;
  background-color: #f5f5f5;
`
);

const StyledSignIn = styled.div(
	({ theme: { color } }) => `
  background-color: #f2f2f2;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 800px;
`
);

const StyledSignInOuter = styled.div(
	({ theme: { color } }) => `
	width: 385px;
  height: 420px;
`
);

const StyledSignInHeader = styled.div(
	({ theme: { color } }) => `
	background: url('./images/banner-short.jpg') no-repeat #8eb9ce;
  background-size: 385px 73px;
  height: 73px;

`
);

const StyledSignInContent = styled.div(
	({ theme: { color } }) => `
	background: white;
  border: 1px solid #d9d9d9;
`
);

const StyledButton = styled.div(
	({ theme: { color } }) => `
padding-left: 30px;
`
);
