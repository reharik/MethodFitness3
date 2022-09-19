// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeartInMindSolid } from './HeartInMindSolid';

export default {
	title: 'Design System/icons/HeartInMindSolid',
	component: HeartInMindSolid,
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
} as ComponentMeta<typeof HeartInMindSolid>;

export const Default: ComponentStory<typeof HeartInMindSolid> = (args) => (
	<HeartInMindSolid {...args} />
);
