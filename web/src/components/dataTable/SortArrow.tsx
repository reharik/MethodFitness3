import { Icon, iconEnum } from '../designSystem/iconLibrary';
import { SortDir } from './TableTypes';

interface SortArrowProps {
	sortDir: string;
}

const SortArrow = ({ sortDir }: SortArrowProps): JSX.Element => {
	return (
		<>
			{sortDir === SortDir.asc && (
				<Icon
					icon={iconEnum.TraditionalArrowDown}
					width={12}
					height={16}
					title='Arrow Down'
				/>
			)}
			{(!sortDir || sortDir === SortDir.desc) && (
				<Icon
					icon={iconEnum.TraditionalArrowUp}
					width={12}
					height={16}
					title='Arrow Up'
				/>
			)}
		</>
	);
};

export { SortArrow };
