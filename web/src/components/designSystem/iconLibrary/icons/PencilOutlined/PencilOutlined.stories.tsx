// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PencilOutlined } from './PencilOutlined';

export default {
	title: 'Design System/icons/PencilOutlined',
	component: PencilOutlined,
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
} as ComponentMeta<typeof PencilOutlined>;

export const Default: ComponentStory<typeof PencilOutlined> = (args) => (
	<PencilOutlined {...args} />
);
