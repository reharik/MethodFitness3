// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { KeepHealthInCheckTapped } from './KeepHealthInCheckTapped';

export default {
	title: 'Design System/icons/KeepHealthInCheckTapped',
	component: KeepHealthInCheckTapped,
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
} as ComponentMeta<typeof KeepHealthInCheckTapped>;

export const Default: ComponentStory<typeof KeepHealthInCheckTapped> = (
	args
) => <KeepHealthInCheckTapped {...args} />;
