import styled from 'styled-components';

type CheckboxLabelProps = { children: React.ReactNode };

export const CheckboxLabel = ({
	children,
}: CheckboxLabelProps): JSX.Element => {
	return <StyledLabel>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
	display: flex;
`;
