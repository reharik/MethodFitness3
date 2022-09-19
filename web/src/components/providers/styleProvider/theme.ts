/* eslint-disable max-lines */
/* eslint-disable max-lines */
import { DefaultTheme } from 'styled-components';

const colors = {
	black: '#000000',
	white: '#ffffff',

	blue: '#087DAE',
	blue_light: '#14B2F4',
	blue_lighter: '#62CCF8',
	blue_lightest: '#B1E5FB',
	blue_ultraLight: '#EEF8FF',
	blue_dark: '#065E83',
	blue_darker: '#043E57',
	blue_darkest: '#021F2C',

	yellow: '#FFCA28',
	yellow_light: '#FFD75E',
	yellow_lighter: '#FFE494',
	yellow_lightest: '#FFF2C9',
	yellow_dark: '#DDA700',
	yellow_darker: '#936F00',
	yellow_darkest: '#4A3800',

	green: '#86C65A',
	green_light: '#A4D483',
	green_lighter: '#C3E3AC',
	green_lightest: '#E1F1D6',
	green_dark: '#6DB63A',
	green_darker: '#52862E',
	green_darkest: '#31501C',

	teal: '#009EA1',
	teal_light: '#04BFBF',
	teal_lighter: '#68DCDC',
	teal_lightest: '#B4E8E8',
	teal_dark: '#008A8D',
	teal_darker: '#006365',
	teal_darkest: '#003B3C',

	orange: '#FA5633',
	orange_light: '#FB8066',
	orange_lighter: '#FCAB99',
	orange_lightest: '#FED5CC',
	orange_ultraLight: '#FFF8F8',
	orange_dark: '#E24827',
	orange_darker: '#B82405',
	orange_darkest: '#6E1603',

	purple: '#5867E8',
	purple_light: '#828DEE',
	purple_lighter: '#ACB3F3',
	purple_lightest: '#D5D9F9',
	purple_dark: '#1D30D3',
	purple_darker: '#13208D',
	purple_darkest: '#0A1046',

	gray_10: '#171820',
	gray_20: '#404040',
	gray_30: '#676671',
	gray_40: '#92919B',
	gray_50: '#BBBAC0',
	gray_60: '#D9D8DC',
	gray_70: '#E5E4E8',
	gray_80: '#F2F1F3',
	gray_90: '#F9F9F9',
	gray_OLD: '#E8E8E8',
};

export enum MaxWidthBreakpoint {
	Mobile = 500,
	Tablet = 768,
}

export enum MinWidthBreakpoint {
	Tablet = 501,
	Desktop = 801,
}

