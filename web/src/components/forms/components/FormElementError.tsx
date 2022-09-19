import styled from 'styled-components';

const FormElementError = styled.div(
	({ theme: { color, spacing } }) => `
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: ${color.formError};
		padding: 0 0 0 ${spacing.md};
	`
);

export { FormElementError };
