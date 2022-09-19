// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const CheckboxEmpty = ({
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
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='CheckboxEmpty-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'CheckboxEmpty'}</title>

			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M2 5.53324C2 3.57649 3.55297 2 5.48054 2H18.5195C20.4473 2 22 3.57649 22 5.53324V18.4665C22 20.4235 20.4473 22 18.5195 22H5.48054C3.55297 22 2 20.4235 2 18.4665V5.53324ZM20 5.81848C20 4.80524 19.2078 4 18.2111 4H5.78927C4.79231 4 4.00003 4.80524 4.00003 5.81848V18.1815C4.00003 19.1948 4.79231 20 5.78927 20H18.2111C19.2078 20 20 19.1948 20 18.1815V5.81848Z'
				fill='current'
			/>
		</svg>
	);
};