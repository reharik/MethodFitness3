// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckmarkSolid } from './CheckmarkSolid';

export default {
	title: 'Design System/icons/CheckmarkSolid',
	component: CheckmarkSolid,
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
} as ComponentMeta<typeof CheckmarkSolid>;

export const Default: ComponentStory<typeof CheckmarkSolid> = (args) => (
	<CheckmarkSolid {...args} />
);
