import {
	BaseEnum,
	DropdownOption,
	Enum,
	Enumeration,
	EnumerationProps,
	EnumItemOf,
	SpecificEnumItem,
} from './types';

export const arrayHelper = <U extends Record<string, BaseEnum>>(
	arr: readonly string[]
): U =>
	arr.reduce((acc, key) => {
		acc[key as keyof U] = { value: key } as BaseEnum & U[string];
		return acc;
	}, {} as U);

/* example 
const testEnum = ['HiMom', 'HiSweetie'] as const;
type TTestEnum = Record<typeof testEnum[number], BaseEnum>;
	
const testEnumeration = enumeration<TTestEnum>({
				input: arrayHelper(testEnum),
			});
*/

// A signature for `Object.entries` that assumes the only keys are the ones indicated by the type
const unsafeEntries = Object.entries as <T, V>(obj: T) => [keyof T, V][];

const buildManualEnumItems = <T, V extends BaseEnum>(input: T): Enum<T, V> => {
	return unsafeEntries<T, V>(input).reduce(
		(acc: Enum<T, V>, [key, value], index: number) => {
			const newItem: SpecificEnumItem<keyof T, V> = {
				...value,
				key,
				display: value.display || key,
				index,
			};

			acc[key as keyof Enum<T, V>] = newItem;
			return acc;
		},
		{} as Enum<T, V>
	);
};

export const enumeration = <T, V extends BaseEnum = BaseEnum>({
	input,
}: EnumerationProps<T, V>): Enumeration<T, V> => {
	const enumItems = buildManualEnumItems<T, V>(input as T);

	return {
		fromValue: (target?: string) => {
			if (!target) {
				return undefined;
			}
			return (Object.values(enumItems) as EnumItemOf<T>[]).find(
				(value: EnumItemOf<T>) => value.value === target
			);
		},
		fromDisplay: (target?: string) => {
			if (!target) {
				return undefined;
			}
			return (Object.values(enumItems) as EnumItemOf<T>[]).find(
				(value: EnumItemOf<T>) => value.display === target
			);
		},
		toOptions: (props): DropdownOption[] => {
			return toOptions(Object.values(enumItems), props?.filter);
		},
		toValues: () =>
			(Object.values(enumItems) as EnumItemOf<T>[]).map(
				(item: EnumItemOf<T>) => item.value
			) as string[],
		toKeys: () =>
			(Object.values(enumItems) as EnumItemOf<T>[]).map(
				(item: EnumItemOf<T>) => item.key
			) as string[],
		toEnumItems: () => Object.values(enumItems) as EnumItemOf<T>[],
		...enumItems,
	};
};

export const toOptions = <T>(
	enumItems?: EnumItemOf<T>[],
	filter?: (item: EnumItemOf<T>) => boolean
) => {
	const enumValues = enumItems || [];
	// Sort the enum values based on index
	if (enumValues.some((enumValuesObj) => enumValuesObj?.index)) {
		enumValues.sort((a: EnumItemOf<T>, b: EnumItemOf<T>) =>
			a?.index && b?.index ? (a?.index || 0) - (b?.index || 0) : 0
		);
	}

	const customFilter = filter ? enumValues.filter(filter) : enumValues;
	return customFilter.map((item) => ({
		display: item.display || (item.key as string),
		value: item.value,
	}));
};
