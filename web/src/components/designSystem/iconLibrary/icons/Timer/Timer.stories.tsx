// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Timer } from './Timer';

export default {
	title: 'Design System/icons/Timer',
	component: Timer,
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
} as ComponentMeta<typeof Timer>;

export const Default: ComponentStory<typeof Timer> = (args) => (
	<Timer {...args} />
);