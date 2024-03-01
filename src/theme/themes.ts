import { darkShadow, lightShadow } from './tokens';
import { colorPalette } from './tokens/colors';
import { typography } from './tokens/typopgraphy';
import { Shadow, Typography } from './types';

export type Theme = {
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    default: string;
    paper: string;
    neutral: string;
  };
  typography: Typography;
  shadow: Shadow;
  actionState: {
    hover: string;
  };
  sideNav: {
    background: string;
  };
};

export const lightTheme: Theme = {
  text: {
    primary: colorPalette.grey800,
    secondary: colorPalette.grey600,
    disabled: colorPalette.grey400,
  },
  background: {
    default: colorPalette.commonWhite,
    paper: colorPalette.commonWhite,
    neutral: colorPalette.grey100,
  },
  typography: {
    ...typography,
  },
  shadow: {
    ...lightShadow,
  },
  actionState: {
    hover: colorPalette.primaryTransparent8,
  },
  sideNav: {
    background: colorPalette.grey100,
  },
};

export const darkTheme: Theme = {
  text: {
    primary: colorPalette.commonWhite,
    secondary: colorPalette.grey400,
    disabled: colorPalette.grey600,
  },
  background: {
    default: colorPalette.grey800,
    paper: colorPalette.grey700,
    neutral: colorPalette.greyTransparent16,
  },
  typography: {
    ...typography,
  },
  shadow: {
    ...darkShadow,
  },
  actionState: {
    hover: colorPalette.greyTransparent8,
  },
  sideNav: {
    background: colorPalette.grey700,
  },
};
