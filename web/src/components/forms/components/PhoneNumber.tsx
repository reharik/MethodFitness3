import { Field, useField } from 'formik';
import styled from 'styled-components';
import { definedProps } from './definedProps';
import { NumericFormat } from 'react-number-format';
import { InputChildrenProps } from '../formTypes';

//TODO: replace this with a lbirary like "intl-tel-input" so we can support multiple countries' phone #'s
export const PhoneNumber = <T,>(props: InputChildrenProps<T>): JSX.Element => {
	const [field] = useField(props.name);
	const definedProps_ = definedProps(props);

	return (
		<NumericFormat
			value={field.value || definedProps_.label}
			format='(###) ###-####'
			mask='_'
			onBlur={field.onBlur}
			onChange={field.onChange}
			{...definedProps_}
			customInput={StyledField}
			placeholder={definedProps_.label as string}
		/>
	);
};

const StyledField = styled(Field)(
	({ value, error, disabled, theme: { color } }) => `
	display: flex;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	background: ${disabled ? color.formDisabledBg : color.white};
	box-sizing: border-box;
	padding-left: 16px;
	color: ${color.formText};
	font-size: 16px;
	transition: 0.2s ease all;
	border: 1px solid ${error ? color.formError : color.inputBorder};
	padding-top: ${value ? '20px' : '0px'};

	&::placeholder {
		color: ${disabled ? color.formTextDisabled : color.formText};
	}

	&:hover {
		border: 1px solid ${disabled ? color.inputBorder : color.inputHover};
		cursor: ${disabled ? 'not-allowed' : 'pointer'};
	}

	&:focus {
		border: 1px solid ${color.inputFocus};
		outline: none;
	}
	`
);
