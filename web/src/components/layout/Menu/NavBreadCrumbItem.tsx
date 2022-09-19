import styled from 'styled-components';

type NavBreadCrumbItemProps = {
	text: string;
	position: string;
	onClick: () => void;
};
export const NavBreadCrumbItem = ({
	text,
	position,
	onClick,
}: NavBreadCrumbItemProps) => {
	if (position !== 'last') {
		return (
			<StyledListItem>
				<StyledListItemLink onClick={onClick}>
					{text}
				</StyledListItemLink>
				<StyledListItemIcon>{`>`}</StyledListItemIcon>
			</StyledListItem>
		);
	}
	return null;
};

const StyledListItem = styled.li(
	({ theme: { color } }) => `
	display: flex;
	align-items: baseline;
  margin: 5px 0px 2px 7px;
	color: #457495;
	cursor: pointer;
	
`
);

const StyledListItemLink = styled.a(
	({ theme: { color } }) => `
color: #457495;
font-size: 0.8em;
text-decoration: none;
:hover {
	color: inherit;
}
`
);

const StyledListItemIcon = styled.div(
	({ theme: { fontSize, spacing } }) => `
	width: 17px;
	padding-left:${spacing.sm};
	font-size: ${fontSize._10};
`
);
