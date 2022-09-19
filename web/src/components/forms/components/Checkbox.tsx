import { useField } from 'formik';
import styled from 'styled-components';
import { Icon, iconEnum } from '../../designSystem/iconLibrary';
import { InputChildrenProps } from '../formTypes';

export const Checkbox = <T,>({ name }: InputChildrenProps<T>): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [field, _, helpers] = useField(name);
	const { setValue } = helpers;
	const handleClick = () => {
		setValue(field.value ? !field.value : true);
	};
	return (
		<StyledCheckbox onClick={handleClick}>
			{field.value ? (
				<Icon icon={iconEnum.CheckboxCheck} title={`Checked`} />
			) : (
				<Icon icon={iconEnum.CheckboxEmpty} title={`Not Checked`} />
			)}
		</StyledCheckbox>
	);
};

const StyledCheckbox = styled.div`
	margin-right: 10px;

	&:hover {
		cursor: pointer;
	}
`;

const checkboxVariants = {
	initial: {
		opacity: 0,
		scale: 0.25,
		rotate: -30,
	},
	in: {
		opacity: 1,
		scale: 1,
		rotate: 0,
	},
	out: {
		opacity: 0,
		scale: 0.25,
		rotate: -30,
	},
};
const checkboxTransition = {
	type: 'spring',
	ease: 'anticipate',
	duration: 0.2,
};
