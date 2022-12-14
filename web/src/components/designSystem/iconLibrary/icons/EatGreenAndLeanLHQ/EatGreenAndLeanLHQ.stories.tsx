// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EatGreenAndLeanLHQ } from './EatGreenAndLeanLHQ';

export default {
	title: 'Design System/icons/EatGreenAndLeanLHQ',
	component: EatGreenAndLeanLHQ,
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
} as ComponentMeta<typeof EatGreenAndLeanLHQ>;

export const Default: ComponentStory<typeof EatGreenAndLeanLHQ> = (args) => (
	<EatGreenAndLeanLHQ {...args} />
);
