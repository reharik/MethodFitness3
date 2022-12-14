// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InviteOutlined } from './InviteOutlined';

export default {
	title: 'Design System/icons/InviteOutlined',
	component: InviteOutlined,
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
} as ComponentMeta<typeof InviteOutlined>;

export const Default: ComponentStory<typeof InviteOutlined> = (args) => (
	<InviteOutlined {...args} />
);
