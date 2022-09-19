// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestGears } from './TestGears';

export default {
	title: 'Design System/icons/TestGears',
	component: TestGears,
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
} as ComponentMeta<typeof TestGears>;

export const Default: ComponentStory<typeof TestGears> = (args) => (
	<TestGears {...args} />
);