import styled from 'styled-components';
import { ButtonLgText, ButtonSmText } from '../../TextComponents';
import { useTheme } from 'styled-components';
import { Icon } from '../../iconLibrary';
import { ButtonProps } from '../buttonTypes';

/**
 * We can use this Icon commonly wherever Primary Styled Button is needed.
 * This will maintain consistency across all Primary Styled Buttons.
 */
export const ButtonLg = ({
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
		<StyledButtonLg
			width={width}
			onClick={onClick}
			type={type || 'button'}
			disabled={disabled}
			fillColor={fillColor}
			hoverFillColor={hoverFillColor}
			primary={primary}
			data-id={dataId}>
			{showIconLeft()}
			{showCenter()}
			{showIconRight()}
		</StyledButtonLg>
	);
};

type StyledButtonLgProps = {
	width?: string;
	primary?: boolean;
	fillColor: string;
	hoverFillColor: string;
};
const StyledButtonLg = styled.button<StyledButtonLgProps>(
	({
		primary,
		hoverFillColor,
		fillColor,
		width,
		disabled,
		theme: { color, boxShadow },
	}) => `
	border: ${disabled ? 'none' : primary ? 'none' : `1px solid  #b7d6de;`};
	border-radius: 4px;
	height: 27px;
	width: ${width || 'auto'};
	cursor: ${disabled ? 'not-allowed' : 'auto'};
	background: url('../images/button-save-bg.png') repeat-x scroll 0 0 #cccccc;
	display: flex;
	align-items: center;
    justify-content: space-evenly;
	transition: 0.10s ease all;
	color: ${disabled ? color.textDisabled : primary ? color.white : '#437182'};

	&:hover {
		background: ${
			disabled
				? fillColor
				: " url('../images/button-save-bg-hover.png') repeat-x scroll 0 0 #cccccc;"
		};
		cursor: ${disabled ? 'not-allowed' : 'pointer'};
		box-shadow:${disabled ? 'none' : boxShadow.button};
	}

	&:focus {
		outline: none;
		background: ${
			primary
				? color.primaryButtonHover
				: " url('../images/button-save-bg-active.png') repeat-x scroll 0 0 #cccccc;"
		};
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
