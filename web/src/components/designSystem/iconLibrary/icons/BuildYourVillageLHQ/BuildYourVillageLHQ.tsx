// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const BuildYourVillageLHQ = ({
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
			viewBox='0 0 32 32'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='BuildYourVillageLHQ-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'BuildYourVillageLHQ'}</title>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M15.847 9.61252C15.847 7.99024 17.1706 6.66663 18.7929 6.66663C20.4152 6.66663 21.7388 7.99024 21.7388 9.60573C21.7388 11.228 20.4152 12.5516 18.7929 12.5516C18.4603 12.5516 18.1345 12.4973 17.8222 12.3887L16.2814 12.6602H16.2475C16.1796 12.6602 16.1253 12.6331 16.0846 12.5856C16.0371 12.5313 16.0303 12.4498 16.0574 12.3819L16.4715 11.4181C16.295 11.1941 16.1525 10.9497 16.0506 10.685C15.9149 10.3456 15.847 9.98585 15.847 9.61252ZM17.7616 10.0466C17.9716 10.0466 18.1417 9.87646 18.1417 9.66653C18.1417 9.4566 17.9716 9.28642 17.7616 9.28642C17.5517 9.28642 17.3815 9.4566 17.3815 9.66653C17.3815 9.87646 17.5517 10.0466 17.7616 10.0466ZM19.173 9.66653C19.173 9.87646 19.0028 10.0466 18.7929 10.0466C18.5829 10.0466 18.4128 9.87646 18.4128 9.66653C18.4128 9.4566 18.5829 9.28642 18.7929 9.28642C19.0028 9.28642 19.173 9.4566 19.173 9.66653ZM19.8248 10.0466C20.0347 10.0466 20.2049 9.87646 20.2049 9.66653C20.2049 9.4566 20.0347 9.28642 19.8248 9.28642C19.6148 9.28642 19.4447 9.4566 19.4447 9.66653C19.4447 9.87646 19.6148 10.0466 19.8248 10.0466ZM12.7086 18.2004C14.4569 18.2004 15.8893 16.7681 15.8893 15.0198C15.8893 13.2715 14.4569 11.8392 12.7086 11.8392C10.9603 11.8392 9.528 13.2715 9.528 15.0198C9.54906 16.7681 10.9603 18.2004 12.7086 18.2004ZM7 22.0966V24.6663H18.3955V22.0966C18.3955 20.5378 17.1949 19.3372 15.6361 19.3372H9.78042C8.28489 19.3372 7 20.5589 7 22.0966ZM22.6924 15.9887C22.6924 17.3368 21.5971 18.4743 20.2069 18.4743C18.8167 18.4743 17.7214 17.3368 17.7214 15.9887C17.7214 14.6407 18.8167 13.5032 20.2069 13.5032C21.555 13.5032 22.6924 14.6407 22.6924 15.9887ZM22.5027 19.569H18.2057C18.9219 20.1798 19.3642 21.1066 19.3642 22.1177L19.4696 24.6664H24.6934V21.7385C24.6934 20.5379 23.7244 19.569 22.5027 19.569Z'
				fill='#676671'
			/>
		</svg>
	);
};
