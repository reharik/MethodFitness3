import styled from 'styled-components';
import { Input } from './Input';
import { Label } from './Label';
import { ErrorMessage, useField } from 'formik';
import { FormElementProps } from '../formTypes';
import { CheckboxLabel } from './CheckboxLabel';
import { P2 } from '../../designSystem/TextComponents';

export const SubmissionFor = <T,>(props: FormElementProps<T>): JSX.Element => {
	const [field, meta] = useField(props.name);
	return (
		<StyledContainer>
			<StyledInput {...props}>
				{props.type === 'checkbox' || props.type === 'radio' ? (
					<CheckboxLabel>
						<Input
							{...props}
							error={meta.error}
							value={field.value}
						/>
						{props.label || props.placeholder}
					</CheckboxLabel>
				) : (
					<>
						<Label {...props} value={field.value} />
						<Input
							{...props}
							value={field.value}
							error={
								meta.touched && meta.error
									? meta.error
									: undefined
							}
						/>
					</>
				)}
			</StyledInput>

			<ErrorMessage name={field.name}>
				{(msg) => (
					<StyledErrorText data-id={`input-error-${props.name}`}>
						{msg}
					</StyledErrorText>
				)}
			</ErrorMessage>
		</StyledContainer>
	);
};

const StyledInput = styled.div<{ width?: string; height?: string }>(
	({ width, height, theme: { spacing } }) => `
	display:flex;
	flex-direction: column;
	justify-content: space-between;
		margin-top: ${spacing.md};
		width: ${width ? width : '317px'};
		height: ${height ? height : '50px'};
	`
);

const StyledErrorText = styled(P2)(
	({ theme: { spacing, color } }) => `
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: ${color.formError};
	padding: ${spacing.xs} 0 0 ${spacing.sm};
	font-style: italic;
	`
);

const StyledContainer = styled.div(
	({ theme: { color } }) => `
	display:flex;
	flex-direction: column;
`
);
