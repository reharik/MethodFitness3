// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const Test = ({
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
			viewBox='0 0 80 100'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='Test-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'Test'}</title>
			<path
				d='M42.5253 61.9482C35.5043 50.7866 30.4509 38.4765 27.597 25.5705L33.398 25.5705C36.067 36.9483 40.5511 47.8249 46.6772 57.7714L42.5253 61.9482Z'
				stroke='#FFD75E'
				stroke-width='49.7605'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
