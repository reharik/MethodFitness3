// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const RemoveUserSolid = ({
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
			viewBox='0 0 16 19'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='RemoveUserSolid-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'RemoveUserSolid'}</title>{' '}
			<path
				d='M11.3577 4.46568C11.3577 6.94312 9.41262 8.93135 7.04637 8.93135C4.65354 8.93135 2.73403 6.94326 2.73506 4.46568C2.73506 1.98823 4.68012 0 7.04637 0C9.43817 0 11.3577 1.98703 11.3577 4.46568Z'
				fill='current'
			/>
			<path
				d='M7 15C7 16.1254 7.37181 17.164 7.9993 17.9995L0.78875 17.9989C0.367663 17.9989 0 17.6447 0 17.1819V14.5129C0 12.0354 1.94506 10.0472 4.31131 10.0472H9.75448C10.0797 10.0472 10.4032 10.0883 10.7183 10.1658C8.57787 10.7318 7 12.6816 7 15Z'
				fill='current'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M16 15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15ZM14.5 15C14.5 15.2761 14.2761 15.5 14 15.5C11.7596 15.5 12.5429 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15C9.5 14.7239 9.72386 14.5 10 14.5C12.5429 14.5 11.7596 14.5 14 14.5C14.2761 14.5 14.5 14.7239 14.5 15Z'
				fill='current'
			/>
		</svg>
	);
};
