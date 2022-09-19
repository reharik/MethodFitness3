import styled from 'styled-components';
import { ButtonSmText } from '../../TextComponents';
import { useTheme } from 'styled-components';
import { Icon } from '../../iconLibrary';
import { ButtonProps } from '../buttonTypes';

/**
 * We can use this component commonly wherever Primary Styled Button is needed.
 * This will maintain consistency across all Primary Styled Buttons.
 */
export const ButtonSm = ({
	onClick,
	type = 'button',
	disabled,
	width,
	text,
	primary,
	IconRight,
	IconCenter,
	IconLeft,
	dataId,
	dataTestId,
}: ButtonProps): JSX.Element => {
	const theme = useTheme();
	let fillColor = theme.color.white;
	if (primary) {
		fillColor = theme.color.primaryButtonBg;
	}
	if (disabled) {
		fillColor = theme.color.buttonDisabled;
	}

	let hoverFillColor = theme.color.white;
	if (primary) {
		hoverFillColor = theme.color.primaryButtonHover;
	}
	if (disabled) {
		hoverFillColor = theme.color.white;
	}

	let iconColor = theme.color.white;
	if (disabled) {
		iconColor = theme.color.textDisabled;
	}
	if (!primary) {
		iconColor = theme.color.secondaryButtonColor;
	}

	const showIconLeft = () => {
		if (!IconLeft) {
			return null;
		}
		return <Icon icon={IconLeft} color={iconColor} />;
	};
	const showCenter = () => {
		if (IconCenter) {
			return <Icon icon={IconCenter} color={iconColor} />;
		} else {
			return (
				<ButtonSmText disabled={disabled} primary={primary}>
					{text}
				</ButtonSmText>
			);
		}
	};
	const showIconRight = () => {
		if (!IconRight) {
			return null;
		}
		return <Icon icon={IconRight} color={iconColor} />;
	};
	return (
		<StyledButtonSm
			width={width}
			onClick={onClick}
			type={type || 'button'}
			disabled={disabled}
			fillColor={fillColor}
			hoverFillColor={hoverFillColor}
			primary={primary}
			data-id={dataId}
			data-testid={dataTestId}
			id={text?.replace(/\s+/g, '-').toLowerCase()}>
			{showIconLeft()}
			{showCenter()}
			{showIconRight()}
		</StyledButtonSm>
	);
};

type StyledButtonSmProps = {
	width?: string;
	primary?: boolean;
	fillColor: string;
	hoverFillColor: string;
};
const StyledButtonSm = styled.button<StyledButtonSmProps>(
	({
		primary,
		hoverFillColor,
		fillColor,
		width,
		disabled,
		theme: { color, spacing, boxShadow },
	}) => `
	border: ${
		disabled
			? 'none'
			: primary
			? 'none'
			: `2px solid ${color.secondaryButtonBorder}`
	};
	padding: 0 ${spacing.md};
	border-radius: 30px;
	height: 40px;
	width: ${width || 'auto'};
	cursor: ${disabled ? 'not-allowed' : 'auto'};
	background: ${fillColor};
	display: flex;
	align-items: center;
    justify-content: space-evenly;
	transition: 0.10s ease all;
	color: ${
		disabled
			? color.textDisabled
			: primary
			? color.white
			: color.secondaryButtonColor
	};

	&:hover {
		background: ${disabled ? fillColor : hoverFillColor};
		cursor: ${disabled ? 'not-allowed' : 'pointer'};
		box-shadow:${disabled ? 'none' : boxShadow.button};
	}

	&:focus {
		outline: none;
		background: ${primary ? color.primaryButtonHover : color.white};
		border:${
			primary
				? ' 2px solid ' + color.primaryButtonFocusBorder
				: '1.5px solid ' + color.secondaryButtonFocusBorder
		};
		color: ${
			primary
				? color.primaryButtonFocusText
				: color.secondaryButtonFocusText
		};
	}
	`
);
