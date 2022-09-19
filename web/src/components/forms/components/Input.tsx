import { Checkbox } from './Checkbox';
import { Dropdown } from './Dropdown';
import { PhoneNumber } from './PhoneNumber';
import { RadioButton } from './RadioButton';
import { Text } from './Text';
import { TextArea } from './TextArea';
import { DateInput } from './DateInput';
import { MultiSelectDropdown } from './MultiSelectDropdown';
import { InputChildrenProps } from '../formTypes';

export const Input = <T,>(props: InputChildrenProps<T>): JSX.Element => {
	switch (props.type) {
		case 'select':
			return <Dropdown {...props} />;
		case 'multi':
			return <MultiSelectDropdown {...props} />;
		case 'checkbox':
			return <Checkbox {...props} />;
		case 'radio':
			return <RadioButton {...props} />;
		case 'textarea':
			return <TextArea {...props} />;
		case 'phone':
			return <PhoneNumber {...props} />;
		case 'date':
			return <DateInput {...props} />;
		default:
			return <Text {...props} />;
	}
};
