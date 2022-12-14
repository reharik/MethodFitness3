// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowFlag } from './ArrowFlag';

export default {
	title: 'Design System/icons/ArrowFlag',
	component: ArrowFlag,
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
} as ComponentMeta<typeof ArrowFlag>;

export const Default: ComponentStory<typeof ArrowFlag> = (args) => (
	<ArrowFlag {...args} />
);
