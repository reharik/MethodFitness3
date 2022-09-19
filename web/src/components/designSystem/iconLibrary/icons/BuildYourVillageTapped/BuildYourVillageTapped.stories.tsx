// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BuildYourVillageTapped } from './BuildYourVillageTapped';

export default {
	title: 'Design System/icons/BuildYourVillageTapped',
	component: BuildYourVillageTapped,
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
} as ComponentMeta<typeof BuildYourVillageTapped>;

export const Default: ComponentStory<typeof BuildYourVillageTapped> = (
	args
) => <BuildYourVillageTapped {...args} />;
