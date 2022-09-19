import styled from 'styled-components';
import { Field } from 'formik';
import { definedProps } from './definedProps';
import { InputChildrenProps } from '../formTypes';

export const Text = <T,>(props: InputChildrenProps<T>): JSX.Element => {
	const definedProps_ = definedProps(props);

	return <StyledField {...definedProps_} />;
};

const StyledField = styled(Field)(
	({ value, error, disabled, theme: { color, fontSize } }) => `
	display: flex;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	background: ${disabled ? color.formDisabledBg : color.white};
	box-sizing: border-box;
	color: ${color.formText};
	font-size: ${fontSize._14};
	transition: 0.2s ease all;
	border: 1px solid ${error ? color.formError : color.inputBorder};
	padding: 0 10px 0 10px;
|
	&::placeholder {
		color: ${disabled ? color.formTextDisabled : color.formText};
	}

	&:hover {
		border: 1px solid ${disabled ? color.inputBorder : color.inputHover};
		cursor: ${disabled ? 'not-allowed' : 'text'};
	}

	&:focus {
		border: 1px solid ${color.inputFocus};
		outline: none;
	}
	`
);
