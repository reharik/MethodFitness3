export interface StyledTheme {
	breakpoints: {
		/** 500 px and down */
		mobile: string;
		/** 501 px and up */
		tabletUp: string;
		/** 768 px and down */
		tabletDown: string;
		/** 801 px and up */
		desktopUp: string;
	};
	borderRadius: {
		checkbox: string;
		/** 4px, 0.25rem */
		md: string;
		/** 4px, 0.25rem */
		btn: string;
		card: string;
		searchBox: string;
	};
	boxShadow: {
		/* Standard Shadow - Light */
		standard: string;
		/* Button Shadow */
		button: string;
	};
	spacing: {
		/** 2px, 0.125rem */
		xxs: string;
		/** 4px, 0.25rem */
		xs: string;
		/** 8px, 0.5rem */
		sm: string;
		/** 16px, 1rem */
		md: string;
		/** 24px, 1.5rem */
		lg: string;
		/** 32px, 2rem */
		xl: string;
		/** 40px, 2.5rem */
		xxl: string;
		/** 48px, 3rem */
		xxxl: string;
		/** 56px, 3.5rem */
		xxxxl: string;
		/** 64px, 3.5rem */
		xxxxxl: string;
	};
	baseFont: string;
	fontSize: {
		_56: string;
		_36: string;
		_32: string;
		_24: string;
		_21: string;
		_18: string;
		_16: string;
		_14: string;
		_12: string;
		_10: string;
		_8: string;
	};
	weight: {
		light: number;
		regular: number;
		medium: number;
		semi: number;
		bold: number;
	};
	color: {
		/* ---- GENERAL ---- */
		white: string;
		black: string;

		/* ---- BODY ---- */
		body: string;
		bodyText: string;
		bodyTextSecondary: string;

		/* ---- CARDS ---- */
		infoTipCardBorderColor: string;
		infoTipCardBackgroundColor: string;

		/* ---- HEADER ---- */
		headerText: string;
		headerTextSecondary: string;
		headerTestLabelFont: string;
		headerTestLabelBG: string;

		/* ---- LINKS ---- */
		link: string;
		linkVisited: string;
		linkHover: string;
		linkActive: string;
		linkSelected: string;
		linkDisabled: string;

		/* ---- MENU ---- */
		menuText: string;
		menuActiveText: string;
		menuActiveBg: string;
		menuHoverBg: string;
		menuHoverText: string;
		menuBorder: string;
		menuBorderActive: string;

		/* ---- AVATARS ---- */
		avatarBg1: string;
		avatarBg2: string;
		avatarBg3: string;
		avatarBg4: string;
		avatarBg5: string;
		avatarBg6: string;
		avatarBg7: string;
		avatarText: string;

		/* ---- USER NAV ---- */
		userNavText: string;
		userNavActiveText: string;
		userNavActiveBg: string;
		userNavHoverText: string;

		/* ---- BUTTONS ---- */
		primaryButtonBg: string;
		primaryButtonHover: string;
		primaryButtonFocusBorder: string;
		primaryButtonFocusText: string;
		secondaryButtonBg: string;
		secondaryButtonColor: string;
		secondaryButtonBorder: string;
		secondaryButtonFocusBorder: string;
		secondaryButtonFocusText: string;
		buttonDisabled: string;

		/* ---- ALERTS ---- */
		alertError: string;
		alertErrorText: string;
		alertInfoText: string;
		alertWarning: string;
		alertWarningText: string;
		alertWarningTextDark: string;
		alertSuccess: string;
		alertSuccessText: string;

		/* ---- FORMS ---- */
		formError: string;
		inputBorder: string;
		formText: string;
		label: string;
		inputHover: string;
		inputFocus: string;
		formTextDisabled: string;
		formDisabledBg: string;
		dropdownItemBorder: string;
		checkboxBorder: string;

		/* ---- DATA TABLE ---- */
		tableBorder: string;
		cellHoverBg: string;
		activeText: string;
		invitedText: string;
		deactivatedText: string;
		titleText: string;
		kebabIcon: string;
		kebabLinkHover: string;
		kebabMenuBorder: string;
		rowHoverEdgeColor: string;
		pageHover: string;
		disabledPagerBg: string;

		/* ---- DATA VISUALIZATIONS ---- */
		graphBlue: string;
		graphGreen: string;
		graphGreenDarkest: string;
		graphOrange: string;
		graphOrangeDarker: string;
		graphYellow: string;
		graphYellowDarker: string;
		graphTextPrimary: string;
		graphTextSecondary: string;
		graphTextAlert: string;
		graphGrid: string;

		/* ---- LOADING ---- */
		loadingSpinner: string;
		loadingDot: string;

		/* ---- TEXT ---- */
		textDisabled: string;
		textInfo: string;
		textAlert: string;
		textSuccess: string;
		textBlue: string;
		textSubtitle: string;
		MF: string;
		/* ---- FOOTER ---- */
		footer: string;
		footerCopyright: string;

		/* --- SEPARATORS ---- */
		infoSeparator: string;
		reportInfoSeparator: string;
		/* ------ WIDGETS ------- */
		iconBg: string;
		scoringRowBgSuccess: string;
		scoringRowBgAlertWarning: string;
		scoringRowBgAlertError: string;

		reportTitleBar: string;
		regulatoryTitleBar: string;

		/* ------ ICONS ------- */
		iconInvite: string;
		iconArrowCircle: string;
		iconAddUserSolid: string;
		iconUserActiveStatus: string;
		iconMenuItem: string;
		iconAddBattery: string;

		/* ------ REPORTS ------- */
		reportVerticalDivider: string;

		/* ------ LIFESTYLE FACTORS ------- */
		lifestyleBeMindful: string;
		lifestyleBuildYourVillage: string;
		lifestyleEatGreenAndLean: string;
		lifestyleGetGoodRest: string;
		lifestyleKeepHealthInCheck: string;
		lifestyleLearnSomethingNew: string;
		lifestyleMoveEveryDay: string;
		lifestyleStayTrueToPurpose: string;

		lifestylePointer: string;
		pillarStatusHeader: string;
		elevatedRiskFlag: string;
	};
}
