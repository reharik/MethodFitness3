import { Field } from 'formik';
import styled from 'styled-components';
import { InputChildrenProps } from '../formTypes';

export const RadioButton = <T,>({
	name,
	value,
}: InputChildrenProps<T>): JSX.Element => {
	return <StyledRadio name={name} type='radio' value={value} />;
};

const StyledRadio = styled(Field)`
	margin-right: 10px;
	width: 20px;
	height: 20px;
`;
