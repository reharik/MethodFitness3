import { Field, useField } from 'formik';
import styled from 'styled-components';
import { definedProps } from './definedProps';
import { InputChildrenProps } from '../formTypes';

const TextArea = <T,>(props: InputChildrenProps<T>): JSX.Element => {
	const [field] = useField(props.name);
	const definedProps_ = definedProps(props);
	const placeholder = props.placeholder || props.label;

	return (
		<>
			<StyledField
				onChange={field.onChange}
				onBlur={field.onBlur}
				{...definedProps_}
				as='textarea'
				placeholder={`${placeholder}`}
			/>
			<StyledScrollBlocker value={field.value} width={props.width} />
		</>
	);
};

export { TextArea };

const StyledField = styled(Field)(
	({ value, error, theme: { color } }) => `
	display: flex;
	align-items: flex-end;
	width: 100%;
	border-radius: 6px;
	background: ${color.white};
	box-sizing: border-box;
	color: ${color.formText};
	font-size: 16px;
	transition: 0.2s ease all;
	border: 1px solid ${error ? color.formError : color.inputBorder};
	padding: ${value ? '30px' : '20px'} 23px 0 23px;
	position: relative;

	&::placeholder {
		color: ${color.formText};
	}

	&:hover {
		border: 1px solid ${color.inputHover};
	}

	&:focus {
		border: 1px solid ${color.inputFocus};
		outline: none;
	}
	`
);

type StyledScrollBlockerProps = {
	disabled?: boolean;
	width?: string;
	value: string;
};
const StyledScrollBlocker = styled.div<StyledScrollBlockerProps>(
	({ value, width, disabled, theme: { color } }) => `
	height: 32px;
	background: ${disabled ? 'none' : color.white};
	position: absolute;
	top: 1px;
	left: 1px;
	z-index: 0;
	border-radius: 8px 8px 0 0;
	width: ${value ? `calc(${width || '317px'} - 20px)` : '0px'};
`
);