export const theme: DefaultTheme = {
	breakpoints: {
		/**
		 * DEPRECATED: It's recommended that you not use the `mobile` breakpoint
		 * when writing CSS. The recommended approach is to write mobile CSS first,
		 * and then use the `tabletUp`, `desktopUp`, `lgDesktopUp`, and
		 * `xlDesktopUp` breakpoints to override that CSS for larger screen sizes.
		 *
		 * 500 px and below.
		 */
		mobile: `@media screen and (max-width: ${MaxWidthBreakpoint.Mobile}px)`,
		/** 501 px and up. */
		tabletUp: `@media screen and (min-width: ${MinWidthBreakpoint.Tablet}px)`,
		/** 768 px and down */
		tabletDown: `@media screen and (max-width: ${MaxWidthBreakpoint.Tablet}px)`,
		/** 801 px and up. */
		desktopUp: `@media screen and (min-width: ${MinWidthBreakpoint.Desktop}px)`,
	},
	borderRadius: {
		/** 2px, 0.125rem **/
		checkbox: '0.125rem',
		/** 4px, 0.25rem */
		md: '0.25rem',
		/** 4px, 0.25rem */
		btn: '0.25rem',
		card: '1.25rem',
		searchBox: '.50rem',
	},
	boxShadow: {
		/* Standard Shadow - Light */
		standard: '0px 2px 10px rgba(23, 24, 32, 0.1);',
		button: '0px 6px 12px rgba(23, 24, 32, 0.15);',
	},
	spacing: {
		/** 2px, 0.125rem */
		xxs: '2px',
		/** 4px, 0.25rem */
		xs: '4px',
		/** 8px, 0.5rem */
		sm: '8px',
		/** 16px, 1rem */
		md: '16px',
		/** 24px, 1.5rem */
		lg: '25px',
		/** 32px, 2rem */
		xl: '32px',
		/** 40px, 2.5rem */
		xxl: '40px',
		/** 48px, 3rem */
		xxxl: '48px',
		/** 56px, 3.5rem */
		xxxxl: '56px',
		/** 64px, 3.5rem */
		xxxxxl: '64px',
	},
	baseFont: '"IBM Plex Sans", sans-serif',
	fontSize: {
		_56: '56px',
		_36: '36px',
		_32: '32px',
		_24: '24px',
		_21: '21px',
		_18: '18px',
		_16: '16px',
		_14: '14px',
		_12: '12px',
		_10: '10px',
		_8: '8px',
	},
	weight: {
		light: 300,
		regular: 400,
		medium: 500,
		semi: 600,
		bold: 700,
	},
	color: {
		/* ---- GENERAL ---- */
		white: colors.white,
		black: colors.black,

		/* ---- BODY ---- */
		body: colors.gray_90,
		bodyText: colors.gray_10,
		bodyTextSecondary: colors.gray_30,

		/* ---- CARDS ----- */
		infoTipCardBorderColor: colors.blue_light,
		infoTipCardBackgroundColor: colors.blue_ultraLight,

		/* ---- HEADER ---- */
		headerText: colors.gray_10,
		headerTextSecondary: colors.gray_30,
		headerTestLabelFont: colors.yellow_darkest,
		headerTestLabelBG: colors.yellow_lightest,

		/* ---- LINKS ---- */
		link: colors.purple_dark,
		linkVisited: colors.purple_dark,
		linkHover: colors.purple_dark,
		linkActive: colors.purple_dark,
		linkSelected: colors.purple_dark,
		linkDisabled: colors.gray_30,

		/* ---- MENU ---- */
		menuText: colors.gray_30,
		menuActiveText: colors.gray_10,
		menuActiveBg: colors.gray_70,
		menuHoverBg: colors.gray_80,
		menuHoverText: colors.blue,
		menuBorder: colors.gray_60,
		menuBorderActive: colors.blue_light,

		/* ---- AVATARS ---- */
		avatarBg1: colors.blue_lighter,
		avatarBg2: colors.yellow_lighter,
		avatarBg3: colors.orange_lighter,
		avatarBg4: colors.purple_lighter,
		avatarBg5: colors.teal_lighter,
		avatarBg6: colors.gray_60,
		avatarBg7: colors.green_lighter,
		avatarText: colors.gray_10,

		/* ---- USER NAV ---- */
		userNavText: colors.gray_30,
		userNavActiveText: colors.gray_10,
		userNavActiveBg: colors.gray_80,
		userNavHoverText: colors.blue,

		/* ---- BUTTONS ---- */
		primaryButtonBg: colors.blue,
		primaryButtonHover: colors.blue_light,
		primaryButtonFocusBorder: colors.gray_30,
		primaryButtonFocusText: colors.white,
		secondaryButtonBg: colors.white,
		secondaryButtonColor: colors.blue,
		secondaryButtonBorder: colors.blue,
		secondaryButtonFocusBorder: colors.gray_30,
		secondaryButtonFocusText: colors.gray_30,
		buttonDisabled: colors.gray_OLD,

		/* ---- ALERTS ---- */
		alertError: colors.orange_darker,
		alertErrorText: colors.orange,
		alertInfoText: colors.blue,
		alertWarning: colors.yellow,
		alertWarningText: colors.yellow,
		alertWarningTextDark: colors.yellow_darker,
		alertSuccess: colors.green,
		alertSuccessText: colors.green,

		/* ---- FORMS ---- */
		formError: colors.orange_darker,
		inputBorder: colors.gray_60,
		formText: colors.gray_30,
		label: '#666666',
		inputHover: colors.blue_light,
		inputFocus: colors.blue_light,
		formTextDisabled: colors.gray_40,
		formDisabledBg: colors.gray_90,
		dropdownItemBorder: colors.gray_60,
		checkboxBorder: colors.gray_30,

		/* ---- DATA TABLE ---- */
		tableBorder: colors.gray_60,
		cellHoverBg: colors.gray_90,
		activeText: colors.green_darker,
		invitedText: colors.gray_10,
		deactivatedText: colors.orange_darker,
		titleText: colors.gray_10,
		kebabIcon: colors.blue,
		kebabLinkHover: colors.blue_ultraLight,
		kebabMenuBorder: colors.blue,
		rowHoverEdgeColor: colors.blue_light,
		pageHover: colors.blue_ultraLight,
		disabledPagerBg: colors.gray_70,

		/* ---- DATA VISUALIZATION ---- */
		graphBlue: colors.teal,
		graphGreen: colors.green,
		graphGreenDarkest: colors.green_darkest,
		graphOrange: colors.orange,
		graphOrangeDarker: colors.orange_darker,
		graphYellow: colors.yellow,
		graphYellowDarker: colors.yellow_darker,
		graphTextPrimary: colors.gray_10,
		graphTextSecondary: colors.gray_30,
		graphTextAlert: colors.orange_darker,
		graphGrid: colors.gray_60,

		/* ---- LOADING ---- */
		loadingSpinner: colors.white,
		loadingDot: colors.black,

		/* ---- TEXT ---- */
		textDisabled: colors.gray_40,
		textInfo: colors.gray_30,
		textSuccess: colors.green,
		textAlert: colors.orange_darker,
		/* colors.blue should be textInfo as per figma, since textInfo is taken renaming it to textBlue */
		textBlue: colors.blue,
		textSubtitle: colors.gray_10,
		MF: '#666666',

		/* ---- FOOTER ---- */
		footer: colors.blue_ultraLight,
		footerCopyright: colors.gray_10,

		/* --- SEPARATORS ---- */
		infoSeparator: colors.gray_60,
		reportInfoSeparator: colors.teal_light,

		/* ------ WIDGETS ------- */
		iconBg: colors.blue_ultraLight,
		scoringRowBgSuccess: colors.green_lightest,
		scoringRowBgAlertWarning: colors.yellow_lightest,
		scoringRowBgAlertError: colors.orange_lightest,

		reportTitleBar: colors.teal_light,
		regulatoryTitleBar: colors.blue_ultraLight,

		/* ------ ICONS ------- */
		iconInvite: colors.blue,
		iconArrowCircle: colors.blue,
		iconAddUserSolid: colors.blue,
		iconUserActiveStatus: colors.green,
		iconMenuItem: colors.blue,
		iconAddBattery: colors.blue,

		/* ------ REPORTS ------- */
		reportVerticalDivider: colors.gray_60,

		/* ------ LIFESTYLE FACTORS ------- */
		lifestyleBeMindful: colors.yellow_light,
		lifestyleBuildYourVillage: colors.blue_light,
		lifestyleEatGreenAndLean: colors.orange_dark,
		lifestyleGetGoodRest: colors.blue,
		lifestyleKeepHealthInCheck: colors.orange_light,
		lifestyleLearnSomethingNew: colors.green_dark,
		lifestyleMoveEveryDay: colors.yellow_dark,
		lifestyleStayTrueToPurpose: colors.green_light,

		lifestylePointer: colors.gray_60,
		pillarStatusHeader: colors.blue,
		elevatedRiskFlag: colors.orange,
	},
};
