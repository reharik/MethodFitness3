import { EnumItemOf } from '../../../enums/enumeration';
import { TIconEnum } from '../iconLibrary';

export interface ButtonProps {
	onClick?: (event: React.MouseEvent) => void;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
	width?: string;
	text?: string;
	primary?: boolean;
	IconRight?: EnumItemOf<TIconEnum>;
	IconCenter?: EnumItemOf<TIconEnum>;
	IconLeft?: EnumItemOf<TIconEnum>;
	dataId?: string;
	dataTestId?: string;
}
