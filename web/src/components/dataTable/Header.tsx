import { HeaderCell } from './HeaderCell';
import titleize from 'titleize';
import styled from 'styled-components';
import { TableColumn, SortOrder } from './TableTypes';

type HeaderProps<T> = {
	columns: TableColumn<T>[];
	onSortData: React.Dispatch<React.SetStateAction<SortOrder | undefined>>;
	deviantWidth?: string;
};
const Header = <T,>({
	columns,
	onSortData,
	deviantWidth,
}: HeaderProps<T>): JSX.Element => {
	return (
		<StyledHeader data-id='data_table_header' deviantWidth={deviantWidth}>
			{columns.map((column, idx) => {
				let value;
				if (column.headerColumnComponent) {
					value = column.headerColumnComponent({ column });
				} else if (column.headerDisplay) {
					value = column.headerDisplay;
				} else {
					value = titleize(column.propertyName);
				}
				return (
					<HeaderCell
						value={value}
						column={column}
						key={idx}
						onSortData={onSortData}
					/>
				);
			})}
		</StyledHeader>
	);
};

export { Header };

type StyledHeaderProps = {
	deviantWidth?: string;
};
const StyledHeader = styled.div<StyledHeaderProps>(
	({ deviantWidth, theme: { color, fontSize, weight } }) => `
	min-width: ${deviantWidth ? deviantWidth : '1080px'};
	display: flex;
	border-bottom: 1px solid ${color.tableBorder};
	font-size: ${fontSize._18};
	font-weight: ${weight.bold};
	color: ${color.bodyText};
	border-left: none;
	`
);
