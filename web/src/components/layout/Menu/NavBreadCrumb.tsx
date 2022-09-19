import styled from 'styled-components';
import { NavBreadCrumbItem } from './NavBreadCrumbItem';

type NavBreadCrumbProps = {
	breadCrumbItems: string[];
	navBreadCrumbClicked: (t: string, i: number) => void;
};

export const NavBreadCrumb = ({
	breadCrumbItems,
	navBreadCrumbClicked,
}: NavBreadCrumbProps) => {
	return (
		<StyledBreadCrumb>
			<StyledBreadCrumbList>
				<NavBreadCrumbItem
					key={0}
					text='Home'
					onClick={() => navBreadCrumbClicked('', -1)}
					position=''
				/>
				{breadCrumbItems.map((item, index) => (
					<NavBreadCrumbItem
						key={index}
						text={item}
						onClick={() => navBreadCrumbClicked(item, index)}
						position={
							index === breadCrumbItems.length - 1 ? 'last' : ''
						}
					/>
				))}
			</StyledBreadCrumbList>
			<StyledBreadCrumbItemLast>
				<StyledBreadCrumbItemLastLink>
					{breadCrumbItems[breadCrumbItems.length - 1]}
				</StyledBreadCrumbItemLastLink>
			</StyledBreadCrumbItemLast>
		</StyledBreadCrumb>
	);
};

const StyledBreadCrumb = styled.div(
	({ theme: { color } }) => `
  background: url('./images/left-nav-title.png') repeat-x scroll 0 0 #71a8c2;
  border-radius: 4px;
  margin-bottom: 15px;
	`
);

const StyledBreadCrumbList = styled.ul(
	({ theme: { color } }) => `
	display:flex;
  flex-flow: row wrap;
`
);

const StyledBreadCrumbItemLast = styled.div(
	({ theme: { color } }) => `
	margin: 2px 0px 5px 7px;
`
);

const StyledBreadCrumbItemLastLink = styled.span(
	({ theme: { color } }) => `
	font-size: 1.1em;
  text-decoration: none;
  color: #ffffff;
	:hover {
		color: #ffffff;
	}
`
);
