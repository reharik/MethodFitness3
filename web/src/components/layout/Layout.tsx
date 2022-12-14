import { useEffect } from 'react';
import styled from 'styled-components';
import { HeaderContainer } from '../../containers/HeaderContainer';
import { MenuContainer } from '../../containers/MenuContainer';
import { AuthenticatedRoutes } from './AuthenticatedRoutes';

type LayoutProps = {
	isReady: boolean;
	children?: React.ReactNode;
};

export const Layout = ({ isReady, children }: LayoutProps) => {
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		MF.start();
	}, []);
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
					<StyledContent className='content-outer'>
						<div id='messageContainer'></div>
						<div id='contentInner'>
							<AuthenticatedRoutes />
						</div>
						<div className='content-footer'>
							<span>&nbsp;</span>
						</div>
					</StyledContent>
				</StyledMainContent>
			</StyledBody>
		</StyledMainBody>
	);
};

const StyledContent = styled.div(
	({ theme: { color } }) => `
							paddingRight: 24;
							margin: 0;
							minHeight: '100%';
`
);

const StyledMainContent = styled.div(
	({ theme: { color } }) => `
padding: '0 0 24px 0';
background: '#f2f2f2';
height: 100%;
width: 100%;
`
);

const StyledBody = styled.div(
	({ theme: { color } }) => `
	width: 100%;
	height: 100%;
	display: flex;
	padding-top: 7px;
	border-top: 1px #e5e5e5 solid;
	background-color: #F2F2F2;
	`
);

const StyledMainBody = styled.div(
	({ theme: { color } }) => `
	width: 100%;
	height: 100%;
	`
);
