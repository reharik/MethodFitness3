export type InputChildrenProps<T> = FormElementProps<T> & {
	value: T;
	error?: string;
	'data-id'?: string;
	dateFormat?: string;
};

export interface FormElementProps<T> {
	name: string;
	type?: string;
	label?: string;
	placeholder?: string;
	disabled?: boolean;
	dropdownOptions?: DropdownOption[];
	dropUpSpace?: string;
	width?: string;
	height?: string;
	value?: T;
	multiple?: boolean; // checkbox
	rows?: number; // text-area
	preferDisplayLength?: 'long' | 'short'; // multi-select
}

export interface DropdownOption {
	// actual dropdown values
	value: string;
	// dropdown display names for corresponding values
	display: string;
	// a long display for ... product
	longDisplay?: string;
	// a second line property, like a long display but ... on the second line
	secondLine?: string;
}
