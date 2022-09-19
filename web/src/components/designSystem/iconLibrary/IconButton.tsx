import { TIconEnum } from './iconEnum';
import { IconProps } from './icons/flipFunction';
import { EnumItemOf } from '../../../enums/enumeration';
import { SyntheticEvent } from 'react';
import { Icon } from './Icon';
import styled from 'styled-components';

export type IconButtonProps = IconProps & {
	onClick?: (e: SyntheticEvent) => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	tabIndex?: number;
	dataId?: string;
	disabled?: boolean;
	visible?: boolean;
	icon: EnumItemOf<TIconEnum> | keyof TIconEnum;
	containerWidth?: string | number;
	containerHeight?: string | number;
};

export const IconButton = ({
	icon,
	width,
	height,
	color,
	rotate,
	horizontalFlip,
	verticalFlip,
	onClick,
	onMouseEnter,
	onMouseLeave,
	tabIndex = 0,
	dataId,
	disabled,
	visible = true,
	containerWidth,
	containerHeight,
}: IconButtonProps): JSX.Element => {
	visible = visible === undefined ? true : visible;

	return (
		<StyledIcon
			data-id={dataId}
			tabIndex={tabIndex}
			role='button'
			onClick={(e: SyntheticEvent) =>
				onClick && !disabled ? onClick(e) : undefined
			}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			containerWidth={containerWidth}
			containerHeight={containerHeight}
			visible={visible}>
			<Icon
				width={width}
				height={height}
				color={color}
				rotate={rotate}
				horizontalFlip={horizontalFlip}
				verticalFlip={verticalFlip}
				icon={icon}
			/>
		</StyledIcon>
	);
};

type StyledIconProps = {
	containerWidth?: string | number;
	containerHeight?: string | number;
	visible?: boolean;
	onClick?: (e: SyntheticEvent) => void;
};
const StyledIcon = styled.div<StyledIconProps>(
	({ containerWidth, containerHeight, onClick, visible }) => `
	display: flex;
	${containerWidth ? `width:${containerWidth};` : ''};
	${containerHeight ? `height:${containerHeight};` : ''};
	${onClick ? 'cursor: pointer;' : ''}
	align-items: center;
	justify-content: center;
	${visible ? '' : 'visibility: hidden;'};
`
);
