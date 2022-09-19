import { EnumItemOf } from '../../enums/enumeration';
import { TIconEnum } from '../designSystem/iconLibrary';

export type FilterFunction = <T>(filter: string, candidate: T) => boolean;

export enum SortDir {
	asc = 'ASC',
	desc = 'DESC',
}

export type HeaderColumnComponentProps<T> = {
	column: TableColumn<T>;
};

export type RowColumnProps<T> = {
	column: TableColumn<T>;
	value: T[keyof T];
	row?: T;
};

export type TableColumnOption<T> = {
	key: string;
	value: string;
	callback: (row: T) => void;
	// operations?: EnumItemOf<TOperationToken>[];
};

export type TableColumn<T> = {
	propertyName: string;
	// TODO: Fix the issue with this and DataTables.stories.tsx
	formatProperty?: (format: RowColumnProps<T>) => T[keyof T];
	rowColumnComponent?: (format: RowColumnProps<T>) => JSX.Element | null;
	width?: string;
	minWidth?: string;
	headerDisplay?: string;
	headerColumnComponent?: (
		format: HeaderColumnComponentProps<T>
	) => JSX.Element;
	sortable?: boolean;
	sortDir?: SortDir;
	sortProperty?: string;
	options?: TableColumnOption<T>[];
};

export type DataTableProps<T> = {
	columns: TableColumn<T>[];
	tableData: T[];
	onSort: React.Dispatch<React.SetStateAction<SortOrder | undefined>>;
	deviantWidth?: string;
	fallbackText: string;
	longText?: string;
	noDataIcon?: EnumItemOf<TIconEnum>;
	isFilteringData?: boolean;
	notFoundTitle?: string;
	notFoundSubtitle?: string;
};

export type PagerInfo = {
	totalRows: number;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	rowsPerPage: number;
	maxPage: number;
	setSortOrder: React.Dispatch<React.SetStateAction<SortOrder | undefined>>;
	sortOrder?: SortOrder;
};

export type SortOrder = {
	sortProperty?: string;
	sortDir?: SortDir;
};
