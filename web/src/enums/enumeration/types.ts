export interface DropdownOption {
	// actual dropdown values
	value: string;
	// dropdown display names for corresponding values
	display: string;
}

export type BaseEnum = {
	value: string;
	display?: string;
	index?: number;
};

export type SpecificEnumItem<K, V> = {
	key: K;
	value: string;
	display?: string;
	index?: number;
} & V;

export type Enum<T, V extends BaseEnum = BaseEnum> = {
	-readonly [Property in keyof T]: SpecificEnumItem<Property, V>;
};

export type Enumeration<T, V extends BaseEnum = BaseEnum> = Enum<T, V> & {
	fromValue: (target?: string) => EnumItemOf<T> | undefined;
	fromDisplay: (target?: string) => EnumItemOf<T> | undefined;
	toOptions: (props?: {
		filter?: (item: EnumItemOf<T>) => boolean;
	}) => DropdownOption[];
	toValues: () => string[];
	toKeys: () => string[];
	toEnumItems: () => EnumItemOf<T>[];
};

export type EnumItemOf<T, V extends BaseEnum = BaseEnum> = {
	[K in keyof T]: SpecificEnumItem<K, V>;
}[keyof T];

export type EnumerationProps<T, V extends BaseEnum = BaseEnum> = {
	input: T;
	transform?: (v: T) => EnumItemOf<T, V>;
};
