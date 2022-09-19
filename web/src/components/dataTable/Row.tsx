import { RowCell } from './RowCell';
import { TableColumn } from './TableTypes';
import styled from 'styled-components';

type TableRowProps<T> = {
	columns: TableColumn<T>[];
	dataRow: T;
	deviantWidth?: string;
};
const Row = <T,>({
	columns,
	dataRow,
	deviantWidth,
}: TableRowProps<T>): JSX.Element | null => {
	const cells = columns.map((column, idx) => {
		let dataValue = dataRow[column.propertyName as keyof T];
		let component;
		if (column.formatProperty) {
			dataValue = column.formatProperty({ column, value: dataValue });
		}
		if (column.rowColumnComponent) {
			component = column.rowColumnComponent({
				column: column,
				value: dataValue,
				row: dataRow,
			});
		}

		return (
			<RowCell
				width={column.width || ''}
				minWidth={column.minWidth}
				Text={component || dataValue}
				key={idx}
			/>
		);
	});

	return (
		<StyledRow data-id='data_table_row' deviantWidth={deviantWidth}>
			{cells}
		</StyledRow>
	);
};

export { Row };

type StyledRowProps = {
	deviantWidth?: string;
};
const StyledRow = styled.div<StyledRowProps>(
	({ deviantWidth, theme: { color, boxShadow, spacing } }) => `
	min-width: ${deviantWidth ? deviantWidth : '1080px'};
	display: flex;
	border-collapse: collapse;
	transition: 0.15s ease all;
	min-height: ${spacing.xxxxxl};
	position: relative;

	&:nth-child(even) {
		background-color: ${color.cellHoverBg};
	}
	&::before {
		content: '';
		width: 4px;
		height: 100%;
		background: ${color.rowHoverEdgeColor};
		border-radius: 2px 0 0 2px;
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0;
		z-index: 10;
		transition: 0.15s;
	}
	&:hover {
		box-shadow: ${boxShadow.standard};
		position: relative;
		top: 0;
		z-index: 2;
		
		&::before {
			opacity: 1;
		}
	}
	`
);
