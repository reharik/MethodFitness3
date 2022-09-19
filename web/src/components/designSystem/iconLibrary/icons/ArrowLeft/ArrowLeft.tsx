// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const ArrowLeft = ({
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
			viewBox='0 0 8 14'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='ArrowLeft-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'ArrowLeft'}</title>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M7.35355 0.646445C7.54881 0.841707 7.54881 1.15829 7.35355 1.35355L1.70711 7L7.35355 12.6464C7.54882 12.8417 7.54882 13.1583 7.35355 13.3536C7.15829 13.5488 6.84171 13.5488 6.64645 13.3536L0.646446 7.35355C0.451184 7.15829 0.451184 6.84171 0.646446 6.64645L6.64644 0.646445C6.84171 0.451183 7.15829 0.451183 7.35355 0.646445Z'
				fill='current'
			/>
		</svg>
	);
};