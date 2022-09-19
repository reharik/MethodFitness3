import { NavBreadCrumb } from './NavBreadCrumb';
import { MenuItem } from './MenuItem';
import styled from 'styled-components';

export type MenuItemData = {
	text: string;
	path: string;
	children: MenuItemData[];
};

type MenuItemListProps = {
	currentItem?: MenuItemData;
	items: MenuItemData[];
	breadCrumbItems: string[];
	menuItemClicked: (t: string, c: boolean) => void;
	navBreadCrumbClicked: (t: string, i: number) => void;
};

export const MenuItemList = ({
	items,
	breadCrumbItems,
	currentItem,
	menuItemClicked,
	navBreadCrumbClicked,
}: MenuItemListProps) => {
	if (!items) {
		return null;
	}
	return (
		<StyledMenu>
			{breadCrumbItems.length > 0 ? (
				<NavBreadCrumb
					breadCrumbItems={breadCrumbItems}
					navBreadCrumbClicked={navBreadCrumbClicked}
				/>
			) : null}
			<StyledMenuItems className='menu__items'>
				{items.map((item, index) => (
					<MenuItem
						key={index}
						text={item.text}
						children={item.children}
						currentItem={currentItem}
						onMenuItemClick={() =>
							menuItemClicked(item.text, item.children.length > 0)
						}
					/>
				))}
			</StyledMenuItems>
		</StyledMenu>
	);
};

const StyledMenu = styled.div(
	({ theme: { color } }) => `
	width: 220px;
  min-height: 400px;
  padding: 0 5px 21px;
	border: none;
  background: transparent;
  margin-left: 2px;
`
);

const StyledMenuItems = styled.ul(
	({ theme: { color } }) => `
	display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

`
);
