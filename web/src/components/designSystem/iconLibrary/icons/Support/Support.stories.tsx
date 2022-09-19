// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Support } from './Support';

export default {
	title: 'Design System/icons/Support',
	component: Support,
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
} as ComponentMeta<typeof Support>;

export const Default: ComponentStory<typeof Support> = (args) => (
	<Support {...args} />
);