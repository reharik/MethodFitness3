// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckmarkOutlined } from './CheckmarkOutlined';

export default {
	title: 'Design System/icons/CheckmarkOutlined',
	component: CheckmarkOutlined,
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
} as ComponentMeta<typeof CheckmarkOutlined>;

export const Default: ComponentStory<typeof CheckmarkOutlined> = (args) => (
	<CheckmarkOutlined {...args} />
);
