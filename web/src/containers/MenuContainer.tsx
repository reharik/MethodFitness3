import { useState, useEffect } from 'react';
import { MenuItemList } from '../components/layout/Menu';
import { MenuItemData } from '../components/layout/Menu/MenuItemList';
import { useNavigate, useLocation } from 'react-router-dom';

type CurrentMenuNodeInfo = {
	currentI: MenuItemData;
	currentIs: MenuItemData[];
	bcs: string[];
};
const findCurrentMenuNodeInfo = (
	arr: MenuItemData[],
	target: string,
	parentArr: MenuItemData[],
	stack: string[]
): CurrentMenuNodeInfo | undefined => {
	if (arr.length <= 0) {
		return;
	}

	for (let i = 0; i < arr.length; i++) {
		const x = arr[i];
		if (x.path === target) {
			return { currentI: x, currentIs: parentArr, bcs: stack };
		}
		if (x.children.length > 0) {
			stack.push(x.text);
			return findCurrentMenuNodeInfo(
				x.children,
				target,
				x.children,
				stack
			);
		}
	}
};

export const MenuContainer = () => {
	const location = useLocation();
	const [currentItem, setCurrentItem] = useState<MenuItemData>();
	const [items, setItems] = useState<MenuItemData[]>([]);
	const [currentItems, setCurrentItems] = useState<MenuItemData[]>([]);
	const [breadCrumbItems, setBreadCrumbItems] = useState<string[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const menu = menuItems;
		setItems(menu);
		let result = {
			currentI: menu[0],
			currentIs: menu,
			bcs: [] as string[],
		};
		if (location.hash) {
			const target = location.pathname.substring(1) + location.hash;
			result =
				findCurrentMenuNodeInfo(menu, target, menu, [] as string[]) ||
				result;
		}
		setCurrentItems(result.currentIs);
		setCurrentItem(result.currentI);
		setBreadCrumbItems(result.bcs);
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
			// window.location.assign(item.path);
			const route = item.path.substring(item.path.indexOf('#'));
			navigate(item.path);
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			MF.vent.trigger('route', route, true);
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
		path: 'scheduler#calendar',
	},
	{
		children: [],
		text: 'Clients',
		path: 'scheduler#clientlist',
	},
	{
		children: [],
		text: 'Session Report',
		path: 'scheduler#trainersessionview',
	},
	{
		children: [],
		text: 'Payment History',
		path: 'scheduler#trainerpaymentlist',
	},
	{
		children: [],
		text: 'Session Verification',
		path: 'scheduler#trainersessionverification',
	},
	{
		children: [
			{
				children: [],
				text: 'Locations',
				path: 'scheduler#locationlist',
			},
			{
				children: [],
				text: 'Base Rates',
				path: 'scheduler#basesessionrate',
			},
			{
				children: [],
				text: 'Trainers',
				path: 'scheduler#trainerlist',
			},
			{
				children: [
					{
						children: [],
						text: 'Payments',
						path: 'scheduler#dailypayments',
					},
					{
						children: [],
						text: 'Productivity',
						path: 'scheduler#trainermetric',
					},
					{
						children: [],
						text: 'Activity',
						path: 'scheduler#activity',
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
