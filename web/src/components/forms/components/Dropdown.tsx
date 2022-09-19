import styled from 'styled-components';
import { Field, useField } from 'formik';
import { definedProps } from './definedProps';
import { useEffect, useState } from 'react';
import { Icon, iconEnum } from '../../designSystem/iconLibrary';
import { DropdownOption, InputChildrenProps } from '../formTypes';

const Dropdown = <T,>(props: InputChildrenProps<T>): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [field, _, helpers] = useField(props.name);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const { setValue } = helpers;

	useEffect(() => {
		// eslint-disable-next-line no-use-before-define
		if (isOpen) {
			document.addEventListener('keyup', handleKeyPress, false);
		}
		return () => {
			// eslint-disable-next-line no-use-before-define
			document.removeEventListener('keyup', handleKeyPress, false);
		};
	});

	useEffect(() => {
		const onBlurEvent = (e: MouseEvent) => {
			const clickTarget = (e.target as HTMLElement).nodeName;
			const clickName = (e.target as HTMLElement).getAttribute('name');
			const isNotListElement =
				clickTarget !== 'LI' && clickTarget !== 'UL';
			const isBlurClick =
				isOpen && isNotListElement && clickName !== props.name;
			if (isBlurClick) {
				setIsOpen(false);
			}
		};
		if (isOpen) {
			document.addEventListener('mousedown', onBlurEvent);
		}
		return () => document.removeEventListener('mousedown', onBlurEvent);
	}, [isOpen, props.name]);

	//TODO: consider refactor this rule selection. See: https://linushealth.atlassian.net/browse/WEB-1279

	//Animations must be in the component here to access props
	const listTransition = {
		type: 'spring',
		ease: 'anticipate',
		duration: 0.25,
	};

	const definedProps_ = definedProps(props);
	const pValue = (props.value || '') as string;

	const dropdownOptions = definedProps_.dropdownOptions as DropdownOption[];
	const selectedOption = (dropdownOptions || []).find(
		(x) => x.value === pValue
	);
	const display =
		definedProps_.preferDisplayLength === 'long'
			? 'longDisplay' || 'display'
			: 'display';

	const handleKeyPress = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'Enter': {
				if (isOpen && selectedIndex > -1) {
					const val = dropdownOptions[selectedIndex].value;
					handleSelect(val);
					setIsOpen(false);
				}
				break;
			}
			case 'Escape':
				setIsOpen(false);
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : 0);
				break;
			case 'ArrowRight':
			case 'ArrowDown':
				setSelectedIndex(
					selectedIndex < dropdownOptions.length - 1
						? selectedIndex + 1
						: dropdownOptions.length - 1
				);
				break;
			default:
				break;
		}
	};

	const handleClick = () => {
		definedProps_.disabled ? setIsOpen(false) : setIsOpen(!isOpen);
	};

	const handleSelect = (value: string) => {
		if (value === pValue) {
			setValue('');
		} else {
			setValue(value);
		}
	};

	const renderOptions = () => {
		return (dropdownOptions || []).map(
			(option: DropdownOption, idx: number) => (
				<StyledOption
					data-id={option.display}
					key={option.value}
					selected={option.value === pValue || selectedIndex === idx}
					onClick={() => handleSelect(option.value)}>
					{option[display]}
				</StyledOption>
			)
		);
	};

	const getPlaceholder = () => {
		if (selectedOption) {
			return selectedOption[display] as string;
		} else {
			//this grabs placeholder prop
			return (
				(definedProps_.placeholder as string) ||
				(definedProps_.label as string)
			);
		}
	};

	return (
		<StyledSelectField
			data-id={props.name}
			className='dropdownInput'
			onChange={field.onChange}
			onBlur={field.onBlur}
			{...definedProps_}
			as='div'
			onClick={handleClick}>
			<>
				{getPlaceholder()}
				{isOpen && (
					<StyledList data-id={props.name + '_options'}>
						{renderOptions()}
					</StyledList>
				)}
				<StyledArrow>
					{isOpen ? (
						<Icon icon={iconEnum.ArrowUp} title='Close Dropdown' />
					) : (
						<Icon icon={iconEnum.ArrowDown} title='OpenDropdown' />
					)}
				</StyledArrow>
			</>
		</StyledSelectField>
	);
};

export { Dropdown };

const StyledSelectField = styled(Field)(
	({ value, error, disabled, theme: { color } }) => `
	position: relative;
	top: 0;
	display: flex;
	align-items: center;
	width: 100%;
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
	({ selected, theme: { color, spacing } }) => `
	padding: ${spacing.sm};
	border-bottom: 1px solid ${color.dropdownItemBorder};
	background: ${selected ? color.kebabLinkHover : 'auto'};

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
