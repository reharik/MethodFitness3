// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const Results = ({
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
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='Results-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'Results'}</title>

			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M9.73244 1L14.0606 1.00001C15.1297 1.00001 16 1.86343 16 2.92406V6.08296C15.6844 6.03002 15.3605 6.00171 15.0303 6.00007V2.92406C15.0303 2.39254 14.5964 1.96204 14.0606 1.96204H12V3C12 3.55228 11.5523 4 11 4H5C4.44772 4 4 3.55228 4 3V1.96204H1.93939C1.40364 1.96204 0.969697 2.39254 0.969697 2.92406V18.076C0.969697 18.6075 1.40364 19.038 1.93939 19.038H14.0606C14.5964 19.038 15.0303 18.6075 15.0303 18.076V17.9999C15.3605 17.9983 15.6844 17.97 16 17.917V18.076C16 19.1366 15.1297 20 14.0606 20H1.93939C0.870303 20 0 19.1366 0 18.076V2.92406C0 1.86343 0.870303 1.00001 1.93939 1.00001L6.26756 1C6.61337 0.402199 7.25972 0 8 0C8.74028 0 9.38663 0.402199 9.73244 1ZM5.25 3H10.75C10.8881 3 11 2.88807 11 2.75V2H9C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2H5V2.75C5 2.88807 5.11193 3 5.25 3Z'
				fill='current'
			/>
			<path
				d='M10.0767 15.4304C10.3208 15.7801 10.6013 16.1026 10.9126 16.3924H7.75758C7.49091 16.3924 7.27273 16.1759 7.27273 15.9114C7.27273 15.6468 7.49091 15.4304 7.75758 15.4304H10.0767Z'
				fill='current'
			/>
			<path
				d='M9.1594 10.6203C9.08598 10.9322 9.03692 11.2536 9.01431 11.5823H7.75758C7.49091 11.5823 7.27273 11.3658 7.27273 11.1013C7.27273 10.8367 7.49091 10.6203 7.75758 10.6203H9.1594Z'
				fill='current'
			/>
			<path
				d='M13.561 6.17366C13.0268 6.30517 12.5206 6.50825 12.0534 6.77216H7.75758C7.49091 6.77216 7.27273 6.5557 7.27273 6.29115C7.27273 6.02659 7.49091 5.81013 7.75758 5.81013H13.0909C13.3168 5.81013 13.5078 5.9654 13.561 6.17366Z'
				fill='current'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M2.90909 14.2278C2.64242 14.2278 2.42424 14.4443 2.42424 14.7089V17.1139C2.42424 17.3785 2.64242 17.5949 2.90909 17.5949H5.33333C5.6 17.5949 5.81818 17.3785 5.81818 17.1139V14.7089C5.81818 14.4443 5.6 14.2278 5.33333 14.2278H2.90909ZM3.39394 16.6329V15.1899H4.84848V16.6329H3.39394Z'
				fill='current'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M5.33333 9.41773H2.90909C2.64242 9.41773 2.42424 9.63418 2.42424 9.89874V12.3038C2.42424 12.5684 2.64242 12.7848 2.90909 12.7848H5.33333C5.6 12.7848 5.81818 12.5684 5.81818 12.3038V9.89874C5.81818 9.63418 5.6 9.41773 5.33333 9.41773ZM3.39394 11.8228V10.3798H4.84848V11.8228H3.39394Z'
				fill='current'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M2.90909 4.6076C2.64242 4.6076 2.42424 4.82406 2.42424 5.08862V7.49368C2.42424 7.75823 2.64242 7.97469 2.90909 7.97469H5.33333C5.6 7.97469 5.81818 7.75823 5.81818 7.49368V5.08862C5.81818 4.82406 5.6 4.6076 5.33333 4.6076H2.90909ZM3.39394 7.01267V5.56963H4.84848V7.01267H3.39394Z'
				fill='current'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M20 12C20 14.7614 17.7614 17 15 17C12.2386 17 10 14.7614 10 12C10 9.23858 12.2386 7 15 7C17.7614 7 20 9.23858 20 12ZM12.7201 12.0116C12.9154 11.8164 13.232 11.8164 13.4272 12.0116L14.4879 13.0723L16.9628 10.5974C17.158 10.4021 17.4746 10.4021 17.6699 10.5974C17.8651 10.7927 17.8651 11.1093 17.6699 11.3045L14.4879 14.4865L12.7201 12.7187C12.5249 12.5235 12.5249 12.2069 12.7201 12.0116Z'
				fill='current'
			/>
		</svg>
	);
};
