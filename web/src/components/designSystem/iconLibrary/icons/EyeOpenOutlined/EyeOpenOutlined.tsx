// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const EyeOpenOutlined = ({
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
			viewBox='0 0 18 12'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='EyeOpenOutlined-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'EyeOpenOutlined'}</title>

			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M5.5 6C5.5 7.933 7.067 9.5 9 9.5C9.92826 9.5 10.8185 9.13125 11.4749 8.47487C12.1313 7.81849 12.5 6.92826 12.5 6C12.5 4.067 10.933 2.5 9 2.5C7.067 2.5 5.5 4.067 5.5 6ZM9 8.5C7.61929 8.5 6.5 7.38071 6.5 6C6.5 4.61929 7.61929 3.5 9 3.5C10.3807 3.5 11.5 4.61929 11.5 6C11.5 6.66304 11.2366 7.29892 10.7678 7.76777C10.2989 8.23661 9.66304 8.5 9 8.5Z'
				fill='current'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M9 0C13.9703 0 18 6 18 6C18 6 13.9703 12 9 12C4.02975 12 0 6 0 6C0 6 4.02975 0 9 0ZM1.48449 6.30823C1.39441 6.19697 1.31291 6.09367 1.24042 6C1.31291 5.90633 1.39441 5.80303 1.48449 5.69178C1.91806 5.1563 2.54397 4.44438 3.3136 3.73558C4.8886 2.28505 6.9001 1 9 1C11.0999 1 13.1114 2.28505 14.6864 3.73558C15.456 4.44438 16.0819 5.1563 16.5155 5.69178C16.6056 5.80303 16.6871 5.90633 16.7596 6C16.6871 6.09367 16.6056 6.19697 16.5155 6.30823C16.0819 6.8437 15.456 7.55562 14.6864 8.26442C13.1114 9.71495 11.0999 11 9 11C6.9001 11 4.8886 9.71495 3.3136 8.26442C2.54397 7.55562 1.91806 6.8437 1.48449 6.30823Z'
				fill='current'
			/>
		</svg>
	);
};