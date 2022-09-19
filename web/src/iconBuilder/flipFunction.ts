type FlipProps = {
	horizontalFlip: boolean;
	verticalFlip: boolean;
};

export interface IconProps {
	title?: string;
	width?: string | number;
	height?: string | number;
	color?: string;
	rotate?: string | number;
	horizontalFlip?: boolean;
	verticalFlip?: boolean;
}

export type FlipFunction = {
	scaleX: number;
	scaleY: number;
	translateX: number;
	translateY: number;
};

// Function for providing ScaleX, ScaleY, TranslateX and TranslateY based on prop to React SVG components
export const flipFunction = ({
	horizontalFlip,
	verticalFlip,
}: FlipProps): FlipFunction => {
	let translateX = 0;
	let translateY = 0;
	let scaleX = 1;
	let scaleY = 1;

	if (horizontalFlip) {
		scaleX = -1;
		translateX = 24;
	}

	if (verticalFlip) {
		scaleY = -1;
		translateY = 24;
	}

	return { scaleX, scaleY, translateX, translateY };
};
