import { useField, useFormikContext } from 'formik';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { ReactNode } from 'react';
import { InputChildrenProps } from '../formTypes';

const DateInput = <T,>({
	name,
	label,
	value,
	dateFormat = 'MM/dd/yyyy',
}: InputChildrenProps<T>): JSX.Element => {
	const { setFieldValue, setFieldTouched } = useFormikContext();
	const [field] = useField(name);
	const pValue = (value || '') as string;

	//State management for selected data, initialized with preexisting data or nothing
	const formattedDate = value ? new Date(pValue) : undefined;
	const handleChange = (val: Date): void => {
		setFieldValue(name, val?.toISOString());
	};
	const handleOnTouched = () => {
		setFieldTouched(field.name, true, true);
	};
	return (
		<StyledDatePicker
			name={field.name}
			selected={formattedDate}
			isSelected={!!formattedDate}
			dateFormat={dateFormat}
			placeholderText={label}
			showMonthDropdown
			showYearDropdown
			dropdownMode='select'
			popperContainer={PopperContainer}
			popperPlacement='bottom-end'
			onChange={handleChange}
			onChangeRaw={handleOnTouched}
			autoComplete='off'
			maxDate={new Date('12-31-9999')}
		/>
	);
};

export { DateInput };

//Custom container for popup calendar, in order to control its z-index
const PopperContainer = (props: { children: ReactNode[] }): JSX.Element => {
	return <StyledWrapper>{props.children}</StyledWrapper>;
};
const StyledWrapper = styled.div`
	position: absolute;
	z-index: 2;
`;

type StyledDatePickerProps = {
	isSelected: boolean;
};
const StyledDatePicker = styled(DatePicker)<StyledDatePickerProps>(
	({ isSelected, theme: { color } }) => `
	display: flex;
	align-items: flex-end;
	width: 100%;
	height: 64px;
	border-radius: 6px;
	background: ${color.white};
	box-sizing: border-box;
	padding: 20px 23px ${isSelected ? '0px' : '20px'} 23px;
	color: ${color.formText};
	font-size: 16px;
	transition: 0.2s ease all;
	border: 1px solid ${color.inputBorder};

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
