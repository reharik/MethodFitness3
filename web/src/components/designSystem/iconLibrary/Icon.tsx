import * as Icons from './icons/index';
import { iconEnum, TIconEnum } from './iconEnum';
import { IconProps } from './icons/flipFunction';
import { EnumItemOf } from '../../../enums/enumeration';

export const Icon = ({
	width,
	height,
	color,
	rotate,
	horizontalFlip,
	verticalFlip,
	icon,
}: IconProps & {
	icon: EnumItemOf<TIconEnum> | keyof TIconEnum;
}): JSX.Element | null => {
	const icon_ = typeof icon === 'object' ? icon : iconEnum[icon];
	if (!icon_) {
		// TODO we may want to return an "unknown" icon or something
		return null;
	}
	const IconComponent = Icons[icon_.value as keyof typeof Icons];
	return (
		<IconComponent
			width={width}
			height={height}
			color={color}
			rotate={rotate}
			horizontalFlip={horizontalFlip}
			verticalFlip={verticalFlip}
		/>
	);
};
