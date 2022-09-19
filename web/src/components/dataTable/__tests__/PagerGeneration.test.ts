import { pageNumberGenerator } from '../pager/pageNumberGenerator';
import { PagerInfo, SortDir } from '../TableTypes';

describe('PAGER_GENERATOR', () => {
	let pagerInfo: PagerInfo;

	describe('When calling MUT with valid arg', () => {
		beforeEach(() => {
			pagerInfo = {
				totalRows: 50,
				currentPage: 1,
				setCurrentPage: () => {
					//no-op
				},
				maxPage: 5,
				rowsPerPage: 5,
				setSortOrder: () => {
					/* no-op */
				},
				sortOrder: { sortProperty: '', sortDir: SortDir.asc },
			};
		});
		it('should return an array with same number of nodes as the pagerInfo "maxPage"', () => {
			expect(pageNumberGenerator(pagerInfo, [])).toHaveLength(5);
		});

		it('should return an array of valid pagerItem objects', () => {
			const result = pageNumberGenerator(pagerInfo, []);
			expect(result[0]).toHaveProperty('selected');
			expect(result[0]).toHaveProperty('display');
			expect(result[0]).toHaveProperty('ellipsis');
		});
	});

	describe('When passing totalRows as less than maxPage*rowsPerPage', () => {
		beforeEach(() => {
			pagerInfo = {
				totalRows: 19,
				currentPage: 1,
				setCurrentPage: () => {
					//no-op
				},
				maxPage: 5,
				rowsPerPage: 5,
				setSortOrder: () => {
					/* no-op */
				},
				sortOrder: { sortProperty: '', sortDir: SortDir.asc },
			};
		});
		it('should return the proper number of PagerInfo Items', () => {
			const result = pageNumberGenerator(pagerInfo, []);
			expect(result).toHaveLength(4);

			result.forEach((x, idx) => {
				expect(x.display).toEqual(idx + 1);
			});
		});
		it('should have currentPage as "selected: true"', () => {
			const result = pageNumberGenerator(pagerInfo, []);
			expect(result[0].selected).toEqual(true);
		});
	});

	describe('When passing totalRows equals maxPage', () => {
		beforeEach(() => {
			pagerInfo = {
				totalRows: 22,
				currentPage: 1,
				setCurrentPage: () => {
					//no-op
				},
				maxPage: 5,
				rowsPerPage: 5,
				setSortOrder: () => {
					/* no-op */
				},
				sortOrder: { sortProperty: '', sortDir: SortDir.asc },
			};
		});
		it('should not have ellipsis', () => {
			pagerInfo.totalRows = 24;
			const result = pageNumberGenerator(pagerInfo, []);
			expect(result).toHaveLength(5);
			expect(result[0].ellipsis).toEqual(false);
		});
	});

	describe('When passing totalRows as greater than maxPage*rowsPerPage', () => {
		beforeEach(() => {
			pagerInfo = {
				totalRows: 50,
				currentPage: 1,
				setCurrentPage: () => {
					//no-op
				},
				maxPage: 5,
				rowsPerPage: 5,
				setSortOrder: () => {
					/* no-op */
				},
				sortOrder: { sortProperty: '', sortDir: SortDir.asc },
			};
		});
		it('should have currentPage as "selected: true"', () => {
			const result = pageNumberGenerator(pagerInfo, []);
			expect(result[0].selected).toEqual(true);
		});
		it('should show ellipsis in the fourth PageItem', () => {
			const result = pageNumberGenerator(pagerInfo, []);
			expect(result[pagerInfo.maxPage - 2].ellipsis).toEqual(true);
		});
		it('should show the last page in the final index', () => {
			const result = pageNumberGenerator(pagerInfo, []);
			expect(result[pagerInfo.maxPage - 1].display).toEqual(
				Math.ceil(pagerInfo.totalRows / pagerInfo.rowsPerPage)
			);
		});
	});

	describe("When current page changes to one that's in the current window", () => {
		beforeEach(() => {
			pagerInfo = {
				totalRows: 50,
				currentPage: 1,
				setCurrentPage: () => {
					//no-op
				},
				maxPage: 5,
				rowsPerPage: 5,
				setSortOrder: () => {
					/* no-op */
				},
				sortOrder: { sortProperty: '', sortDir: SortDir.asc },
			};
		});
		it('should not change resulting numbers', () => {
			const result = pageNumberGenerator(pagerInfo, []);
			expect(result[0].display).toEqual(1);
			pagerInfo.currentPage = 3;
			const result1 = pageNumberGenerator(pagerInfo, []);
			expect(result1[0].display).toEqual(1);
		});
	});

	describe('When calling MUT with current page > 3', () => {
		beforeEach(() => {
			pagerInfo = {
				totalRows: 50,
				currentPage: 5,
				setCurrentPage: () => {
					//no-op
				},
				maxPage: 5,
				rowsPerPage: 5,
				setSortOrder: () => {
					/* no-op */
				},
				sortOrder: { sortProperty: '', sortDir: SortDir.asc },
			};
		});
		it('should have currentPage as "selected: true"', () => {
			const result = pageNumberGenerator(pagerInfo, [1, 2, 3]);
			expect(result[2].selected).toEqual(true);
		});
		it('should show ellipsis in the fourth PageItem', () => {
			const result = pageNumberGenerator(pagerInfo, [5, 6, 7]);
			expect(result[pagerInfo.maxPage - 2].ellipsis).toEqual(true);
		});
		it('should show the last page in the final index', () => {
			const result = pageNumberGenerator(pagerInfo, [5, 6, 7]);
			expect(result[pagerInfo.maxPage - 1].display).toEqual(
				Math.ceil(pagerInfo.totalRows / pagerInfo.rowsPerPage)
			);
		});
		it('should return proper pagesitems', () => {
			const result = pageNumberGenerator(pagerInfo, [1, 2, 3]);

			expect(result[2].display).toEqual(5);
		});
	});

	describe('When calling MUT where currentSlice ends within 2 pages of the last page', () => {
		beforeEach(() => {
			pagerInfo = {
				totalRows: 50,
				currentPage: 6,
				setCurrentPage: () => {
					//no-op
				},
				maxPage: 5,
				rowsPerPage: 5,
				setSortOrder: () => {
					/* no-op */
				},
				sortOrder: { sortProperty: '', sortDir: SortDir.asc },
			};
		});
		it('should not show the ellipsis', () => {
			const result = pageNumberGenerator(pagerInfo, [6, 7, 8]);
			expect(result[3].display).toBeGreaterThan(-1);
		});
	});

	describe('When window is last {maxPage} number of pages', () => {
		beforeEach(() => {
			pagerInfo = {
				totalRows: 50,
				currentPage: 9,
				setCurrentPage: () => {
					//no-op
				},
				maxPage: 5,
				rowsPerPage: 5,
				setSortOrder: () => {
					/* no-op */
				},
				sortOrder: { sortProperty: '', sortDir: SortDir.asc },
			};
		});
		it('should not slide anymore', () => {
			const result = pageNumberGenerator(pagerInfo, [6, 7, 8]);
			expect(result[0].display).toEqual(6);
		});
	});

	describe('When currentPage is equal to the last page and the currentSlice[2] is below totalPages - 2', () => {
		beforeEach(() => {
			pagerInfo = {
				totalRows: 50,
				currentPage: 10,
				setCurrentPage: () => {
					//no-op
				},
				maxPage: 5,
				rowsPerPage: 5,
				setSortOrder: () => {
					/* no-op */
				},
				sortOrder: { sortProperty: '', sortDir: SortDir.asc },
			};
		});
		it('should slide the window to the end', () => {
			const result = pageNumberGenerator(pagerInfo, [1, 2, 3]);
			expect(result[0].display).toEqual(6);
			expect(result[3].display).toEqual(9);
		});
	});
});
