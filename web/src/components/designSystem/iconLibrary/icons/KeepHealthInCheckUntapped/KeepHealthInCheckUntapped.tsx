// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const KeepHealthInCheckUntapped = ({
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
			viewBox='0 0 36 36'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='KeepHealthInCheckUntapped-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'KeepHealthInCheckUntapped'}</title>
			<rect
				x='1.25'
				y='1.25'
				width='33.5'
				height='33.5'
				rx='16.75'
				fill='#F2F1F3'
			/>
			<path
				d='M23.9623 18.8172L23.9663 17.6129L25.8291 17.6192C27.2046 11.8108 19.8848 8.28763 17.9368 13.7744C15.6558 8.29108 8.91709 11.6942 10.1492 17.4031L13.7857 17.3844L15.2836 15.4086C15.681 15.0527 16.0265 15.0974 16.3201 15.5428L18.0393 19.7116L19.5208 16.5983C19.7874 16.2069 20.1112 16.1518 20.4922 16.4331L21.6512 17.6023L22.7658 17.613L22.7542 18.8172L21.3921 18.8042C21.2335 18.8026 21.082 18.7386 20.9703 18.626L20.2402 17.8895L18.5438 21.4543C18.3211 21.9223 17.6439 21.9115 17.4434 21.4252L15.6078 16.9745L14.5658 18.3489C14.4527 18.4982 14.2764 18.5863 14.0891 18.5873L10.5182 18.6056C11.4338 20.9102 13.6534 23.489 17.8838 25.968H17.895C22.1895 23.5618 24.465 21.0673 25.4283 18.8222L23.9623 18.8172Z'
				fill='#676671'
			/>
			<circle
				cx='18'
				cy='18'
				r='16.75'
				fill='none'
				stroke='#FB8066'
				stroke-width='1.5'
				stroke-dasharray='3 4'
			/>
		</svg>
	);
};
