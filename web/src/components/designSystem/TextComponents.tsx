import styled from 'styled-components';

export const H1 = styled.div(
	({ theme: { color, fontSize, weight } }) => `
	color: ${color.MF};
	font-size: ${fontSize._36};
	line-height: 56px;
	letterSpacing: 0.4px;
	font-weight: ${weight.regular};
	`
);

export const H2 = styled.div(
	({ theme: { color, fontSize, weight } }) => `
	color: ${color.MF};
	font-size: ${fontSize._32};
	line-height: 40px;
	letterSpacing: 0.2px;
	font-weight: ${weight.regular};
	`
);

export const H3 = styled.div(
	({ theme: { color, fontSize, weight } }) => `
	color: ${color.MF};
	font-size: ${fontSize._24};
	line-height: 30px;
	letterSpacing: 0.2px;
	font-weight: ${weight.regular};
	`
);

export const H4 = styled.div(
	({ theme: { color, fontSize, weight } }) => `
	color: ${color.MF};
	font-size: ${fontSize._21};
	line-height: 26px;
	letterSpacing: 0.2px;
	font-weight: ${weight.regular};
	`
);

export const P1 = styled.div(
	({ theme: { color, fontSize, weight } }) => `
	color: ${color.MF};
	font-size: ${fontSize._16};
	line-height: 19px;
	letterSpacing: 0.5px;
	`
);

export const P2 = styled.div(
	({ theme: { color, fontSize, weight } }) => `
	color: ${color.MF};
	font-size: ${fontSize._14};
	line-height: 17px;
	letterSpacing: 0.25px;
	font-weight: ${weight.regular};
	`
);

export const P3 = styled.div(
	({ theme: { color, fontSize, weight } }) => `
	color: ${color.MF};
	font-size: ${fontSize._12};
	line-height: 18px;
	letterSpacing: 0.25px;
	font-weight: ${weight.regular};
	margin:0;
	`
);

export const Caption = styled.span(
	({ theme: { color, fontSize, weight } }) => `
	color: ${color.MF};
	font-size: ${fontSize._12};
	line-height: 15px;
	letterSpacing: 0.4px;
	font-weight: ${weight.regular};
	`
);

export const Subtitle = styled.span(
	({ theme: { color, fontSize, weight, spacing } }) => `
	color: ${color.MF};
	font-size: ${fontSize._18};
	font-weight: ${weight.regular};
	line-height: ${spacing.lg};
	letter-spacing: 0.15px;
	`
);

type ButtonTextProps = { primary?: boolean; disabled?: boolean };
export const ButtonLgText = styled.span<ButtonTextProps>(
	({ theme: { fontSize, weight, spacing } }) => `
	font-size: ${fontSize._18};
	line-height: 23px;
	letterSpacing: 0.4px;
	font-weight: ${weight.regular};
	padding: 0 ${spacing.md};
	`
);

export const ButtonMdText = styled.span<ButtonTextProps>(
	({ theme: { fontSize, weight, spacing } }) => `
	font-size: ${fontSize._16};
	line-height: 18px;
	letterSpacing: 0.25px;
	font-weight: ${weight.regular};
	padding: 0 ${spacing.sm};
	`
);

export const ButtonSmText = styled.span<ButtonTextProps>(
	({ theme: { fontSize, weight, spacing } }) => `
	font-size: ${fontSize._12};
	line-height: 20px;
	letterSpacing: 0.25px;
	font-weight: ${weight.bold};
	padding: 0 ${spacing.sm};
	`
);
