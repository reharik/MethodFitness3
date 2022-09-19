import { ComponentStory, ComponentMeta } from '@storybook/react';
import { iconEnum } from '../../iconLibrary';
import { ButtonSm } from './ButtonSm';

export default {
	title: 'Design System/Buttons/Small',
	component: ButtonSm,
} as ComponentMeta<typeof ButtonSm>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof ButtonSm> = (args: any) => (
	<ButtonSm {...args} />
);

export const Small_Button = Template.bind({});
Small_Button.args = {
	disabled: false,
	text: 'Primary Small',
	primary: true,
};
Small_Button.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/DVY2LPtSRxhAlcdZhq0TrQ/Linus-Design-System?node-id=154%3A135',
	},
};

export const Small_ButtonIconRight = Template.bind({});
Small_ButtonIconRight.args = {
	disabled: false,
	text: 'Primary Small',
	primary: true,
	IconRight: iconEnum.Home,
};
Small_ButtonIconRight.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/DVY2LPtSRxhAlcdZhq0TrQ/Linus-Design-System?node-id=154%3A145',
	},
};

export const Small_ButtonIconLeft = Template.bind({});
Small_ButtonIconLeft.args = {
	disabled: false,
	text: 'Primary Small',
	primary: true,
	IconLeft: iconEnum.Home,
};
Small_ButtonIconLeft.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/DVY2LPtSRxhAlcdZhq0TrQ/Linus-Design-System?node-id=154%3A157',
	},
};

export const Small_ButtonIconCenter = Template.bind({});
Small_ButtonIconCenter.args = {
	disabled: false,
	text: 'Primary Small',
	primary: true,
	IconCenter: iconEnum.Home,
};
Small_ButtonIconCenter.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/DVY2LPtSRxhAlcdZhq0TrQ/Linus-Design-System?node-id=267%3A2098',
	},
};
