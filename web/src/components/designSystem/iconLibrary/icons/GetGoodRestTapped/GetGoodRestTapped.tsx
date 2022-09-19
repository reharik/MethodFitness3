// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const GetGoodRestTapped = ({
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
			data-testid='GetGoodRestTapped-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'GetGoodRestTapped'}</title>
			<rect x='0.5' width='32' height='32' rx='16' fill='#087DAE' />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M23.9598 12.4805H25.189C25.6573 12.4805 26.0281 12.8707 26.0085 13.339C26.0085 13.8073 25.6378 14.178 25.1695 14.178H22.2817C21.95 14.178 21.6573 14.0024 21.5207 13.7098C21.3841 13.4366 21.4037 13.0854 21.5988 12.8317L23.511 10.1976H22.2817C21.8134 10.1976 21.4427 9.82683 21.4427 9.35854C21.4427 8.89024 21.8134 8.5 22.2817 8.5H25.189C25.5012 8.5 25.7939 8.69512 25.95 8.96829C26.0866 9.24146 26.0671 9.59268 25.872 9.84634L23.9598 12.4805ZM22.0086 17.9439C21.7354 17.7878 21.4037 17.8463 21.1695 18.061C20.0573 19.1927 18.4964 19.739 16.9159 19.5634C14.5744 19.2902 12.6817 17.3976 12.4281 15.0756C12.2525 13.4756 12.7988 11.9341 13.9305 10.8219C14.1647 10.6073 14.2037 10.2561 14.0476 9.98292C13.8915 9.70975 13.5793 9.57317 13.2866 9.65122C9.73539 10.4707 7.31588 13.7293 7.511 17.3585C7.70612 21.1439 10.8281 24.2854 14.6329 24.4805C14.7012 24.4805 14.7695 24.4854 14.8378 24.4902C14.9061 24.4951 14.9744 24.5 15.0427 24.5C18.5159 24.5 21.5598 22.1195 22.3793 18.7244C22.4183 18.3927 22.2817 18.1 22.0086 17.9439ZM16.4671 12.8707H17.6964L15.7842 15.5049C15.589 15.7585 15.5695 16.1098 15.7061 16.3829C15.8427 16.6756 16.1354 16.8512 16.4671 16.8512H19.3549C19.8232 16.8512 20.1939 16.4805 20.1939 16.0122C20.1939 15.5439 19.8232 15.1732 19.3549 15.1732H18.1256L20.0378 12.539C20.2329 12.2854 20.2525 11.9341 20.1159 11.661C19.9793 11.3683 19.6866 11.1927 19.3549 11.1927H16.4671C15.9988 11.1927 15.6281 11.5634 15.6281 12.0317C15.6281 12.5 15.9988 12.8707 16.4671 12.8707Z'
				fill='white'
			/>
		</svg>
	);
};
