import styled from 'styled-components';
import { Pager } from './pager/Pager';
import { PagerInfo } from './TableTypes';
export type DataTableFooterProps = {
	pagerInfo: PagerInfo;
};

const DataTableFooter = ({ pagerInfo }: DataTableFooterProps): JSX.Element => {
	const { totalRows } = pagerInfo;
	const start = pagerInfo.rowsPerPage * (pagerInfo.currentPage - 1);
	const end = pagerInfo.rowsPerPage * pagerInfo.currentPage;
	return (
		<StyledWrapper data-id='linus_table_footer'>
			{/* <div>
				<Trans
					i18nKey='web.dataTable.footer.pageInfo'
					values={{
						start: start + 1,
						end: end > totalRows ? totalRows : end,
						total: totalRows,
					}}
					components={[<strong />, <span />, <StyledSpan />]}
				/>
			</div> */}
			<Pager pagerInfo={pagerInfo} />
		</StyledWrapper>
	);
};

export { DataTableFooter };

const StyledWrapper = styled.div`
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom-left: 20px;
	border-bottom-right: 20px;
`;
const StyledSpan = styled.span(
	({ theme: { spacing, weight } }) => `
	padding: 0 ${spacing.xs};
	font-weight: ${weight.bold};
	`
);
