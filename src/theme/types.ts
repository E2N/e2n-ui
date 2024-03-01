export type Theme = {
  fontFamily: {
    sansSerif: string;
  };
  size: {
    base: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    subtitle2: string;
  };
  weight: {
    regular: number;
    semibold: number;
    bold: number;
    extraBold: number;
  };
  lineHeight: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    subtitle2: string;
  };
  link: {
    decoration: string;
    hoverDecoration: string;
  };
  spacing: {
    base: number;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    full: string;
  };
};

export interface ColorPalette {
  // Neutral colors
  white: string;
  black: string;
  lightBlue: string;

  // Text colors
  textLightPrimary: string;
  textDarkPrimary: string;

  //PRIMARY
  primaryLighter: string;
  primaryLight: string;
  primaryMain: string;
  primaryDark: string;
  primaryDarker: string;

  //PRIMARY Transparent
  primaryTransparent8: string;
  primaryTransparent12: string;
  primaryTransparent16: string;
  primaryTransparent24: string;
  primaryTransparent32: string;
  primaryTransparent48: string;

  //SECONDARY
  secondaryLighter: string;
  secondaryLight: string;
  secondaryMain: string;
  secondaryDark: string;
  secondaryDarker: string;

  //SECONDARY Transparent
  secondaryTransparent8: string;
  secondaryTransparent12: string;
  secondaryTransparent16: string;
  secondaryTransparent24: string;
  secondaryTransparent32: string;
  secondaryTransparent48: string;

  //INFO
  infoLighter: string;
  infoLight: string;
  infoMain: string;
  infoDark: string;
  infoDarker: string;

  //INFO Transparent
  infoTransparent8: string;
  infoTransparent12: string;
  infoTransparent16: string;
  infoTransparent24: string;
  infoTransparent32: string;
  infoTransparent48: string;

  //SUCCESS
  successLighter: string;
  successLight: string;
  successMain: string;
  successDark: string;
  successDarker: string;

  //SUCCESS Transparent
  successTransparent8: string;
  successTransparent12: string;
  successTransparent16: string;
  successTransparent24: string;
  successTransparent32: string;
  successTransparent48: string;

  //WARNING
  warningLighter: string;
  warningLight: string;
  warningMain: string;
  warningDark: string;
  warningDarker: string;

  //WARNING Transparent
  warningTransparent8: string;
  warningTransparent12: string;
  warningTransparent16: string;
  warningtransparent24: string;
  warningTransparent32: string;
  warningTransparent48: string;

  //ERROR
  errorLighter: string;
  errorLight: string;
  errorMain: string;
  errorDark: string;
  errorDarker: string;

  //ERROR Transparent
  errorTransparent8: string;
  errorTransparent12: string;
  errorTransparent16: string;
  errorTransparent24: string;
  errorTransparent32: string;
  errorTransparent48: string;

  //GREY
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
  grey900: string;

  //GREY Transparent
  greyTransparent8: string;
  greyTransparent12: string;
  greyTransparent16: string;
  greyTransparent24: string;
  greyTransparent32: string;
  greyTransparent48: string;

  //COMMON
  commonBlack: string;
  commonWhite: string;

  //COMMON BLACK Transparent
  commonBlackTransparent8: string;
  commonBlackTransparent12: string;
  commonBlackTransparent16: string;
  commonBlackTransparent24: string;
  commonBlackTransparent32: string;
  commonBlackTransparent48: string;

  //COMMON WHITE Transparent
  commonWhiteTransparent8: string;
  commonWhiteTransparent12: string;
  commonWhiteTransparent16: string;
  commonWhiteTransparent24: string;
  commonWhiteTransparent32: string;
  commonWhiteTransparent48: string;
}

type TypographyAttributes = {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
};

export type Typography = {
  fontFamily: string;
  header1: TypographyAttributes;
  header2: TypographyAttributes;
  header3: TypographyAttributes;
  header4: TypographyAttributes;
  header5: TypographyAttributes;
  header6: TypographyAttributes;
  subtitle1: TypographyAttributes;
  subtitle2: TypographyAttributes;
  body1: TypographyAttributes;
  body2: TypographyAttributes;
  caption: TypographyAttributes;
  overline: TypographyAttributes;
  tableHead: TypographyAttributes;
  tableCell: TypographyAttributes;
  badge: TypographyAttributes;
  textField: TypographyAttributes;
  textFieldLabel: TypographyAttributes;
  textFieldDescription: TypographyAttributes;
  navItem: TypographyAttributes;
  sidenavSectionTitle: TypographyAttributes;
  sidenavItem: TypographyAttributes;
  sidenavItemMini: TypographyAttributes;
  small: TypographyAttributes;
};

export type Shadow = {
  card: string;
  dialog: string;
  dropdown: string;
  tableFooter: string;
};
