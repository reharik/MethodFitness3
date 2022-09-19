import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { linkTo } from '@storybook/addon-links';
import { iconEnum } from './iconEnum';
import { Icon } from './Icon';

const IconsDisplayAll = (): JSX.Element => {
	return (
		<StyledContainer>
			{iconEnum.toEnumItems().map((i) => {
				return (
					<StyledIconContainer
						key={i.value}
						onClick={linkTo(
							`design-system-icons-${i.value.toLocaleLowerCase()}--default`
						)}>
						<Icon icon={i} />
						<StyledName>{i.value}</StyledName>
					</StyledIconContainer>
				);
			})}
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 225px);
	gap: 2rem;
`;

const StyledIconContainer = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 150px;
`;
const StyledName = styled.span`
	padding-top: 10px;
	font-weight: bold;
	font-size: 12px;
	position: relative;
	bottom: 0;
`;

export default {
	title: 'Design System/Icons/All',
	component: IconsDisplayAll,
} as ComponentMeta<typeof IconsDisplayAll>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof IconsDisplayAll> = (args: any) => (
	<IconsDisplayAll />
);

export const Display_All = Template.bind({});

Template.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/ZeWegEMb6WNXeXQTIsIEY2/Linus---Universal-Icons?node-id=2%3A105',
	},
};
