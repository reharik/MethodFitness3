import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { theme as mainTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';

export interface StyleProviderProps {
	children: ReactNode;
	theme?: DefaultTheme;
}

export const StyleProvider = ({
	children,
	theme,
}: StyleProviderProps): JSX.Element => {
	return (
		<ThemeProvider theme={theme || mainTheme}>
			<>
				<GlobalStyle />
				{children}
			</>
		</ThemeProvider>
	);
};
