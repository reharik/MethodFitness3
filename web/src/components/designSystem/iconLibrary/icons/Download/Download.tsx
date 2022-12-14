// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const Download = ({
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
			viewBox='0 0 16 12'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='Download-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'Download'}</title>

			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M8.69539 0.459899C8.69539 0.205923 8.4549 3.5489e-05 8.15825 3.54595e-05C7.86159 3.543e-05 7.6211 0.205923 7.6211 0.459899L7.6211 7.02393L4.69635 4.51998C4.48658 4.34039 4.14648 4.34039 3.93671 4.51998C3.72694 4.69957 3.72694 4.99074 3.93671 5.17033L7.77282 8.45451C7.87043 8.54059 8.00704 8.59408 8.15824 8.59408C8.30938 8.59408 8.44594 8.54064 8.54354 8.45463L12.3798 5.17033C12.5896 4.99074 12.5896 4.69957 12.3798 4.51998C12.17 4.34039 11.8299 4.34039 11.6201 4.51998L8.69539 7.02394L8.69539 0.459899ZM15.5 11C15.7761 11 16 11.2239 16 11.5C16 11.7761 15.7761 12 15.5 12L0.499999 12C0.223857 12 -1.89015e-06 11.7761 -1.86894e-06 11.5C-1.84772e-06 11.2239 0.223857 11 0.499999 11L15.5 11Z'
				fill='current'
			/>
		</svg>
	);
};
