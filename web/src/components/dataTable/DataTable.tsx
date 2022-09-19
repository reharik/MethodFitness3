import styled from 'styled-components';
import { Header } from './Header';
import { Row } from './Row';
import { DataTableProps } from './TableTypes';

const DataTable = <T,>({
	columns,
	tableData = [],
	onSort,
	deviantWidth,
}: DataTableProps<T>): JSX.Element => {
	const emptyTableData = tableData.length === 0;

	return (
		<StyledContainer emptyTableData={emptyTableData}>
			<Header
				columns={columns}
				onSortData={onSort}
				deviantWidth={deviantWidth}
			/>
			{tableData.map((data, idx) => (
				<Row
					columns={columns}
					dataRow={data}
					key={idx}
					deviantWidth={deviantWidth}
				/>
			))}
		</StyledContainer>
	);
};

export { DataTable };

type StyledContainerProps = {
	emptyTableData: boolean;
};

const StyledContainer = styled.div<StyledContainerProps>(
	({ theme: { color }, emptyTableData }) => `
	border-bottom: ${!emptyTableData && `1px solid ${color.tableBorder}`};
	overflow-y: visible;
	overflow-x: auto;
	`
);
