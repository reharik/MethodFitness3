// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CameraPlusOutlined } from './CameraPlusOutlined';

export default {
	title: 'Design System/icons/CameraPlusOutlined',
	component: CameraPlusOutlined,
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
} as ComponentMeta<typeof CameraPlusOutlined>;

export const Default: ComponentStory<typeof CameraPlusOutlined> = (args) => (
	<CameraPlusOutlined {...args} />
);
