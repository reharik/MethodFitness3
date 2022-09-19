// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const ArrowDecrease = ({
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
			viewBox='0 0 19 12'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='ArrowDecrease-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'ArrowDecrease'}</title>

			<path
				d='M1.16702 0.666748C0.762559 0.666748 0.397923 0.926634 0.243142 1.32522C0.0883609 1.72381 0.173917 2.1826 0.459915 2.48766L8.45991 11.021C8.85044 11.4376 9.4836 11.4376 9.87413 11.021L17.8741 2.48766C18.1601 2.1826 18.2457 1.72381 18.0909 1.32522C17.9361 0.926634 17.5715 0.666748 17.167 0.666748H1.16702Z'
				fill='current'
			/>
		</svg>
	);
};
