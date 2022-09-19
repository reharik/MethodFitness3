import { useState } from 'react';
import styled from 'styled-components';
import { Text } from './Text';
import { Label } from './Label';
import { Icon, iconEnum } from '../../designSystem/iconLibrary';
import { ErrorMessage, useField } from 'formik';
import { FormElementProps } from '../formTypes';
import { StyledLinkButton } from '../../designSystem/buttons';
import { P2 } from '../../designSystem/TextComponents';

export const PasswordInput = <T,>({
	name = 'password',
	label = 'Password',
	width,
}: FormElementProps<T>): JSX.Element => {
	const [showPassword, setShowPassword] = useState(false);
	const [field, meta] = useField(name);

	const handleClick = () => {
		setShowPassword(!showPassword);
	};

	return (
		<StyledContainer width={width}>
			<Label name={name} value={field.value} placeholder={label} />
			<Text
				data-id={`input-text-${name}`}
				type={showPassword ? 'text' : 'password'}
				name={name}
				placeholder={label}
				value={field.value}
				error={meta.touched && meta.error ? meta.error : undefined}
			/>
			<StyledShowPasswordButton
				type='button'
				role='link'
				onClick={handleClick}>
				{showPassword ? (
					<Icon icon={iconEnum.EyeOpenOutlined} title='eyeOpenIcon' />
				) : (
					<Icon
						icon={iconEnum.EyeClosedOutlined}
						title='eyeClosedIcon'
					/>
				)}
			</StyledShowPasswordButton>
			<ErrorMessage name={field.name}>
				{(msg) => (
					<StyledErrorText data-id={`input-error-${name}`}>
						{msg}
					</StyledErrorText>
				)}
			</ErrorMessage>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<{ width?: string }>(
	({ width }) => `
	position: relative;
	margin: 16px 0;
	width: ${width ? width : '317px'};
	height: 64px;
	`
);

const StyledShowPasswordButton = styled(StyledLinkButton)`
	position: absolute;
	right: 16px;
	top: 21px;
	padding: 0;
`;

const StyledErrorText = styled(P2)(
	({ theme: { spacing, color } }) => `
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: ${color.formError};
	padding: ${spacing.xs} 0 0 ${spacing.md};
	font-style: italic;
	`
);
