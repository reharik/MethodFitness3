import { useState, useEffect } from 'react';
import { MenuItemList } from '../components/layout/Menu';
import { MenuItemData } from '../components/layout/Menu/MenuItemList';
import { useNavigate } from 'react-router-dom';

export const MenuContainer = () => {
	const navigate = useNavigate();
	const [currentItem, setCurrentItem] = useState<MenuItemData>();
	const [items, setItems] = useState<MenuItemData[]>([]);
	const [currentItems, setCurrentItems] = useState<MenuItemData[]>([]);
	const [breadCrumbItems, setBreadCrumbItems] = useState<string[]>([]);

	useEffect(() => {
		const menu = menuItems;
		setItems(menu);
		setCurrentItems(menu);
		setCurrentItem(menu[0]);
	}, []);

	const menuItemClicked = (text: string, hasChildren: boolean) => {
		const item = currentItems.find((x) => x.text === text);
		if (!item) {
			return;
		}
		setCurrentItem(item);
		if (hasChildren) {
			setCurrentItems(item.children);
			setBreadCrumbItems((state) => [...state, item.text]);
		} else {
			navigate(item.path);
		}
	};
	const navBreadCrumbClicked = (text: string, index: number) => {
		let x = 0;
		let arr = items;
		if (index >= 0) {
			while (x <= index) {
				const target = arr.find((x) => x.text === text);
				arr = target?.children || [];
				x = x + 1;
			}
		}
		setBreadCrumbItems((state) => state.slice(0, index + 1));
		setCurrentItem(undefined);
		setCurrentItems(arr);
	};

	if (!items) {
		return null;
	}

	return (
		<MenuItemList
			currentItem={currentItem}
			items={currentItems}
			breadCrumbItems={breadCrumbItems}
			menuItemClicked={menuItemClicked}
			navBreadCrumbClicked={navBreadCrumbClicked}
		/>
	);
};

const menuItems: MenuItemData[] = [
	{
		children: [],
		text: 'Calendar',
		path: 'calendar',
	},
	{
		children: [],
		text: 'Clients',
		path: 'clientlist',
	},
	{
		children: [],
		text: 'Session Report',
		path: 'trainersessionview',
	},
	{
		children: [],
		text: 'Payment History',
		path: 'trainerpaymentlist',
	},
	{
		children: [],
		text: 'Session Verification',
		path: 'trainersessionverification',
	},
	{
		children: [
			{
				children: [],
				text: 'Locations',
				path: 'locationlist',
			},
			{
				children: [],
				text: 'Base Rates',
				path: 'basesessionrate',
			},
			{
				children: [],
				text: 'Trainers',
				path: 'trainerlist',
			},
			{
				children: [
					{
						children: [],
						text: 'Payments',
						path: 'dailypayments',
					},
					{
						children: [],
						text: 'Productivity',
						path: 'trainermetric',
					},
					{
						children: [],
						text: 'Activity',
						path: 'activity',
					},
				],
				text: 'Reports',
				path: '#',
			},
		],
		text: 'Admin Tools',
		path: '#',
	},
];
