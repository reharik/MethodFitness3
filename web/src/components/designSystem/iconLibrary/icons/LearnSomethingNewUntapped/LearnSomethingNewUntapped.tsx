// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const LearnSomethingNewUntapped = ({
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
			data-testid='LearnSomethingNewUntapped-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'LearnSomethingNewUntapped'}</title>
			<rect
				x='1.25'
				y='1.25'
				width='33.5'
				height='33.5'
				rx='16.75'
				fill='#F2F1F3'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M24.3239 8V20.3239V20.3449H21.1693L22.0526 22.5741H22.9359C23.2303 22.5741 23.4826 22.8265 23.4826 23.1209C23.4826 23.4154 23.2513 23.6677 22.9359 23.6677H22.4942L23.9033 27.2429C24.0294 27.5373 23.8822 27.8528 23.6088 27.9579C23.5913 27.9623 23.5746 27.9667 23.5587 27.9709C23.4984 27.9868 23.4485 28 23.3985 28C23.1882 28 22.9779 27.8528 22.8938 27.6425L21.3165 23.6677H15.1546L13.5563 27.6004C13.4721 27.8318 13.2618 27.9579 13.0515 27.9579C12.9674 27.9579 12.9043 27.9369 12.8412 27.9159C12.5468 27.8107 12.3996 27.4742 12.5258 27.2008L13.9558 23.6467H13.5352C13.2408 23.6467 12.9884 23.3943 12.9884 23.0999C12.9884 22.8055 13.2198 22.5531 13.5352 22.5531H14.4185L15.3018 20.3239H12V8H24.3239ZM23.3144 9.03049H13.0305V19.3144H23.3144V9.03049ZM17.6782 20.3239H16.4795L15.5962 22.5531H17.6782V20.3239ZM18.7928 22.5531H20.8749L19.9916 20.3239H18.7928V22.5531ZM14.9232 15.4658L13.5773 16.7697V9.57728H22.7255V15.1924L21.6109 13.9306C21.1272 13.4048 20.307 13.4048 19.8444 13.9306L17.6782 16.4963L16.6057 15.4658C16.143 15.0032 15.3859 15.0032 14.9232 15.4658ZM17.1945 11.9537C17.1945 11.2597 16.6267 10.7129 15.9537 10.7129C15.2597 10.7129 14.7129 11.2597 14.7129 11.9537C14.7129 12.6477 15.2597 13.1945 15.9537 13.1945C16.6477 13.1945 17.1945 12.6267 17.1945 11.9537Z'
				fill='#676671'
			/>
			<circle
				cx='18'
				cy='18'
				r='16.75'
				fill='none'
				stroke='#86C65A'
				stroke-width='1.5'
				stroke-dasharray='3 4'
			/>
		</svg>
	);
};