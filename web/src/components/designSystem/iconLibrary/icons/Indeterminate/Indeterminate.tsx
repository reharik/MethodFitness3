// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const Indeterminate = ({
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
			viewBox='0 0 14 4'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='Indeterminate-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'Indeterminate'}</title>

			<path
				d='M1.90133 0.500977C1.0798 0.500977 0.5 1.22268 0.5 2.00098C0.5 2.77927 1.0798 3.50098 1.90133 3.50098H12.0987C12.9202 3.50098 13.5 2.77927 13.5 2.00098C13.5 1.22268 12.9202 0.500977 12.0987 0.500977H1.90133Z'
				fill='current'
				stroke='current'
			/>
		</svg>
	);
};