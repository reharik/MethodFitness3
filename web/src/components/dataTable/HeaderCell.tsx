import { useState } from 'react';
import { TableColumn, SortDir } from './TableTypes';
import styled from 'styled-components';
import { SortArrow } from './SortArrow';
import { P1 } from '../designSystem/TextComponents';
import { SortOrder } from './TableTypes';

type HeaderCellProps<T> = {
	column: TableColumn<T>;
	value: string | JSX.Element;
	onSortData: React.Dispatch<React.SetStateAction<SortOrder | undefined>>;
};

const HeaderCell = <T,>({
	column,
	value,
	onSortData,
}: HeaderCellProps<T>): JSX.Element | null => {
	const [sortDir, setSortDir] = useState(SortDir.desc);
	const onSort = () => {
		onSortData({
			sortDir: sortDir || SortDir.asc,
			sortProperty: column.sortProperty || column.propertyName,
		});
		setSortDir((sortDir) =>
			!sortDir || sortDir === SortDir.desc ? SortDir.asc : SortDir.desc
		);
	};
	const sortProp = column.sortable ? { onClick: () => onSort() } : {};
	return (
		<StyledHeaderCell
			value={value}
			width={column.width}
			minWidth={column.minWidth}
			{...sortProp}>
			<StyledP1>{value}</StyledP1>
			{column.sortable ? (
				<StyledSortArrow>
					<SortArrow sortDir={sortDir} />
				</StyledSortArrow>
			) : null}
		</StyledHeaderCell>
	);
};

export { HeaderCell };
interface StyledHeaderCellProps {
	width?: string;
	minWidth?: string;
	value: string | JSX.Element;
}

const StyledHeaderCell = styled.div<StyledHeaderCellProps>(
	({ width, minWidth, value, theme: { color, spacing } }) => `
	padding: 0 ${spacing.lg};
	box-sizing: border-box;
	width: ${width || '100%'};
	min-width: ${minWidth || 'none'};
	max-width: 100%;
	height: 62px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: 0.2s ease all;
	
	&:first-child {
		border-left: none;
	}

	&:hover {
		background: ${value ? color.cellHoverBg : ''};
		cursor: ${value ? 'pointer' : ''};
	}
	`
);

const StyledP1 = styled(P1)(
	({ theme: { weight } }) => `
	display: flex;
	align-items: center;
	height: auto;
	margin: 0;
	font-weight: ${weight.medium};
	`
);

const StyledSortArrow = styled.div`
	margin-left: 5px;
`;
