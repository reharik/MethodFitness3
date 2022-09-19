import styled from 'styled-components';
import { HeaderContainer } from '../../containers/HeaderContainer';
import { MenuContainer } from '../../containers/MenuContainer';

type LayoutProps = {
	isReady: boolean;
	children?: React.ReactNode;
};

export const Layout = ({ isReady, children }: LayoutProps) => {
	if (!isReady) {
		return null;
	}
	return (
		<StyledMainBody style={{ height: '100%' }}>
			<HeaderContainer />
			<StyledBody>
				{/* <Burger
					breakpoint='sm'
					collapsible={true}
					style={{
						overflow: 'hidden',
						background: '#f2f2f2',
					}}> */}
				<MenuContainer />
				{/* </Burger> */}
				<StyledMainContent>
					<StyledContent>{children}</StyledContent>
				</StyledMainContent>
			</StyledBody>
		</StyledMainBody>
	);
};

const StyledContent = styled.div(
	({ theme: { color } }) => `
							paddingRight: 24,
							margin: 0,
							minHeight: '100%',
`
);

const StyledMainContent = styled.div(
	({ theme: { color } }) => `
padding: '0 0 24px 0',
background: '#f2f2f2',
`
);

const StyledBody = styled.div(
	({ theme: { color } }) => `
display: flex;
	`
);

const StyledMainBody = styled.div(
	({ theme: { color } }) => `
`
);
