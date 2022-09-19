// GENERATED BY ./scripts/iconScript.ts

import { IconProps, flipFunction } from '../flipFunction';

export const TraditionalArrowDown = ({
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
			viewBox='0 0 12 16'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='TraditionalArrowDown-svg-component'
			transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`}
			fill={color}
			width={width}
			height={height}>
			<title>{title || 'TraditionalArrowDown'}</title>

			<path
				d='M1.16836 8.97978C0.973101 8.78451 0.656519 8.78451 0.461257 8.97978C0.265995 9.17504 0.265995 9.49162 0.461257 9.68688L5.62994 14.8556C5.72137 14.9557 5.85298 15.0185 5.99926 15.0185L6.00286 15.0185C6.12986 15.0178 6.25665 14.969 6.35355 14.8721L11.5387 9.68688C11.734 9.49162 11.734 9.17504 11.5387 8.97978C11.3435 8.78451 11.0269 8.78451 10.8316 8.97978L6.49926 13.3121L6.49926 1.18518C6.49926 0.909039 6.2754 0.68518 5.99926 0.68518C5.72312 0.68518 5.49926 0.909039 5.49926 1.18518L5.49926 13.3107L1.16836 8.97978Z'
				fill='current'
			/>
		</svg>
	);
};
