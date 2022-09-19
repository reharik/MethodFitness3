import styled from 'styled-components';
import { Field, useField } from 'formik';
import { definedProps } from './definedProps';
import { SyntheticEvent, useEffect, useState } from 'react';
import { truncateString } from '../utils/stringUtils';
import { Icon, iconEnum } from '../../designSystem/iconLibrary';
import { DropdownOption, InputChildrenProps } from '../formTypes';

const MultiSelectDropdown = <T,>(props: InputChildrenProps<T>): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [field, _, helpers] = useField(props.name);
	const { setValue, setTouched } = helpers;
	const value = (props.value || '') as string;
	useEffect(() => {
		const onBlurEvent = (e: MouseEvent) => {
			setTouched(true);
			const isTarget = (node?: HTMLElement): boolean => {
				if (node?.getAttribute('name') === props.name) {
					return true;
				}
				if (!node || node.nodeName === 'form' || !node.parentElement) {
					return false;
				}

				return isTarget(node.parentElement);
			};
			const shouldStayOpen = isTarget(e.target as HTMLElement);
			setIsOpen(shouldStayOpen);
		};
		if (isOpen) {
			document.addEventListener('mousedown', onBlurEvent);
		}
		return () => {
			return document.removeEventListener('mousedown', onBlurEvent);
		};
	}, [isOpen, props.name, setValue, setTouched]);

	const definedProps_ = definedProps(props);
	const dropdownOptions = definedProps_.dropdownOptions as DropdownOption[];
	const display =
		definedProps_.preferDisplayLength === 'long'
			? 'longDisplay' || 'display'
			: 'display';

	const handleSelect = (item: DropdownOption, e?: SyntheticEvent) => {
		e?.stopPropagation();
		const valueArray = value ? value.split(', ') : [];
		const index = valueArray.findIndex((x: string) => x === item.value);
		if (index >= 0) {
			valueArray.splice(index, 1);
		} else {
			valueArray.push(item.value);
		}
		setValue(valueArray.join(', '));
	};

	const handleClick = () => {
		definedProps_.disabled ? setIsOpen(false) : setIsOpen(!isOpen);
	};

	const renderOptions = () => {
		return (dropdownOptions || []).map(
			(option: DropdownOption, idx: number) => {
				const isSelected = value
					.split(', ')
					.some((item: string) => item === option.value);
				return (
					<StyledOption
						tabIndex={0}
						data-id={option.display}
						key={option.value}
						selected={isSelected}
						onClick={(e: SyntheticEvent) =>
							handleSelect(option, e)
						}>
						<StyledLabel>
							{isSelected ? (
								<StyledCheckImage>
									<Icon
										icon={iconEnum.CheckboxCheck}
										title='checked'
									/>
								</StyledCheckImage>
							) : (
								<StyledCheckImage>
									<Icon
										icon={iconEnum.CheckboxEmpty}
										title='notChecked'
									/>
								</StyledCheckImage>
							)}

							<StyledOptionText>
								{option[display]}
							</StyledOptionText>

							{isSelected && (
								<StyledSideCheck>
									<Icon icon={iconEnum.CheckboxSideCheck} />
								</StyledSideCheck>
							)}
						</StyledLabel>
					</StyledOption>
				);
			}
		);
	};

	//Get width from props as a num or default to 317
	const widthNum = props.width ? Number(props.width.split('px')[0]) : 317;
	//Get maxChar value from desired width, accounting for about 10px per char
	const maxChars = Math.floor(widthNum / 10);

	const getPlaceholder = () => {
		if (value && typeof value === 'string') {
			const values = value.split(',');
			const ops = (dropdownOptions || []).filter((op) =>
				values.some((item: string) => item.trim() === op.value)
			);
			if (ops.length === 1) {
				return truncateString(
					(ops[0][display] as string) || '',
					maxChars
				);
			}
			return ops.length + ' selected';
		}
		return definedProps_.placeholder || definedProps_.label;
	};

	return (
		<StyledSelectField
			className='dropdownInput'
			onChange={field.onChange}
			{...definedProps_}
			as='div'
			onClick={handleClick}>
			<>
				{getPlaceholder()}
				{isOpen && <StyledList>{renderOptions()}</StyledList>}
				<StyledArrow>
					{isOpen ? (
						<Icon icon={iconEnum.ArrowUp} title='closeDropdown' />
					) : (
						<Icon icon={iconEnum.ArrowDown} title='openDropdown' />
					)}
				</StyledArrow>
			</>
		</StyledSelectField>
	);
};

