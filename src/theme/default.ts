import { ColorPalette, Theme } from './types';
import '../main.scss';

const SPACING_BASE = 8;

export const colorPalette: ColorPalette = {
  // Neutral colors
  white: '#ffffff',
  black: '#000000',

  //PRIMARY
  primaryLighter: '#B0C1FA',
  primaryLight: '#5479F4',
  primaryMain: '#0037EE',
  primaryDark: '#0027A9',
  primaryDarker: '#001764',
  //PRIMARY Transparent
  primaryTransparent8: '#0037EE14',
  primaryTransparent12: '#0037EE1F',
  primaryTransparent16: '#0037EE29',
  primaryTransparent24: '#0037EE3D',
  primaryTransparent32: '#0037EE52',
  primaryTransparent48: '#0037EE7A',

  //SECONDARY
  secondaryLighter: '#E6E7ED',
  secondaryLight: '#B0B4C6',
  secondaryMain: '#545E83',
  secondaryDark: '#333E6B',
  secondaryDarker: '#000E46',
  //SECONDARY Transparent
  secondaryTransparent8: '#545E8314',
  secondaryTransparent12: '#545E831F',
  secondaryTransparent16: '#545E8329',
  secondaryTransparent24: '#545E833D',
  secondaryTransparent32: '#545E8352',
  seocndaryTransparent48: '#545E837A',

  //INFO
  infoLighter: '#E1D5F9',
  infoLight: '#BEA4F3',
  infoMain: '#9E77ED',
  infoDark: '#7054A8',
  infoDarker: '#423264',
  //INFO Transparent
  infoTransparent8: '#9E77ED14',
  infoTransparent12: '#9E77ED1F',
  infoTransparent16: '#9E77ED29',
  infoTransparent24: '#9E77ED3D',
  infoTransparent32: '#9E77ED52',
  infoTransparent48: '#9E77ED7A',

  //(INFO)

  //SUCCESS
  successLighter: '#C6EBDB',
  successLight: '#83D3B1',
  successMain: '#46BE8A',
  successDark: '#328762',
  successDarker: '#1D503A',
  //SUCCESS Transparent
  successTransparent8: '#46BE8A14',
  successTransparent12: '#46BE8A1F',
  successTransparent16: '#46BE8A29',
  successTransparent24: '#46BE8A3D',
  successTransparent32: '#46BE8A52',
  successTransparent48: '#46BE8A7A',

  //WARNING
  warningLighter: '#FFCFA7',
  warningLight: '#FFB97F',
  warningMain: '#FC904A',
  warningDark: '#B56B2D',
  warningDarker: '#6B3F1B',
  //WARNING Transparent
  warningTransparent8: '#FC904A14',
  warningTransparent12: '#FC904A1F',
  warningTransparent16: '#FC904A29',
  warningtransparent24: '#FC904A3D',
  warningTransparent32: '#FC904A52',
  warningTransparent48: '#FC904A7A',

  //ERROR
  errorLighter: '#FFADAD',
  errorLight: '#FE7170',
  errorMain: '#FE4D4C',
  errorDark: '#B43736',
  errorDarker: '#6B2020',
  //ERROR Transparent
  errorTransparent8: '#FE4D4C14',
  errorTransparent12: '#FE4D4C1F',
  errorTransparent16: '#FE4D4C29',
  errorTransparent24: '#FE4D4C3D',
  errorTransparent32: '#FE4D4C52',
  errorTransparent48: '#FE4D4C7A',

  //GREY
  grey100: '#F2F4F7',
  grey200: '#E4E7EC',
  grey300: '#D0D5DD',
  grey400: '#98A2B3',
  grey500: '#667085',
  grey600: '#475467',
  grey700: '#344054',
  grey800: '#1D2939',
  grey900: '#1D2939',
  //GREY Transparent
  greyTransparent8: '#66708514',
  greyTransparent12: '#6670851F',
  greyTransparent16: '#66708529',
  greyTransparent24: '#6670853D',
  greyTransparent32: '#66708552',
  greyTransparent48: '#6670857A',

  //COMMON
  commonBlack: '#000000',
  commonWhite: '#FFFFFF',
  //COMMON BLACK Transparent
  commonBlackTransparent8: '#00000014',
  commonBlackTransparent12: '#0000001F',
  commonBlackTransparent16: '#00000029',
  commonBlackTransparent24: '#0000003D',
  commonBlackTransparent32: '#00000052',
  commonBlackTransparent48: '#0000007A',
  //COMMON WHITE Transparent
  commonWhiteTransparent8: '#FFFFFF14',
  commonWhiteTransparent12: '#FFFFFF1F',
  commonWhiteTransparent16: '#FFFFFF29',
  commonWhiteTransparent24: '#FFFFFF3D',
  commonWhiteTransparent32: '#FFFFFF52',
  commonWhiteTransparent48: '#FFFFFF7A',

  //TEXT on light
  textOnLightPrimary: '#1D2939',
  textOnlIghtSecondary: '#475467',
  textOnLightDisabled: '#667085',
  //TEXT on dark
  textOnDarkPrimary: '#FFFFFF',
  textOnDarkSecondary: '#667085',
  textOnDarkDisabled: '#475467',

  //DIVIDER
  divider: '#6670853D',

  //Background on light
  backgroundOnLightDefault: '#FFFFFF',
  backgroundOnLightPaper: '#FFFFFF',
  backgroundOnLightNeutral: '#F2F4F7',
  //Background on dark
  backgroundOnDarkDefault: '#161C24',
  backgroundOnDarkPaper: '#1D2939',
  backgroundOnDarkNeutral: '#66708529',
};

export const theme: Theme = {
  fontFamily: {
    sansSerif: 'PublicSans',
  },
  size: {
    base: '16px',
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '18px',
  },
  heading: {
    h1: '32px',
    h2: '24px',
    h3: '21px',
    h4: '18px',
    h5: '16px',
    h6: '14px',
  },
  weight: {
    light: 300,
    regular: 400,
    semibold: 500,
    bold: 600,
  },
  lineHeight: {
    xs: 1,
    sm: 1.1,
    md: 1.5,
    lg: 2,
  },
  link: {
    decoration: 'none',
    hoverDecoration: 'none',
  },
  spacing: {
    base: SPACING_BASE,
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    xs: '4px',
    sm: '8px',
    md: '16px',
  },
};
