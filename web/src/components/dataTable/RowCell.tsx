import styled from 'styled-components';

type TableRowCellProps<T> = {
	width: string;
	minWidth?: string;
	Text: T[keyof T] | JSX.Element;
};

const RowCell = <T,>({
	Text,
	width,
	minWidth,
}: TableRowCellProps<T>): JSX.Element => {
	return (
		<StyledRowCell width={width} minWidth={minWidth}>
			<StyledSpan>
				{typeof Text === 'string'
					? (Text as string)
					: (Text as JSX.Element)}
			</StyledSpan>
		</StyledRowCell>
	);
};

export { RowCell };

interface StyledRowCellProps {
	width?: string;
	minWidth?: string;
}

const StyledRowCell = styled.div<StyledRowCellProps>(
	({ width, minWidth, theme: { spacing } }) => `
	padding: ${spacing.xs} ${spacing.lg};	
	box-sizing: border-box;
	width: ${width || '100%'};
	min-width: ${minWidth || 'none'};
	max-width: 100%;
	display: flex;
	align-items: center;
`
);

const StyledSpan = styled.span`
	margin: 0;
	width: 100%;
`;
