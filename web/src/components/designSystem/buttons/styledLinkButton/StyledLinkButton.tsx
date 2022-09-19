import { ReactNode } from 'react';
import styled from 'styled-components';

interface SLButton {
	width?: string;
	children: ReactNode;
	dataId?: string;
	onClick: (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		e?: any
	) => void;
	role: string;
}

export const StyledLinkButton = styled.button<SLButton>(
	({ width, theme: { color } }) => `
  border: none;
  background-color: transparent;
  padding: 0;
  width: ${width || 'unset'};
  color: ${color.link};
  cursor: pointer;
  @media print {
    display: none;
  }
`
);
