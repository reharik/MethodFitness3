// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowDecrease } from './ArrowDecrease';

export default {
	title: 'Design System/icons/ArrowDecrease',
	component: ArrowDecrease,
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
} as ComponentMeta<typeof ArrowDecrease>;

export const Default: ComponentStory<typeof ArrowDecrease> = (args) => (
	<ArrowDecrease {...args} />
);