import { UserProfileHeader } from './UserProfileHeader';
import styled from 'styled-components';

export const Header = () => (
	<StyledMainHeader>
		<UserProfileHeader />
	</StyledMainHeader>
);

const StyledMainHeader = styled.div(
	({ theme: { color } }) => `
  background: url('/images/header-title.gif') no-repeat #407397;
	min-height: 78px;
  width: 100%;
  margin-bottom: 6px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  border-bottom: 7px white solid;
`
);
