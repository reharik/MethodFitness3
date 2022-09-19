import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DataTable } from './DataTable';
import { EmailLink } from './columnComponents/EmailLink';

export default {
	title: 'src/components/DataTable',
	component: DataTable,
} as ComponentMeta<typeof DataTable>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof DataTable> = (args: any) => (
	<DataTable {...args} />
);

type DataType = {
	firstName: string;
	age: number;
	lastName: string;
	email: string;
	id: number;
	dob: string;
	role: string;
	status: string;
	avatarUrl?: string;
};

const tableData: DataType[] = [
	{
		firstName: 'Raif',
		age: 33,
		lastName: 'Harik',
		email: 'r@gmail.com',
		id: 1,
		dob: '1/5/1972',
		role: 'Linus Administrator',
		status: 'active',
	},
	{
		firstName: 'Kahlil',
		age: 10,
		lastName: 'Barik',
		email: 'k@gmail.com',
		id: 2,
		dob: '6/13/2012',
		role: 'Linus Administrator',
		status: 'deactivated',
	},
	{
		firstName: 'Branon',
		age: 10,
		lastName: 'Eusebio',
		email: 'b@gmail.com',
		id: 3,
		dob: '6/13/2012',
		role: 'Linus Administrator',
		status: 'invited',
	},
	{
		firstName: 'Shane',
		age: 10,
		lastName: 'Fitzpatrick',
		email: 's@gmail.com',
		id: 4,
		dob: '6/13/2012',
		role: 'Linus Administrator',
		status: 'active',
	},
];

export const AllFeatures = Template.bind({});
AllFeatures.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{
			propertyName: 'firstName',
		},
		{
			propertyName: 'lastName',
			sortable: true,
		},
		{
			propertyName: 'age',
			sortable: true,
		},
		{
			propertyName: 'dob',
			headerDisplay: 'Birthday',
			width: '200px',
			// formatProperty: ({ value }) => {
			// 	const date = new Date(value || '');
			// 	return date.toDateString();
			// },
			rowColumnComponent: ({ value }: { value: string }) => {
				return <button onClick={() => alert(value)}>{value}</button>;
			},
		},
		{
			headerColumnComponent: () => {
				return (
					<div style={{ color: 'Red', fontSize: '16px' }}>
						{'Email'}
					</div>
				);
			},
			rowColumnComponent: ({ value }: { value: string }) => {
				return <EmailLink emailAddress={value} />;
			},
			propertyName: 'email',
			width: '200px',
		},
	],
	tableData,
	isFilteringData: true,
	notFoundTitle: 'Entity',
	notFoundSubtitle: 'Entities',
};

export const Simple = Template.bind({});
Simple.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{ propertyName: 'firstName' },
	],
	tableData,
};

export const TableWithCustomHeaderComponent = Template.bind({});
TableWithCustomHeaderComponent.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{
			headerColumnComponent: () => {
				return (
					<div style={{ color: 'Red', fontSize: '16px' }}>
						{'Email'}
					</div>
				);
			},
			propertyName: 'email',
			width: '200px',
		},
	],

	tableData,
};

export const TableWithCustomCellComponent = Template.bind({});

TableWithCustomCellComponent.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{
			rowColumnComponent: ({ value }: { value: string }) => {
				return <EmailLink emailAddress={value} />;
			},
			propertyName: 'email',
			width: '200px',
		},
	],

	tableData,
};

export const TableWithFormattedCellData = Template.bind({});
TableWithFormattedCellData.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{
			propertyName: 'email',
			width: '200px',
		},
		{
			propertyName: 'dob',
			headerDisplay: 'Birthday',
			width: '200px',
			// formatProperty: ({ value }) => {
			// 	const date = new Date(value || '');
			// 	return date.toDateString();
			// },
		},
	],

	tableData,
};

export const TableWithFormattedCellDataAndCustomCellComponent = Template.bind(
	{}
);
TableWithFormattedCellDataAndCustomCellComponent.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{
			propertyName: 'email',
			width: '200px',
		},
		{
			propertyName: 'dob',
			headerDisplay: 'Birthday',
			width: '200px',
			// formatProperty: ({ value }) => {
			// 	const date = new Date(value || '');
			// 	return date.toDateString();
			// },
			rowColumnComponent: ({ value }: { value: string }) => {
				return <button>{value}</button>;
			},
		},
	],
	tableData,
};

export const SortableTable = Template.bind({});

SortableTable.args = {
	columns: [
		{
			propertyName: 'firstName',
		},
		{
			propertyName: 'lastName',
			sortable: true,
		},
		{
			propertyName: 'email',
			width: '200px',
		},
		{
			propertyName: 'age',
			sortable: true,
		},
	],
	tableData,
};

export const EmptySearchTable = Template.bind({});
EmptySearchTable.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{ propertyName: 'firstName' },
	],
	tableData: [],
	isFilteringData: true,
	notFoundTitle: 'Entity',
	notFoundSubtitle: 'Entities',
};
