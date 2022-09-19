import styled from 'styled-components';
import { pageNumberGenerator, PagerItem } from './pageNumberGenerator';
import { useEffect, useState } from 'react';

import { iconEnum, IconButton } from '../../designSystem/iconLibrary';
import { PagerInfo } from '../TableTypes';

type PagerProps = {
	pagerInfo: PagerInfo;
};

const getTotalPages = (totalRows: number, rowsPerPage: number) => {
	return Math.ceil(totalRows / rowsPerPage);
};

const Pager = ({ pagerInfo }: PagerProps): JSX.Element | null => {
	const { currentPage, setCurrentPage, totalRows, rowsPerPage, maxPage } =
		pagerInfo;
	const [totalPages, setTotalPages] = useState(
		getTotalPages(totalRows, rowsPerPage)
	);
	const [pages, setPages] = useState<PagerItem[]>([]);

	//Active/disabled arrow logic
	let isLeftArrowDisabled = true;
	let isRightArrowDisabled = false;
	if (currentPage > 1 && currentPage !== totalPages) {
		isLeftArrowDisabled = false;
	} else if (currentPage + 1 <= totalPages) {
		isRightArrowDisabled = false;
	} else {
		isLeftArrowDisabled = false;
		isRightArrowDisabled = true;
	}

	//Handlers for navigating pager items
	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const handleNext = () => {
		if (currentPage + 1 <= totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	const handleDirectClick = (pageDisplay: number): void => {
		if (pageDisplay !== -1) {
			setCurrentPage(pageDisplay);
		}
	};

	//When currentPage changes run pagerGenerator again to update pages
	useEffect(() => {
		const currentSlice = pages
			? pages.slice(0, maxPage - 2).map((x: PagerItem) => x.display)
			: [];
		setPages(pageNumberGenerator(pagerInfo, currentSlice));
		//including pages in dependency array would create infinite rerenders
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, isRightArrowDisabled]);

	// When the number of totalRows changes (likely due to filtering) we should
	// reset the pager as well as the total pages
	useEffect(() => {
		setTotalPages(
			getTotalPages(pagerInfo.totalRows, pagerInfo.rowsPerPage)
		);

		setPages(pageNumberGenerator(pagerInfo, []));
		// pagerInfo would cause an infinate loop
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [totalRows]);

	return pages.length > 1 ? (
		<StyledContainer data-id='linus_table_pager'>
			<StyledIcon
				data-id='linus_table_page_left_arrow'
				onClick={handlePrev}
				disabled={isLeftArrowDisabled}>
				<IconButton
					icon={iconEnum.ArrowLeft}
					title='Left Arrow'
					disabled={isLeftArrowDisabled}
				/>
			</StyledIcon>
			<StyledList>
				{pages?.map((page, idx) => {
					return (
						<StyledItem
							data-id='linus_table_page'
							key={page.display}
							active={page.selected}
							isEllipsis={page.ellipsis}
							onClick={() => handleDirectClick(page.display)}>
							{page.ellipsis ? '...' : page.display}
						</StyledItem>
					);
				})}
			</StyledList>
			<StyledIcon
				data-id='linus_table_page_right_arrow'
				onClick={handleNext}
				disabled={isRightArrowDisabled}>
				<IconButton
					icon={iconEnum.ArrowRight}
					title='Right Arrow'
					disabled={isRightArrowDisabled}
				/>
			</StyledIcon>
		</StyledContainer>
	) : null;
};

export { Pager };

const StyledContainer = styled.div(
	({ theme: { color } }) => `
		min-width: 0px;
		height: 40px;
		border-radius: 20px;
		border: 1px solid ${color.tableBorder};
		display: flex;
		align-items: center;
	`
);
const StyledList = styled.ul`
	list-style: none;
	height: 40px;
	display: flex;
	align-items: center;
	box-sizing: border-box;
`;

type StyledItemProps = {
	active: boolean;
	isEllipsis: boolean;
};
const StyledItem = styled.li<StyledItemProps>(
	({ active, isEllipsis, theme: { color } }) => `
	border: 1px solid ${color.tableBorder};
	border-right: none;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${active ? color.pageHover : 'none'};
	color: ${active ? color.textBlue : color.bodyText};

	&:last-of-type {
		border-right: 1px solid ${color.tableBorder};
	}

	&:hover {
		cursor: ${isEllipsis ? 'not-allowed' : 'pointer'};
		background: ${isEllipsis ? 'none' : color.pageHover};
	}
	`
);

type StyledIconProps = {
	disabled: boolean;
};
const StyledIcon = styled.div<StyledIconProps>(
	({ disabled, theme: { color } }) => `
	min-width: 44px;
	height: 38px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${disabled ? color.disabledPagerBg : 'none'};
	opacity: ${disabled ? '0.5' : '1'};

	&:hover {
		cursor: ${disabled ? 'not-allowed' : 'pointer'};
	}

	&:first-of-type {
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
	}
	&:last-of-type {
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
	}

  > * {
    &:hover {
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
    }
  }
`
);