export { MultiSelectDropdown };

const StyledSelectField = styled(Field)(
	({ width, value, error, disabled, theme: { color } }) => `
	position: relative;
	top: 0;
	display: flex;
	align-items: center;
	width: ${width || '317px'};
	height: 100%;
	border-radius: 6px;
	background: ${disabled ? color.formDisabledBg : color.white};
	box-sizing: border-box;
	padding: 0 23px;
	color: ${disabled ? color.formTextDisabled : color.formText};
	font-size: 16px;
	transition: 0.2s ease all;
	border: 1px solid ${error ? color.formError : color.inputBorder};
	padding-top: ${value ? '20px' : '0px'};
	justify-content: space-between;

	&:hover {
		border: 1px solid ${disabled ? color.inputBorder : color.inputHover};
		cursor: ${disabled ? 'not-allowed' : 'pointer'};
	}

	&:focus {
		border: 1px solid ${color.inputHover};
		outline: none;
	}
	`
);
const StyledList = styled.ul(
	({ theme: { boxShadow, spacing, color } }) => `
	position: absolute;
	top: calc((100% + 32px) * -1);
	left: -1px;
	padding: ${spacing.sm};
	width: calc(100% + 2px);
	max-height: 204px;
	background: white;
	border: 1px solid ${color.inputFocus};
	border-radius: 10px;
	box-shadow: ${boxShadow.standard};
	overflow: auto;

	&::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 12px;
	}
	&::-webkit-scrollbar-track {
		-webkit-appearance: none;
		margin: ${spacing.sm} 0;
		background: ${color.formDisabledBg};
		border-radius: 10px;
		box-shadow: inset ${boxShadow.standard};
	}
	&::-webkit-scrollbar-thumb {
		-webkit-appearance: none;
		background: ${color.dropdownItemBorder};
		border-radius: 10px;
	}
`
);
type StyledOptionProps = {
	selected: boolean;
};

const StyledOption = styled.li<StyledOptionProps>(
	({ selected, theme: { color, spacing, weight } }) => `
	padding: ${spacing.sm};
	border-bottom: 1px solid ${color.dropdownItemBorder};
	background: ${selected ? color.kebabLinkHover : 'auto'};
	font-weight: ${selected ? weight.bold : weight.regular};
	overflow: hidden;

	&:hover {
		background: ${color.kebabLinkHover};
	}

	&:last-of-type {
		border-bottom: none;
	}
`
);
const StyledArrow = styled.div`
	justify-self: flex-end;
	transition: 0.15s ease all;
`;
const StyledCheckImage = styled.div(
	({ theme: { spacing } }) => `
	margin: 0 ${spacing.sm} 0 0;
	
`
);
const StyledSideCheck = styled.div(
	({ theme: { color } }) => `

`
);
const StyledLabel = styled.label(
	({ theme: { color } }) => `
	display: flex;
	align-items: center;

	&:hover {
		cursor: pointer;
	}
`
);
const StyledOptionText = styled.span(
	({ theme: { color } }) => `
	width: 256px;
	color: ${color.bodyText};
`
);

//Framer Motion Animations
const listTransition = {
	type: 'spring',
	ease: 'anticipate',
	duration: 0.25,
};
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
const sideCheckTransition = {
	type: 'spring',
	ease: 'anticipate',
	duration: 0.5,
};
