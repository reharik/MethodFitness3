import styled from 'styled-components';
import { Caption } from '../../designSystem/TextComponents';
import { InputChildrenProps } from '../formTypes';

// The trailing comma in  <ObjectType, > is added due to constraints of the  .tsx file extension.
// You can read more in the TypeScript Generics. Discussing naming conventions
// https://wanago.io/2020/02/17/typescript-generics-discussing-naming-conventions/
export const Label = <T,>({
	name,
	value,
	placeholder,
	disabled,
	label,
}: InputChildrenProps<T>): JSX.Element => {
	return (
		<StyledLabel htmlFor={name}>
			<StyledText disabled={disabled}></StyledText>
			{label || placeholder}
		</StyledLabel>
	);
};

const StyledLabel = styled.label(
	({ theme: { spacing } }) => `
		margin-bottom: ${spacing.xs};
	`
);
type StyledTextProps = {
	disabled?: boolean;
};
const StyledText = styled(Caption)<StyledTextProps>(
	({ disabled, theme: { color, weight } }) => `
	color: ${disabled ? color.formTextDisabled : color.label};
	font-weight: ${weight.medium};
	`
);
