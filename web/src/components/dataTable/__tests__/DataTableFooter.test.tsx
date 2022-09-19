import { DataTableFooter, DataTableFooterProps } from '../DataTableFooter';
import { render, screen } from '../../../../jest/test-utils';
import { SortDir } from '../TableTypes';

describe('<DataTableFooter />', () => {
	const defaultPager: DataTableFooterProps['pagerInfo'] = {
		totalRows: 22,
		currentPage: 1,
		setCurrentPage: jest.fn(),
		rowsPerPage: 10,
		maxPage: 5,
		setSortOrder: jest.fn(),
		sortOrder: { sortProperty: '', sortDir: SortDir.asc },
	};
	it('should render without error', () => {
		const props: DataTableFooterProps = { pagerInfo: { ...defaultPager } };
		render(<DataTableFooter {...props} />);
	});
	it('should display appropriate text', () => {
		const props: DataTableFooterProps = { pagerInfo: { ...defaultPager } };
		render(<DataTableFooter {...props} />);
		const res = screen.getByText(/Showing Results/i);
		expect(res).toBeTruthy();
	});
});
