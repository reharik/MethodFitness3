import { ComponentStory, ComponentMeta } from '@storybook/react';
import { iconEnum } from '../../iconLibrary';
import { ButtonLg } from './ButtonLg';

export default {
	title: 'Design System/Buttons/Large',
	component: ButtonLg,
} as ComponentMeta<typeof ButtonLg>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof ButtonLg> = (args: any) => (
	<ButtonLg {...args} />
);

export const Large_Button = Template.bind({});
Large_Button.args = {
	disabled: false,
	text: 'Primary Large',
	primary: true,
};
Large_Button.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/DVY2LPtSRxhAlcdZhq0TrQ/Linus-Design-System?node-id=154%3A132',
	},
};

export const Large_ButtonIconRight = Template.bind({});
Large_ButtonIconRight.args = {
	disabled: false,
	text: 'Primary Large',
	primary: true,
	IconRight: iconEnum.Home,
};
Large_ButtonIconRight.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/DVY2LPtSRxhAlcdZhq0TrQ/Linus-Design-System?node-id=154%3A141',
	},
};

export const Large_ButtonIconLeft = Template.bind({});
Large_ButtonIconLeft.args = {
	disabled: false,
	text: 'Primary Large',
	primary: true,
	IconLeft: iconEnum.Home,
};
Large_ButtonIconLeft.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/DVY2LPtSRxhAlcdZhq0TrQ/Linus-Design-System?node-id=154%3A153',
	},
};

export const Large_ButtonIconCenter = Template.bind({});
Large_ButtonIconCenter.args = {
	disabled: false,
	text: 'Primary Large',
	primary: true,
	IconCenter: iconEnum.Home,
};
Large_ButtonIconCenter.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/DVY2LPtSRxhAlcdZhq0TrQ/Linus-Design-System?node-id=245%3A1060',
	},
};
