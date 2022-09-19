// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowLeft } from './ArrowLeft';

export default {
	title: 'Design System/icons/ArrowLeft',
	component: ArrowLeft,
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
} as ComponentMeta<typeof ArrowLeft>;

export const Default: ComponentStory<typeof ArrowLeft> = (args) => (
	<ArrowLeft {...args} />
);
