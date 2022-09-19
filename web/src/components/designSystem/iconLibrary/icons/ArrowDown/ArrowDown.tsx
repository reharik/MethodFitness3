// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const ArrowDown = ({
	title,
	width = '24',
	height = '24',
	color = '#676671',
	rotate = 0,
	horizontalFlip = false,
	verticalFlip = false,
}: IconProps): JSX.Element => {
	const { scaleX, scaleY, translateX, translateY } = flipFunction({
		horizontalFlip,
		verticalFlip,
	});
	return (
		<svg
			viewBox='0 0 14 8'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='ArrowDown-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'ArrowDown'}</title>

			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M0.646446 0.646448C0.841708 0.451185 1.15829 0.451185 1.35355 0.646447L7 6.29289L12.6464 0.646447C12.8417 0.451185 13.1583 0.451185 13.3536 0.646447C13.5488 0.841709 13.5488 1.15829 13.3536 1.35355L7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L0.646446 1.35355C0.451184 1.15829 0.451184 0.84171 0.646446 0.646448Z'
				fill='current'
			/>
		</svg>
	);
};
