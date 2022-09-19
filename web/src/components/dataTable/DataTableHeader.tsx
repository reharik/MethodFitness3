import styled from 'styled-components';
import { EnumItemOf } from '../../enums/enumeration';
import { ButtonSm } from '../designSystem/buttons';
import { Icon, TIconEnum } from '../designSystem/iconLibrary';
import { H2 } from '../designSystem/TextComponents';

interface HeaderProps {
	title: string;
	titleIcon?: EnumItemOf<TIconEnum>;
	// buttonText?: string;
	// dataId?: string;
	// onHeaderButtonClick?: (event: React.MouseEvent) => void;
	// operations?: EnumItemOf<TOperationToken>[];
	// buttonIcon?: EnumItemOf<TIconEnum>;
	headerColor?: string;
}

const DataTableHeader = ({
	title,
	titleIcon,
	// buttonText,
	// dataId,
	// onHeaderButtonClick,
	// buttonIcon,
	// operations = [],
	headerColor,
}: HeaderProps): JSX.Element => {
	return (
		<StyledHeaderContainer>
			<StyledTitle
				headerColor={headerColor}
				id={title.replace(/\s/g, '-').toLowerCase()}>
				{titleIcon && (
					<StyledIcon>
						<Icon
							icon={titleIcon}
							title={title}
							width={40}
							height={40}
						/>
					</StyledIcon>
				)}
				{title}
			</StyledTitle>
		</StyledHeaderContainer>
	);
};

export { DataTableHeader };

const StyledHeaderContainer = styled.div(
	({ theme: { spacing } }) => `
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: ${spacing.md} 0;
	`
);
// TODO: trying to use styled(Icon) does not honor
// the styling here.
const StyledIcon = styled.div(
	({ theme: { spacing } }) => `
	margin-right: ${spacing.sm};
	`
);
type StyledTitleProps = {
	headerColor: string | undefined;
};
const StyledTitle = styled(H2)<StyledTitleProps>(
	({ headerColor, theme: { spacing, color } }) => `
	display: flex;
	align-items: center;
	padding: 0 0 0 ${spacing.md};
	color: ${headerColor};
	`
);
const StyledHeaderContent = styled.div`
	display: flex;
	justify-content: space-around;
	align-content: center;
`;
