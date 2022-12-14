// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const MoveEveryDayTapped = ({
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
			viewBox='0 0 33 32'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='MoveEveryDayTapped-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'MoveEveryDayTapped'}</title>
			<rect x='0.5' width='32' height='32' rx='16' fill='#DDA700' />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M20.431 18.3854C20.1876 16.8014 18.8153 13.045 18.8153 13.045L21.3793 6.40744C21.5851 5.87502 21.3203 5.2755 20.7872 5.06976C20.2562 4.86401 19.6552 5.12875 19.4495 5.66191C19.4495 5.66191 17.2969 10.9898 17.1281 11.0399C16.7712 11.1461 16.1303 11.3474 15.6031 11.5783C14.1186 12.2309 11.3083 13.2736 11.3083 13.2736C10.9868 13.3473 10.7191 13.5678 10.5879 13.8687C10.4551 14.1703 10.4736 14.5154 10.638 14.8008L12.4985 18.0344C12.6902 18.367 13.0391 18.5528 13.396 18.5528C13.5715 18.5528 13.7485 18.5078 13.9114 18.4142C14.407 18.1288 14.5773 17.4953 14.2919 16.9998L13.1312 14.9852L14.3384 14.7116L15.8265 18.5078L13.1983 25.5524C12.9697 26.0767 13.2116 26.6859 13.7359 26.9137C13.8701 26.9727 14.0095 27 14.1467 27C14.5471 27 14.9283 26.7662 15.0972 26.3761L18.041 19.7769L19.3905 26.1217C19.4701 26.6342 19.9089 27 20.4118 27C20.4649 27 20.5173 26.9956 20.5704 26.9867C21.1352 26.8997 21.5224 26.3717 21.4361 25.8068C21.4361 25.8068 20.6743 19.9679 20.431 18.3854ZM16.4835 8.94859C16.4835 10.0478 15.5925 10.9389 14.4932 10.9389C13.394 10.9389 12.5029 10.0478 12.5029 8.94859C12.5029 7.84938 13.394 6.95829 14.4932 6.95829C15.5925 6.95829 16.4835 7.84938 16.4835 8.94859Z'
				fill='white'
			/>
		</svg>
	);
};
