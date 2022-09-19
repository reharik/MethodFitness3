import { InputChildrenProps, DropdownOption } from '../formTypes';

type AvailableProps = {
	[key: string]: string | DropdownOption[];
};

export const definedProps = <T>(
	props: InputChildrenProps<T>
): AvailableProps => {
	return Object.keys(props).reduce((acc, key) => {
		if (props[key as keyof InputChildrenProps<T>]) {
			acc[key] = props[key as keyof InputChildrenProps<T>] as
				| string
				| DropdownOption[];
		}
		return acc;
	}, {} as AvailableProps);
};
