// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Organization } from './Organization';

export default {
	title: 'Design System/icons/Organization',
	component: Organization,
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
} as ComponentMeta<typeof Organization>;

export const Default: ComponentStory<typeof Organization> = (args) => (
	<Organization {...args} />
);