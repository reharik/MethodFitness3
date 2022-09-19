import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLinkButton } from '../designSystem/buttons';
import { CurrentUserContext } from '../providers/currentUserProvider/CurrentUserProvider';

export const UserProfileHeader = () => {
	const { logoutUser, currentUser } = useContext(CurrentUserContext);
	const logout = () => {
		logoutUser();
	};
	const userName = `${currentUser.firstName} ${currentUser.lastName}`;
	return (
		<StyledProfileLinks>
			<StyledLink id='userName' data-id={'userName'} to='profile'>
				{userName}
			</StyledLink>
			<StyledButton data-id={'signOut'} role='button' onClick={logout}>
				&nbsp;Sign out&nbsp;
			</StyledButton>
		</StyledProfileLinks>
	);
};

const StyledButton = styled(StyledLinkButton)(
	({ theme: { color } }) => `
	border-left: 2px solid #F6F6F6;
	color: white;
	font-family: verdana;
	font-size: 10px;
	font-weight: bold;
	padding: 0 3px 0 3px;
	text-decoration: none;
	line-height: 12px;
	active: {
		background: white;
		color: #333333 !important;
		border-radius: 3px;
	}
`
);
const StyledLink = styled(Link)(
	({ theme: { color } }) => `
	color: white;
	font-family: verdana;
	font-size: 10px;
	font-weight: bold;
	padding-right: 8px;
	line-height: 12px;

	active: {
		background: white;
		color: #333333 !important;
		border-radius: 3px;
	}
`
);

const StyledProfileLinks = styled.div(
	({ theme: { color } }) => `
  display: flex;
  justify-content: center;
	align-items: center;
	margin:8px 12px 0 0;
	line-height:10px;
`
);
