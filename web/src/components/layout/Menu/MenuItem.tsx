import styled from 'styled-components';
import { MenuItemData } from './MenuItemList';

type MenuItemProps = {
	text: string;
	currentItem?: MenuItemData;
	onMenuItemClick: () => void;
	children: MenuItemData[];
};

export const MenuItem = ({
	children,
	text,
	onMenuItemClick,
	currentItem,
}: MenuItemProps) => {
	if (children && children.length > 0) {
		return (
			<StyledLi onClick={onMenuItemClick}>
				<StyledLink key={text}>
					<div>{text}</div>
					<StyledIcon />
				</StyledLink>
			</StyledLi>
		);
	}
	return (
		<StyledLeaf
			currentItem={currentItem?.text === text}
			onClick={onMenuItemClick}>
			<StyledLeafLink>{text}</StyledLeafLink>
		</StyledLeaf>
	);
};

const StyledLi = styled.li(
	({ theme: { color } }) => `
	padding: 0.34em 3%;
  line-height: 21px;
	:hover {
		background: none repeat scroll 0 0 #d7e6ed;
		color: #457596;
	}
`
);

const StyledLink = styled.a(
	({ theme: { color } }) => `
	flex-flow: row nowrap;
  justify-content: space-between;
 	color: #457596;
  font-size: 12px;
  font-family: Verdana, Arial, sans-serif;
	display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
	text-decoration: none;
	:hover {
		color: inherit;
	}
`
);

const StyledIcon = styled.div(
	({ theme: { color } }) => `
	width: 17px;
  background: url('./images/button-v-right.png') no-repeat scroll 0 0
    transparent;
`
);
type StyledLeafProps = {
	currentItem: boolean;
};

const StyledLeaf = styled.li<StyledLeafProps>(
	({ currentItem, theme: { color } }) => `
  padding: 0.3em 3%;
  line-height: 21px;
  cursor: pointer;
	${
		currentItem
			? 'background: none repeat scroll 0 0 #d7e6ed;	color: #457596;'
			: ''
	}
	:hover {
		background: none repeat scroll 0 0 #d7e6ed;
		color: #457596;
	}
`
);

const StyledLeafLink = styled.span(
	({ theme: { color } }) => `
	color: #457596;
  font-size: 12px;
  font-family: Verdana, Arial, sans-serif;
  text-decoration: none;
`
);
