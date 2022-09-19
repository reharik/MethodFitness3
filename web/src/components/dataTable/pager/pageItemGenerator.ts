import { PagerInfo, SortDir } from '../TableTypes';

export const sortPredicate = <T>(sortDir: SortDir, sortProperty: string) => {
	return (a: T, b: T): number => {
		if (a[sortProperty as keyof T] < b[sortProperty as keyof T])
			return sortDir === SortDir.desc ? -1 : 1;
		if (a[sortProperty as keyof T] > b[sortProperty as keyof T])
			return sortDir === SortDir.desc ? 1 : -1;
		return 0;
	};
};

export const pageItemGenerator = <T>(
	pageData: T[], //made a generic because depending on the page and data that is in a given table, we may be using different TableData[] types (see organizationSchema & teamSchema)
	pagerInfo: PagerInfo
): T[] => {
	const data = pageData;
	const start = pagerInfo.rowsPerPage * (pagerInfo.currentPage - 1);
	const end = pagerInfo.rowsPerPage * pagerInfo.currentPage;
	if (pagerInfo?.sortOrder?.sortProperty) {
		data.sort(
			sortPredicate(
				pagerInfo.sortOrder.sortDir as SortDir,
				pagerInfo.sortOrder.sortProperty
			)
		);
	}
	return data.slice(start, end);
};
