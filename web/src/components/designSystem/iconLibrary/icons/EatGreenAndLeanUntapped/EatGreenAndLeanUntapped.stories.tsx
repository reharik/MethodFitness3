// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EatGreenAndLeanUntapped } from './EatGreenAndLeanUntapped';

export default {
	title: 'Design System/icons/EatGreenAndLeanUntapped',
	component: EatGreenAndLeanUntapped,
	argTypes: {
		color: { control: 'color' },
		rotate: { control: 'number' },
		width: {
			control: { type: 'number' },
		},
		height: {
			control: { type: 'number' },
		},
	},
} as ComponentMeta<typeof EatGreenAndLeanUntapped>;

export const Default: ComponentStory<typeof EatGreenAndLeanUntapped> = (
	args
) => <EatGreenAndLeanUntapped {...args} />;