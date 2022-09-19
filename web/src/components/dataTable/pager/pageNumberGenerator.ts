import { PagerInfo } from '../TableTypes';

export type PagerItem = {
	display: number;
	selected: boolean;
	ellipsis: boolean;
};

export const pageNumberGenerator = (
	pagerInfo: PagerInfo,
	currentSlice: number[]
): PagerItem[] => {
	const { totalRows, rowsPerPage, maxPage, currentPage } = pagerInfo;
	const totalPages = Math.ceil(totalRows / rowsPerPage);
	//End of the currentSlice, based on maxPage
	const indexBeforeEllipsis = maxPage - 3;

	const buildNormalNodes = (arr: number[]) => {
		return arr.map((slot) => {
			return {
				display: slot,
				selected: slot === currentPage,
				ellipsis: false,
			};
		});
	};

	const handleStaticWindow = () => {
		const window = [];
		//If there's not too many pages, just show them all
		for (let i = 1; i <= totalPages; i++) {
			window.push(i);
		}
		return window;
	};

	const handleSlidingWindow = (
		currentSlice: number[],
		currentPage: number,
		totalPages: number
	): number[] => {
		const window = [];
		if (currentSlice.length === 0) {
			//If the window of pages doesn't exist, print 1,2,3 etc.
			for (let i = 1; i <= indexBeforeEllipsis + 1; i++) {
				window.push(i);
			}
			return window;
		}
		if (currentSlice[0] > currentPage) {
			//If the currentPage moves lower than the lowest item in this window, slide window down
			for (
				let i = currentPage;
				i <= currentPage + indexBeforeEllipsis;
				i++
			) {
				window.push(i);
			}
			return window;
		}

		if (
			currentSlice[indexBeforeEllipsis] < currentPage &&
			currentPage < totalPages - 1
		) {
			//If the currentPage moves past the last item in this window, slide window up
			for (
				let i = currentPage - indexBeforeEllipsis;
				i <= currentPage;
				i++
			) {
				window.push(i);
			}
			return window;
		}
		if (
			currentSlice[indexBeforeEllipsis] <= totalPages &&
			currentPage === totalPages
		) {
			//If the currentPage is totalPages slide window up to the indexBeforeEllipsis
			for (let i = totalPages - maxPage + 1; i <= totalPages - 2; i++) {
				window.push(i);
			}
			return window;
		}
		return currentSlice;
	};

	const handleEndOfSlidingWindow = (
		newArrayOfNodes: PagerItem[],
		currentPage: number,
		totalPages: number
	) => {
		if (newArrayOfNodes[indexBeforeEllipsis].display >= totalPages - 2) {
			newArrayOfNodes.push({
				display: totalPages - 1,
				selected: totalPages - 1 === currentPage,
				ellipsis: false,
			});
		} else {
			newArrayOfNodes.push({
				display: -1,
				selected: false,
				ellipsis: true,
			});
		}
		newArrayOfNodes.push({
			display: totalPages,
			selected: totalPages === currentPage,
			ellipsis: false,
		});
		return newArrayOfNodes;
	};

	if (totalPages <= maxPage) {
		return buildNormalNodes(handleStaticWindow());
	}

	//Now build the nodes for the result array
	const newNodes = buildNormalNodes(
		handleSlidingWindow(currentSlice, currentPage, totalPages)
	);

	return handleEndOfSlidingWindow(newNodes, currentPage, totalPages);
};
