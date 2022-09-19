// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const Close = ({
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
			viewBox='0 0 14 14'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='Close-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'Close'}</title>

			<path
				d='M13.5303 1.53154C13.8232 1.23865 13.8232 0.763775 13.5303 0.470882C13.2374 0.177989 12.7626 0.177989 12.4697 0.470882L13.5303 1.53154ZM0.46967 12.4709C0.176777 12.7638 0.176777 13.2386 0.46967 13.5315C0.762563 13.8244 1.23744 13.8244 1.53033 13.5315L0.46967 12.4709ZM12.4697 13.5314C12.7626 13.8243 13.2374 13.8243 13.5304 13.5315C13.8233 13.2386 13.8233 12.7637 13.5304 12.4708L12.4697 13.5314ZM1.53097 0.469706C1.2381 0.176793 0.763225 0.17676 0.470312 0.469634C0.177399 0.762507 0.177366 1.23738 0.47024 1.53029L1.53097 0.469706ZM12.4697 0.470882L0.46967 12.4709L1.53033 13.5315L13.5303 1.53154L12.4697 0.470882ZM13.5304 12.4708L1.53097 0.469706L0.47024 1.53029L12.4697 13.5314L13.5304 12.4708Z'
				fill='current'
			/>
		</svg>
	);
};
