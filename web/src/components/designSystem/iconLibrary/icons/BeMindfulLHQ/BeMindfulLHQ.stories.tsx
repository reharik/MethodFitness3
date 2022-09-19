// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BeMindfulLHQ } from './BeMindfulLHQ';

export default {
	title: 'Design System/icons/BeMindfulLHQ',
	component: BeMindfulLHQ,
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
} as ComponentMeta<typeof BeMindfulLHQ>;

export const Default: ComponentStory<typeof BeMindfulLHQ> = (args) => (
	<BeMindfulLHQ {...args} />
);
