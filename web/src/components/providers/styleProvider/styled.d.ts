/* eslint-disable max-lines */
import 'styled-components';
import type { StyledTheme } from './StyledTheme';
declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends StyledTheme {}
}
