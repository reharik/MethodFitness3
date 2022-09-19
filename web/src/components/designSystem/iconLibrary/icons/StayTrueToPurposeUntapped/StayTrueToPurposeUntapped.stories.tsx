// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StayTrueToPurposeUntapped } from './StayTrueToPurposeUntapped';

export default {
	title: 'Design System/icons/StayTrueToPurposeUntapped',
	component: StayTrueToPurposeUntapped,
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
} as ComponentMeta<typeof StayTrueToPurposeUntapped>;

export const Default: ComponentStory<typeof StayTrueToPurposeUntapped> = (
	args
) => <StayTrueToPurposeUntapped {...args} />;